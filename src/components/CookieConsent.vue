<template>
  <transition
    :name="transition"
  >
    <div
      v-if="show"
      class="cookie-consent"
      role="dialog"
    >
      <slot
        name="message"
      >
        <span
          class="cookie-consent-message"
        >
          {{ message }}
          <slot
            name="link"
          >
            <a
              v-bind="{ href, target, rel }"
              class="cookie-consent-link"
              role="button"
            >
              {{ linkLabel }}
            </a>
          </slot>
        </span>
      </slot>
      <section
        @click="dismiss"
      >
        <slot
          name="button"
        >
          <button
            class="cookie-consent-compliance"
            type="button"
          >
            {{ buttonLabel }}
          </button>
        </slot>
      </section>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'CookieConsent',
    props: {
      // default
      transition: {
        type: String,
        default: 'cookie-consent-transition'
      },
      message: {
        type: String,
        default: 'This website uses cookies to ensure you get the best experience on our website.'
      },
      // button
      linkLabel: {
        type: String,
        default: 'Learn more'
      },
      buttonLabel: {
        type: String,
        default: 'Got it!'
      },
      href: {
        type: String,
        default: 'http://cookiesandyou.com'
      },
      target: {
        type: String,
        default: '_blank'
      },
      rel: {
        type: String,
        default: 'noopener'
      },
      // cookie
      cookieName: {
        type: String,
        default: 'cookieconsent_status'
      },
      cookiePath: {
        type: String,
        default: '/'
      },
      cookieDomain: {
        type: String,
        default: ''
      },
      cookieExpiryDays: {
        type: Number,
        default: 365
      }
    },
    data() {
      return {
        show: undefined
      }
    },
    computed: {
      cookie() {
        return !this.getCookie(this.cookieName)
      }
    },
    beforeMount() {
      this.show = this.cookie
    },
    methods: {
      dismiss() {
        this.show = false
        this.setCookie(this.cookieName, 1, this.cookieExpiryDays, this.cookieDomain, this.cookiePath)
      },
      getCookie(name) {
        const value = `; ${document.cookie}`
        const parts = value.split(`; ${name}=`)

        return parts.length !== 2 ?
          undefined :
          parts.pop().split(';').shift()
      },
      setCookie(name, value, expiryDays, domain, path) {
        const exdate = new Date()
        exdate.setDate(exdate.getDate() + (expiryDays || 365))

        const cookie = [
          `${name}=${value}`,
          `expires=${exdate.toUTCString()}`,
          `path=${(path || '/')}`
        ]

        if (domain) {
          cookie.push(`domain=${domain}`)
        }

        document.cookie = cookie.join(';')
      }
    }
  }
</script>

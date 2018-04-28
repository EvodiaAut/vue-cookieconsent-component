<template>
  <div
    id="app"
  >
    <div class="my-5 container">
      <header class="pb-3 clearfix border-bottom">
        <ul
          class="nav float-right"
        >
          <li
            class="nav-item"
          >
            <a
              class="nav-link"
              href="https://github.com/EvodiaAut/vue-cookieconsent-component"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
        <h1 class="text-muted">vue-cookieconsent-component</h1>
        <p class="lead">Vue Cookieconsent</p>
        <div class="d-flex flex-wrap">
          <a
            href="https://www.npmjs.com/package/vue-cookieconsent-component"
            target="_blank"
          >
            <img
              class="m-1"
              src="https://img.shields.io/npm/v/vue-cookieconsent-component.svg?style=for-the-badge"
              alt="vue-cookieconsent-component npm"
            >
          </a>
          <a
            href="https://github.com/EvodiaAut/vue-cookieconsent-component/blob/master/LICENSE.md"
            target="_blank"
          >
            <img
              class="m-1"
              src="https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge"
              alt="vue-cookieconsent-component license"
            >
          </a>
          <a
            href="https://www.npmjs.com/package/vue-cookieconsent-component"
            target="_blank"
          >
            <img
              class="m-1"
              src="https://img.shields.io/npm/dt/vue-cookieconsent-component.svg?style=for-the-badge"
              alt="vue-cookieconsent-component npm"
            >
          </a>
        </div>
      </header>
      <main
        class="my-5 text-center"
        role="main"
      >
        <div
          class="display-4 mb-2"
        >
          Look down
        </div>
        <p>To try again, reload the page</p>
      </main>
    </div>
    <cookie-consent
      :cookie-expiry-days="-1"
    />
  </div>
</template>

<script>
  import CookieConsent from '@/components/CookieConsent'

  export default {
    name: 'App',
    components: {
      CookieConsent
    }
  }
</script>

<style lang="scss">
  /*
    CookieConsent
  */
  @import "scss/cookie-consent";
  @import "scss/cookie-consent-bottom";
  @import "scss/cookie-consent-transition";

  /*
    Bootstrap
  */
  @import "~bootstrap/scss/bootstrap";
</style>

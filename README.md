# vue-cookieconsent-component

> Vue Cookieconsent

[![npm](https://img.shields.io/npm/v/vue-cookieconsent-component.svg?style=for-the-badge)](https://www.npmjs.com/package/vue-cookieconsent-component)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)](https://github.com/EvodiaAut/vue-cookieconsent-component/blob/master/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/vue-cookieconsent-component.svg?style=for-the-badge)](https://www.npmjs.com/package/vue-cookieconsent-component)

[Inspired by cookieconsent](https://github.com/insites/cookieconsent/)

## Demo

[Demo here](https://evodiaaut.github.io/vue-cookieconsent-component/)

## Install

`npm install vue-cookieconsent-component` or `yarn add vue-cookieconsent-component`

## Usage

The most common use case is to register the component globally.

```js
// in your main.js or similar file
import Vue from 'vue'
import cookieconsent from 'vue-cookieconsent-component'

Vue.component('cookie-consent', cookieconsent)
```

Alternatively you can do this to register the components:

```js
// HelloWorld.vue
import CookieConsent from 'vue-cookieconsent-component'

export default {
  name: 'HelloWorld',
  components: {
    CookieConsent
  }
}
```

On your page you can now use html like this:

```html
// see slots or props if you want to extend something
<cookie-consent/>
```

## CSS

```scss
// required and to get updates
@import "./node_modules/vue-cookieconsent-component/src/scss/cookie-consent";
// example or use it
@import "./node_modules/vue-cookieconsent-component/src/scss/cookie-consent-bottom";
@import "./node_modules/vue-cookieconsent-component/src/scss/cookie-consent-transition";
```

Do you like my theme but not the colors or paddings, ...?

```scss
// overwrite variables
$cookieconstent-padding: 1rem;
$cookieconstent-space: .7rem;
$cookieconstent-compliance-padding: .5rem 2rem;
// find more variables in /src/scss/_cookie-consent-variables.scss

@import "./node_modules/vue-cookieconsent-component/src/scss/cookie-consent";
```

## Props

|Prop|Type|Required|Default|Description
|-|-|-|-|-|
|transition|String|false|cookie-consent-transition|Transition name
|message|String|false|This website uses...|Main message
|linkLabel|String|false|Learn more|Link label
|buttonLabel|String|false|Got it!|Button label
|href|String|false|http://cookiesandyou.com|Target link
|target|String|false|_blank|New window
|rel|String|false|noopener|Referrer Policy
|cookieName|String|false|cookieconsent_status|Cookie name
|cookiePath|String|false|/|Cookie path
|cookieDomain|String|false|''|Cookie domain
|cookieExpiryDays|Number|false|365|Cookie expiry days

## Slots

|Name|Description
|-|-|
|message|Message and link
|link|Only the link
|button|Only the button

## Slots example

Create your own content

```html
<cookie-consent>
  <template
    slot="message"
  >
    This website uses cookies
    <a class="btn btn-link" href="#">Read more</a>
  </template>
  <template
    slot="button"
  >
    <button class="btn btn-info">Accept</button>
  </template>
</cookie-consent>
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

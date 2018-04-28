import { shallow } from 'vue-test-utils'
import CookieConsent from '@/components/CookieConsent'

describe('CookieConsent.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallow(CookieConsent)
    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.is('div')).toBe(true)

    expect(wrapper.contains('.cookie-consent-message')).toBe(true)
    expect(wrapper.contains('.cookie-consent-link')).toBe(true)
    expect(wrapper.contains('.cookie-consent-compliance')).toBe(true)

    wrapper.trigger('dismiss')
  })
})

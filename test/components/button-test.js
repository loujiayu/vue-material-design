import Vue from 'vue'
import BaseButton from 'BaseButton.vue'
import {expect} from 'chai'

describe('base button', () => {
  it ('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><base-button label="button"></base-button></div>',
      components: {BaseButton}
    }).$mount()
    expect(vm.$el.querySelector('span').textContent).to.equal('button')
  })
})

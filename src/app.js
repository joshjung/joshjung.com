import Vue from 'vue';
import App from './App.vue';
import './app.scss';

new Vue({
  el: '#app',
  template: '<App name="blah"/>',
  components: { App },
  data: {
    text: 'Whats up'
  }
});

import DemoButton from './demo-button';
import Loading from './loading';
import Overlay from './overlay';
import Popup from './popup';
import Tab from './tab';
import TabItem from './tab-item';
import Transition from './transition';
var version = '1.0.0';

function install(Vue) {
  var components = [DemoButton, Loading, Overlay, Popup, Tab, TabItem, Transition];
  components.forEach(function (item) {
    if (item.install) {
      Vue.use(item);
    } else if (item.name) {
      Vue.component(item.name, item);
    }
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { install, version, DemoButton, Loading, Overlay, Popup, Tab, TabItem, Transition };
export default {
  install: install,
  version: version
};
import Collapse from "./collapse";
import Callback from "./callback";
const collapse = new Collapse(document.querySelector('.container'));
collapse.init();

const callback = new Callback(document.querySelector('.containerChat'));
callback.init();

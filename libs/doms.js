window.ysd = window.ysd || {};

window.ysd.doms = {
  input: (selector, value) => {
    const elm = document.querySelector(selector);
    if (elm) {
      elm.value = value;
    }
  },
  click: (selector) => {
    const elm = document.querySelector(selector);
    if (elm) {
      elm.click();
    }
  },
};

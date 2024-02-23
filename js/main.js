/* global KEEP */

window.addEventListener('DOMContentLoaded', () => {

  KEEP.localStorageKey = 'STATUS';

  KEEP.styleStatus = {
    isExpandPageWidth: false,
    isDark: false,
    fontSizeLevel: 0,
    isOpenPageAside: true
  }

  // set styleStatus to localStorage
  KEEP.setStyleStatus = () => {
    localStorage.setItem(KEEP.localStorageKey, JSON.stringify(KEEP.styleStatus));
  }

  // get styleStatus from localStorage
  KEEP.getStyleStatus = () => {
    let temp = localStorage.getItem(KEEP.localStorageKey);
    if (temp) {
      temp = JSON.parse(temp);
      for (let key in KEEP.styleStatus) {
        KEEP.styleStatus[key] = temp[key];
      }
      return temp;
    } else {
      return null;
    }
  }

  KEEP.refresh = () => {
    KEEP.initUtils();
    KEEP.initHeaderShrink();
    KEEP.initModeToggle();
    KEEP.initBack2Top();

    if (KEEP.theme_config.local_search.enable === true) {
      KEEP.initLocalSearch();
    }

    if (KEEP.theme_config.code_copy.enable === true) {
      KEEP.initCodeCopy();
    }

    if (KEEP.theme_config.lazyload.enable === true) {
      KEEP.initLazyLoad();
    }
  }

  KEEP.refresh();
});

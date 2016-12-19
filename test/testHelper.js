import jsdom from 'jsdom'
import StorageShim from 'node-storage-shim'
import 'ignore-styles'

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
const win = doc.defaultView

global.document = doc
global.window = win
global.window.localStorage = new StorageShim()
global.window.sessionStorage = new StorageShim()

global.window.matchMedia = global.window.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    };
};

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
})
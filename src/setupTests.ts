const Adapter = require("enzyme-adapter-react-16");
const Enzyme = require("enzyme");

Enzyme.configure({ adapter: new Adapter() });


global.requestAnimationFrame = function (callback) {
  return setTimeout(callback, 0);
};

global.cancelAnimationFrame = function (id) {
  clearTimeout(id);
};

global.alert = function(message){
  
};
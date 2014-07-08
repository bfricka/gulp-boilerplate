var _ = require('lodash');
var slugRegex = /\{(.+)\}/;

var dirs = {
  output : {
    base        : './public/dist',
    images      : './public/dist/images',
    styles      : './public/dist/styles',
    javascripts : './public/dist/javascripts'
  },
  images    : './public/images',
  vendor    : './components',
  styles    : './public/stylesheets',
  modules   : './public/modules'
};

/**
 * Match dir slug and replace from object
 * @param  {string} str - Path w/ slug
 * @return {string}     - Replaced path
 */
function d(str) {
  return str.replace(slugRegex, function(m1, m2) {
    return dirs[m2];
  });
}

_.extend(d, dirs);

module.exports = d;
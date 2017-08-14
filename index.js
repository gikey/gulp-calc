'use strict';
var through2 = require('through2');

module.exports = function(options) {
  
  return through2.obj( function ( file, enc, callback ) {
    var divisor = ( options && options.divisor ) || 2;
    
    if( file.isNull() ) {
      return callback( null, file );
    }
    
    if( file.isStream() ) {
      return callback(new PluginError('gulp-calc', 'Streaming not supported'));
    } 
    
    var str = file.contents.toString();
    
    var s = str.replace(/((-?\d+)(\.\d+)?)px/ig, function($0, $1) {
      return ($1 / divisor) + 'px'
    });
    
    file.contents = new Buffer(s);
    return callback(null, file);
  })
  
}


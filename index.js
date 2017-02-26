var gulp = require('gulp');
var through2 = require('through2');
var fs = require('fs');

module.exports = function (opt) {
  return through2.obj(function (file, enc, cb) {
    var name = file.path.replace(/.*\/(.+)\.json$/, '$1');
    var fields = JSON.parse(fs.readFileSync(file.path, 'utf8'));
    var result = "module.exports = require('hapi-ngn-grid-mongoose-crud')('" + name + "', {\n";
    for (var i = 0; i < fields.length; i++) {
      result += '  ' + fields[i].name + ": '" + fields[i].title + "'";
      if (i != fields.length - 1) result += ',';
      result += '\n';
    }
    result += '});\n';
    fs.writeFileSync(opt.routersFolder + '/' + name + '.js', result);
  });
};
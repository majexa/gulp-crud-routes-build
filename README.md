# gulp-crud-routes-build

![Current Version](https://img.shields.io/npm/v/gulp-crud-routes-build.svg)

## Usage:

```javascript
var gulp = require('gulp');
var crudRoutesBuild = require('gulp-crud-routes-build');

module.exports = gulp.task('crud-routes-gen', function () {
  gulp.src('models/*.json', {read: false})
    .pipe(crudRoutesBuild({
      routersFolder: '/your/project/src/lib/crudRoutes'
    }));
});
```
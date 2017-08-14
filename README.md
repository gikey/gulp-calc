### How to use ?

gulpfile: 

```js
var gulp = require('gulp'),
    calc = require('gulp-calc');

gulp.task('calc', function() {
    gulp.src('src/*.css')
      .pipe(calc({
          divisor: 2
      }))
      .pipe(gulp.dest('dist/css'))
})
```

### Example:

css file:

```css
div {
  width: 100.8px;
}

.container {
  width: -200px;
  border: 2px solid #ccc;
  box-shadow: 4px 3px 2px rgba(255, 255, 0, 0.2);
}
```

the converted file:

```css
div {
  width: 50.4px;
}

.container {
  width: -100px;
  border: 1px solid #ccc;
  box-shadow: 2px 1.5px 1px rgba(255, 255, 0, 0.2);
}
```

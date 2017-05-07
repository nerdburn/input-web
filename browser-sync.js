const historyApiFallback = require('connect-history-api-fallback')
const browserSync = require('browser-sync').create()

// browser-sync start --s --index 'html/index.html' --files 'html/**/*.html, build/**/*.js' --no-notify
browserSync.init({
  files: ['html/**/*.html', 'build/**/*.js'],
  server: {
    baseDir: './',
    index: 'html/index.html',
    middleware: [historyApiFallback({
      index: './html/index.html'
    })]
  },
  notify: false
})

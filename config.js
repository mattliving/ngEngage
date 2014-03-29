exports.config = {
  conventions: {
    assets: /^app\/assets\//
  },
  modules: {
    definition: false,
    wrapper: false
  },
  paths: {
    "public": '_public'
  },
  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /^app\/scripts/,
        'js/vendor.js': /^bower_components/
      },
      order: {
        before: [
          'bower_components/lodash/lodash.js'
         ]
      }
    },
    stylesheets: {
      joinTo: {
        'css/app.css': /^app\/styles/
      },
      order: {
        before: [
          'app/styles/_variables.less',
          'app/styles/_overrides.less',
          'app/styles/app.less'
        ]
      }
    }
  }
};

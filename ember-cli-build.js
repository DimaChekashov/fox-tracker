/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const bootstrapPath = 'bower_components/bootstrap-sass/assets/';

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    sassOptions:{
      includePaths: [
        bootstrapPath + 'stylesheets'
      ]
    }
  });
  
  app.import(bootstrapPath + 'javascripts/bootstrap/collapse.js');
  app.import(bootstrapPath + 'javascripts/bootstrap/transition.js');
  app.import('bower_components/moment/moment.js')
  return app.toTree();
};

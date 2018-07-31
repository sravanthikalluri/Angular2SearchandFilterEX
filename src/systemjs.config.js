/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {


  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {

      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      /*'@angular/common/src/pipes/intl':'npm:@angular/common/src/pipes/intl.js',*/


      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'ng2-pagination': 'npm:ng2-pagination', // add mapping for ng2-pagination
      'ng2-filter-pipe': 'node_modules/ng2-filter-pipe' ,//add mapping for ng2-filter

      'ng2-bs3-modal': 'node_modules/ng2-bs3-modal',
      'moment': 'node_modules/moment/moment.js',
      'ng2-bootstrap': 'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
      'mydatepicker': 'npm:mydatepicker/bundles/mydatepicker.umd.js'
     /* "ngx-modal": "node_modules/ngx-modal"*/

    },
    // packages tells the System loader how to load when no filename and/or no extension

    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'ng2-pagination': { //add configuration to load
        main: './index.js',
        defaultExtension: 'js'
      },
      'ng2-filter-pipe': {
        main: 'dist/index.js'  //add configuration to load
      },
      'ng2-bs3-modal': {
        defaultExtension: 'js',
        main: './index.js',
      },
    /*  'mydatepicker': {
        defaultExtension: 'js',
        main: './index.js',
      }*/
     /* 'ng2-bootstrap': {
        defaultExtension: 'js',
        main: 'index.js',
      }*/

      /*'angular2-modal': {
        main: 'bundles/angular2-modal.umd',
        defaultExtension: 'js',
      },
      'angular2-modal/plugins/bootstrap': {
        main: 'angular2-modal.bootstrap.umd',
        defaultExtension: 'js'
      },*/
     /* 'ngx-modal': {
        main :'index.js',
        defaultExtension: 'js'
      }*/
    }
  });
})(this);

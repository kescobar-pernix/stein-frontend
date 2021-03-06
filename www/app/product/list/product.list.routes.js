(function() {
  'use strict';

  angular
    .module('app.product')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('product', {
        url: '/product',
        templateUrl: 'app/product/list/list.html',
        controller: 'ProductListCtrl as vm'
      });

  }

})();

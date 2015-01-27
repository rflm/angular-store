(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = items;
  });

  var items = [
    {
      name: 'blah',
      price: 2.95,
      description: '...',
      canPurchase: true,
    },
    {
      name: 'foo',
      price: 13.42,
      description: '...',
      canPurchase: true,
    },
  ];
})();
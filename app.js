(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = items;
  });

  app.controller("PanelController", function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  var items = [
    {
      name: 'blah',
      price: 2,
      description: '...',
      specifications: 'None yet',
      reviews: 'None yet',
    },
    {
      name: 'foo',
      price: 13.42,
      description: '...',
      specifications: 'None yet',
      reviews: 'None yet',
    },
  ];
})();
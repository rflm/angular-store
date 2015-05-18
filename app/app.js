(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = items;
  });
/*
  app.controller("PanelController", function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });
*/
  app.controller("ReviewController", function(){
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive('productTitle', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });

  app.directive('productPanels', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller:function(){
        this.tab = 1;

        this.selectTab = function(setTab) {
          this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panels'
    };
  });

  var items = []

  for (var i = 0; i < 10; i++) {
    items[i] = {
      name: faker.lorem.words()[1],
      price: (Math.random() * (100.99 - 0.01) + 0.01).toFixed(2),
      description: faker.lorem.sentence(),
      specifications: faker.lorem.sentence(),
      reviews: sampleReviews(5)
    };
  };

  function sampleReviews(number) {
    var reviews = [];
    for (var i = 0; i < number; i++) {
      reviews[i] = {
        stars: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
        body: faker.lorem.sentence(),
        author: faker.internet.email()
      };
    };
    return reviews;
  };
})();
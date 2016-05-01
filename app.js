(function(){
    var app= angular.module('mobile',[]);
    
    app.controller('mobile-review',['$http',function($http){
        var temp = this;
        temp.products=[];
        $http.get('/phones.json').success(function(data){
            temp.products = data;
        });    
    }]);

    app.controller('ReviewController',function(){
        this.prod={};
        
        this.addreview=function(product){
          product.push(this.prod);
          this.prod={};
        };
    });

})();
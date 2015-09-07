angular.module('routerApp', ['routerRoutes', 'ngAnimate'])

// Create the controllers

// This will be the controller for the entire site
.controller('mainController', function(){
  var vm = this;

  // Create a bigMessage variable to display in our view
  vm.bigMessage = 'Não consegue né, Moises?';
})

// Home page specific controller
.controller('homeController', function(){
  var vm = this;
  vm.message = 'Esta é nossa página inicial';
})

// About page controller
.controller('aboutControlller', function(){
  var vm = this;
  vm.message = 'Esta é a página sobre';
})

// Contact page controller
.controller('contactController', function(){
  var vm = this;
  vm.message = 'Esta é a página de contato';
});

"use strict";

// Register `coreHome` component, along with its associated controller and template
angular.
  module("core.home").
  component("home", {
    templateUrl: "app/core/home/home.template.html",
    controller: [
      function HomeController() {
        this.message = "Hello World"
      }
    ]
  });
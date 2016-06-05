"use strict";

angular.module('common.version', [
  'common.version.filter',
  'common.version.directive'
]).value('version', '0.0.1');
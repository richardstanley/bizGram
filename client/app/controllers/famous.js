angular.module('famousCtrl',['famous.angular'])
  .controller('FamousController', function($scope, $famous){
	var Transitionable = $famous['famous/transitions/Transitionable'];
  	var SpringTransition = $famous['famous/transitions/SpringTransition'];
  	Transitionable.registerMethod('spring', SpringTransition);

  	$scope.scale = new Transitionable([1, 1, 1]);
  	//$scope.angle = new Transitionable(0);

    $scope.animateScale = function() {
      $scope.scale.set([1.2, 1.2, 1], {
        method: 'spring',
        period: 750,
        dampingRatio: 0.5
      });
    };

    $scope.animateScaleDown = function() {
      $scope.scale.set([1, 1, 1], {
        method: 'spring',
        period: 750,
        dampingRatio: 0.5
      });
    };
  });
  
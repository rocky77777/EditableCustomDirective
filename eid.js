angular.module('eidApp', [])
.directive('makeEditable', function() {
	return {
		restrict : 'E',
		transclude: true,
		templateUrl : 'make-editable.html',
		scope : true
	}
});
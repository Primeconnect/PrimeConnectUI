'use strict';

var app = angular.module('batsForm', []);

 app.directive('batFormTextbox', function() {
 	var directive = {};

 	directive.restrict = 'E';
 	directive.scope = true;
 	
    directive.controller = function( $scope, $element, $attrs, $transclude ) {
    	console.log( ' (controller)'  );
        console.log( $attrs );
        
        $scope.id = $attrs.id;
        $scope.label = $attrs.label;
        $scope.required = $attrs.required;
    };
    
    
    directive.compile =function compile( tElement, tAttributes ) {
        console.log( ' (compile)'  );
        return {
            pre: function preLink( scope, element, attributes ) {
                console.log( ' (pre-link)'  );
            },
            post: function postLink( scope, element, attributes ) {
                console.log( ' (post-link)'  );
            }
        };
     };

     directive.templateUrl = 'content-pages/template/form-textbox-tpl.html';

  	return directive;
});

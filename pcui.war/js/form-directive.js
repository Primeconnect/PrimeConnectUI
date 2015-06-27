'use strict';

var app = angular.module('batsForm', []);

 app.directive('batFormTextbox', function() {
    return {
        restrict : 'E',

        template: function(element, attrs) {
            var requiredLabel = ( attrs.hasOwnProperty('required') ? ' <span style="color:red">*</span>' : '');
            var requiredDirective = ( attrs.hasOwnProperty('required') ? ' required ' : '');

            var html = '<div class="form-group">' +
                            '<label for="'+attrs.id+'" class="col-sm-3 control-label">'+attrs.label+requiredLabel+' </label>' +
                            '<div class="col-sm-9">' +
                                '<input type="text" class="form-control" id="'+attrs.id+'" placeholder="'+attrs.label+'" '+
                                    ' ng-model="$parent.signupFormData.'+attrs.$normalize(attrs.id)+'" '+requiredDirective+
                                    ' >' +
                            '</div>' +
                        '</div>';

            return html;
        }
    };
});

 app.directive('batFormCheckbox', function() {
    return {
        restrict : 'E',
        transclude: true,

        template: function(element, attrs) {
            var requiredLabel = ( attrs.hasOwnProperty('required') ? ' <span style="color:red">*</span>' : '');
            var requiredDirective = ( attrs.hasOwnProperty('required') ? ' required ' : '');

            var html = '<div><label>'+
                '<input type="checkbox" ng-model="$parent.signupFormData.'+attrs.$normalize(attrs.model)+'" '+
                requiredDirective+' > '+
                ' <ng-transclude></ng-transclude>"'+requiredLabel+
                '</label></div>';
            return html;
        }
    };
});

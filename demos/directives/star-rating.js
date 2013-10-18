angular.module("app").directive("dpStarRating",function(){
    return {
        templateUrl:'template/rating-template.html',
        restrict:"EA",
        scope: {
            ratingValue: '='
        },
        link:function(scope,element,attr){
            scope.words = ["很差","差","还行","好","很好"];
            console.log(scope.ratingValue);
            scope.toggle = function(index) {
               scope.ratingValue = index + 1;
            };

            function updateStar(newValue){
                scope.ratingValue = newValue;
            }
            scope.$watch('ratingValue',function(newValue,oldValue){
                console.log(scope.ratingValue);
                if(newValue){
                    updateStar(newValue);
                }
            });
        }
    }
});
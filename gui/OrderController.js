/**
 * Created by barriosj on 6/18/15.
 */

(function(){

angular.module("main",[]).controller("OrderController",function($scope){


        $scope.orders=[
            {
                uid: 43,
                sym: 'ibm'
            },

            {
                uid: 456,
                sym: 'gcc'
            }
        ];



    }
);

})();
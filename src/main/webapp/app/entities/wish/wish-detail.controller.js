(function() {
    'use strict';

    angular
        .module('jhipsterSampleApplicationApp')
        .controller('WishDetailController', WishDetailController);

    WishDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Wish', 'WishList'];

    function WishDetailController($scope, $rootScope, $stateParams, previousState, entity, Wish, WishList) {
        var vm = this;

        vm.wish = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jhipsterSampleApplicationApp:wishUpdate', function(event, result) {
            vm.wish = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();

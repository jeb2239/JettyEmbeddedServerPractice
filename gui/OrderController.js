/**
 * Created by barriosj on 6/18/15.
 */

//remove from global scope

(function(angular) {

   var app = angular.module('main',[]);

    app.controller('OrderController',['$scope',function($scope){
        $scope.orders= {
        898 : { sym:'IBM'},
        636 : {sym: 'HDF'}

    };

        if (!window.WebSocket)
            alert("WebSocket not supported by this browser");

        function $$() {
            return document.getElementById(arguments[0]);
        }

        function $$F() {
            return document.getElementById(arguments[0]).value;
        }

        function getKeyCode(ev) {
            if (window.event)
                return window.event.keyCode;
            return ev.keyCode;
        }

        var server = {
            connect: function (location) {
                this._ws = new WebSocket(location);
                this._ws.onopen = this._onopen;
                this._ws.onmessage = this._onmessage;
                this._ws.onclose = this._onclose;
            },

            _onopen: function () {
                server._send('websockets are open for communications!');
            },

            _send: function (message) {
                if (this._ws)
                    this._ws.send(message);
            },

            send: function (text) {
                if (text != null && text.length > 0)
                    server._send(text);
            },

            _onmessage: function (m) {
                if (m.data) {

                    var data =JSON.parse( m.data);
                    if($scope.orders.hasOwnProperty(data.id.toString())){

                    $scope.orders[data.id.toString()].sym = data.sym;
                    }
                    else{
                        $scope.orders[data.id.toString()] = {sym: data.sym};
                    }
                    $scope.$digest();
                }
            },

            _onclose: function (m) {
                this._ws = null;
            }}
server.connect('ws://127.0.0.1:8880/stocks');

    }]);




})(window.angular);
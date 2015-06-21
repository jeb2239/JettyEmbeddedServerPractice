

(function(angular){


angular.module("Wolverine")
    .controller("OrderController",function($scope) {

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

                    $scope.orders = [];

                    $scope.orders.append(JSON.parse(m.data));

                    // add data to the chart

//			console.log('data received: ' + m.data);
//
//			var point = [ (new Date()).getTime(), parseInt(m.data) ];
//
//			var msg = 'point for chart: (' + point[0] + ', ' + point[1] + ')';
//
//			if (isNaN(point[1])) {
//				point[1] = 0;
//				console.log('received non-numeric data, updated point for chart: (' + point[0] + ', ' + point[1] + ')');
//			}
//
//			// display at most a fixed number of points
//			var maxNumberOfPointsDisplayed = 60;
//			var shift = randomData.data.length > maxNumberOfPointsDisplayed;
//		    randomData.addPoint(point, true, shift);
//
//		    // write it on messagebox
//			var spanText = document.createElement('span');
//			spanText.className = 'text';
//			spanText.innerHTML = msg;
//			var lineBreak = document.createElement('br');
//
//			var messageBox = $('messageBox');
//			messageBox.append(spanText, lineBreak);
//			messageBox.scrollTop = messageBox.scrollHeight - messageBox.clientHeight;
                }
            },

            _onclose: function (m) {
                this._ws = null;
            }
        };
    });)(window.angular);
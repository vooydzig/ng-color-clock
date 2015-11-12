var app = angular.module("clock", []);

app.directive('ngColorClock', ['$interval', 'dateFilter', function ($interval, dateFilter) {
    return {
      restrict: 'E',
        link: function (scope, element, attrs) {
            var timeoutId;

            element.addClass('color-clock');
            update();

            function getColor(value, max) {
                return Math.floor(255*(value / max));
            }

            function update() {
              var date = new Date();
              var r = getColor(date.getHours(), 23);
              var g = getColor(date.getMinutes(), 59);
              var b = getColor(date.getSeconds(), 59);
              element.text(dateFilter(date, 'hh:mm:ss a'));
              element.css('background-color', "rgb("+r+", "+g+", "+b+")");
            }

            element.on('$destroy', function() {
              $interval.cancel(timeoutId);
            });


            timeoutId = $interval(function() {
              update();
            }, 1000);
        }
    };
}]);
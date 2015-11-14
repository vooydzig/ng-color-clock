var app = angular.module("clock", []);

app.directive('ngColorClock', ['$interval', 'dateFilter', function ($interval, dateFilter) {
  function getColor(value, max) { return Math.floor(255*(value / max)); }
  function toHex(value) { return value < 16 ? '0' + value.toString(16) : value.toString(16); }
  return {
    restrict: 'E',
    scope : {
      format: '@format',
      properties: '@properties'
    },
    link: function (scope, element, attrs) {
      var timeoutId;
      var format = scope.format || "hh:mm:ss a";
      var props = scope.properties ? scope.properties.split(' ') : ['background-color'];

      element.addClass('color-clock');
      update();

      function update() {
        var date = new Date();
        var r = getColor(date.getHours(), 23);
        var g = getColor(date.getMinutes(), 59);
        var b = getColor(date.getSeconds(), 59);

        if (format.toLowerCase() === '#rgb') {
          var rgb = toHex(r) + toHex(g) + toHex(b);
          element.text(format === '#rgb' ? rgb.toLowerCase() : rgb.toUpperCase());
        } else
          element.text(dateFilter(date, format));
        for (var i=0; i< props.length; i++)
          element.css(props[i], "rgb("+r+", "+g+", "+b+")");
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
System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var WeatherComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WeatherComponent = (function () {
                function WeatherComponent() {
                }
                WeatherComponent.prototype.rain = function () {
                    var colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
                    colors[0];
                    for (var i = 0; i < 100; i++) {
                        document.getElementById("tinselContainer").innerHTML +=
                            '<div id="tinsel" \
            style="\
            left: ' + Math.floor((Math.random() * 90) + 1) + 'vw;\
            animation-name: rain' + Math.floor((Math.random() * 2) + 1) + ';\
            animation-duration: ' + Math.floor((Math.random() * 5) + 2) + 's;\
            animation-delay: ' + Math.floor((Math.random() * 10) + 0) + 's;\
            background: ' + colors[Math.floor((Math.random() * colors.length) + 0)] + ';\
            "></div>';
                    }
                    setTimeout(function () {
                        document.getElementById("tinselContainer").innerHTML = "";
                    }, 15000);
                };
                WeatherComponent = __decorate([
                    core_1.Component({
                        selector: 'weather',
                        template: "\n    <div id=\"weatherContainer\">\n        <div id=\"tinselContainer\" style=\"position: absolute; margin-top: -60px;\"></div>\n    </div>\n    \n\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], WeatherComponent);
                return WeatherComponent;
            }());
            exports_1("WeatherComponent", WeatherComponent);
        }
    }
});
//# sourceMappingURL=weather.component.js.map
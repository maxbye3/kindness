System.register(['angular2/core', './sonny.component'], function(exports_1, context_1) {
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
    var core_1, sonny_component_1;
    var BackgroundComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sonny_component_1_1) {
                sonny_component_1 = sonny_component_1_1;
            }],
        execute: function() {
            BackgroundComponent = (function () {
                function BackgroundComponent() {
                    this.showStyle = false;
                    this.theme = "summer";
                    this.selectedBackground = "summer";
                    this.furnitureImg = './img/scenes/summer.gif';
                    // TEMPORARY
                    setTimeout(function () {
                        document.getElementById('themeChange').style.display = 'none';
                    }, 10); // temp
                }
                /*
                * Changing the theme
                */
                BackgroundComponent.prototype.changeTheme = function () {
                    return this.theme;
                };
                BackgroundComponent.prototype.returnSelected = function () {
                    if (this.showStyle == true) {
                        return 'rgba(0,0,0,0.05)';
                    }
                };
                BackgroundComponent.prototype.selectButton = function (theme) {
                    this.selectedBackground = theme;
                    this.changeFurniture(this.selectedBackground);
                    return 'rgba(0,0,0,0.05)';
                };
                // theme change (end)
                BackgroundComponent.prototype.changeFurniture = function (theme) {
                    if (theme == "summer")
                        this.furnitureImg = './img/scenes/summer.gif';
                    else if (theme == "winter")
                        this.furnitureImg = './img/scenes/winter.gif';
                };
                BackgroundComponent = __decorate([
                    core_1.Component({
                        selector: 'background',
                        templateUrl: 'app/background.component.html',
                        styleUrls: ['app/background.component.css'],
                        directives: [sonny_component_1.SonnyComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BackgroundComponent);
                return BackgroundComponent;
            }());
            exports_1("BackgroundComponent", BackgroundComponent);
        }
    }
});
//# sourceMappingURL=background.component.js.map
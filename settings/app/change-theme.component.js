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
    var ChangeThemeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ChangeThemeComponent = (function () {
                function ChangeThemeComponent() {
                    this.showStyle = false;
                    this.sonnyState = "./img/sonny/intro.gif";
                    this.theme = "summer";
                    this.selectedBackground = "summer";
                }
                /*
                * Changing the theme
                */
                ChangeThemeComponent.prototype.changeTheme = function () {
                    return this.theme;
                };
                ChangeThemeComponent.prototype.returnSelected = function () {
                    if (this.showStyle == true) {
                        return 'rgba(0,0,0,0.05)';
                    }
                };
                ChangeThemeComponent.prototype.selectButton = function (theme) {
                    this.selectedBackground = theme;
                    console.log(this.selectedBackground);
                    return 'rgba(0,0,0,0.05)';
                };
                // theme change (end)
                /*
                * Changing Sonny
                */
                ChangeThemeComponent.prototype.changeGraphic = function (state) {
                    debugger;
                    switch (state) {
                        case "intro":
                            this.sonnyState = "./img/sonny/intro.gif";
                            break;
                        case "exit":
                            this.sonnyState = "./img/sonny/exit.gif";
                            break;
                        case "talking":
                            this.sonnyState = "./img/sonny/talking.gif";
                            break;
                        case "winning":
                            this.sonnyState = "./img/sonny/winning.gif";
                            break;
                        case "bounce":
                            this.sonnyState = "./img/sonny/bounce.gif";
                            break;
                        case "checkout":
                            this.sonnyState = "./img/sonny/checkout.gif";
                            break;
                        case "idle":
                            this.sonnyState = "./img/sonny/idle.gif";
                            break;
                        case "yawn":
                            this.sonnyState = "./img/sonny/yawn.gif";
                            break;
                        default:
                            this.sonnyState = "";
                    }
                };
                ChangeThemeComponent = __decorate([
                    core_1.Component({
                        selector: 'change-theme',
                        templateUrl: 'app/change-theme.component.html',
                        styleUrls: ['app/change-theme.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChangeThemeComponent);
                return ChangeThemeComponent;
            }());
            exports_1("ChangeThemeComponent", ChangeThemeComponent);
        }
    }
});
//# sourceMappingURL=change-theme.component.js.map
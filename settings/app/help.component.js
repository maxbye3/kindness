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
    var HelpComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HelpComponent = (function () {
                function HelpComponent() {
                }
                HelpComponent.prototype.ngOnInit = function () {
                };
                HelpComponent = __decorate([
                    core_1.Component({
                        selector: 'help-menu',
                        template: "\n    <div class=\"themeButton selected\">\n        give me an example kindness\n    </div>\n\n    <div class=\"themeButton selected\">\n        show me the tour again\n    </div>\n\n    <div class=\"themeButton selected\">\n       I have a question \n    </div>\n\n    <div class=\"themeButton selected\">\n        go back\n    </div>\n    ",
                        styleUrls: ["app/sonny.dialogue.component.css"],
                    }), 
                    __metadata('design:paramtypes', [])
                ], HelpComponent);
                return HelpComponent;
            }());
            exports_1("HelpComponent", HelpComponent);
        }
    }
});
//# sourceMappingURL=help.component.js.map
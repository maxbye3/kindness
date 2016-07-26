System.register(['angular2/core', './sonny.dialogue.component'], function(exports_1, context_1) {
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
    var core_1, core_2, sonny_dialogue_component_1;
    var SettingsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (sonny_dialogue_component_1_1) {
                sonny_dialogue_component_1 = sonny_dialogue_component_1_1;
            }],
        execute: function() {
            SettingsComponent = (function () {
                function SettingsComponent(sonnyDialogue) {
                    this.sonnyDialogue = sonnyDialogue;
                }
                SettingsComponent.prototype.ngOnInit = function () {
                    setTimeout(function () {
                        document.getElementById("settingsH1").style.border = "solid rgba(256,256,256,1) 2px";
                    }, 500);
                };
                SettingsComponent.prototype.themeView = function () {
                    this.back();
                    document.getElementById("themeChange").style.display = "block";
                    this.sonnyDialogue.transitionViews("kindnessView", "themeChange");
                };
                SettingsComponent.prototype.back = function () {
                    this.sonnyDialogue.transitionViews("themeChange", "kindnessView");
                    this.sonnyDialogue.transitionViews("contactView", "kindnessView");
                    document.getElementById("settingsView").style.animation = "settingsOutro 1s";
                    setTimeout(function () {
                        document.getElementById("settingsView").style.display = "none";
                    }, 1000);
                };
                SettingsComponent.prototype.questionTime = function () {
                    this.back();
                    this.sonnyDialogue.transitionViews("kindnessView", "contactView");
                    document.getElementById("themeChange").style.display = "none";
                    var inputOptional = document.getElementById("inputOptional").style;
                    var inputMessage = document.getElementById("inputMessage").style;
                    this.inputStyle(inputOptional);
                    this.inputStyle(inputMessage);
                };
                SettingsComponent.prototype.moonhead_back = function () {
                    document.getElementById("settingsView").style.display = "block";
                    document.getElementById("mrMoonhead").style.display = "none";
                };
                SettingsComponent.prototype.mrMoonhead = function () {
                    document.getElementById("settingsView").style.display = "none";
                    document.getElementById("mrMoonhead").style.display = "block";
                };
                /*
                * STYLE THE INPUTS
                */
                SettingsComponent.prototype.inputStyle = function (input) {
                    input.margin = "0px";
                    input.fontSize = "30px";
                    input.background = "rgba(256,256,256,0.7)";
                    input.padding = "5px";
                    input.marginBottom = "30px";
                    input.width = "100%";
                    input.border = "none";
                };
                SettingsComponent = __decorate([
                    core_1.Component({
                        selector: 'settings-component',
                        templateUrl: 'app/settings.component.html',
                        styleUrls: ['app/settings.component.css'],
                        providers: [sonny_dialogue_component_1.SonnyDialogue]
                    }),
                    core_2.Injectable(), 
                    __metadata('design:paramtypes', [sonny_dialogue_component_1.SonnyDialogue])
                ], SettingsComponent);
                return SettingsComponent;
            }());
            exports_1("SettingsComponent", SettingsComponent);
        }
    }
});
//# sourceMappingURL=settings.component.js.map
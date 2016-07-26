System.register(['angular2/core', './sonny.component', './sonny.dialogue.component', './cal.component', './go.cal.component', './weather.component', './kindness.service', './settings.component'], function(exports_1, context_1) {
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
    var core_1, sonny_component_1, sonny_dialogue_component_1, cal_component_1, go_cal_component_1, weather_component_1, kindness_service_1, settings_component_1;
    var BackgroundComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sonny_component_1_1) {
                sonny_component_1 = sonny_component_1_1;
            },
            function (sonny_dialogue_component_1_1) {
                sonny_dialogue_component_1 = sonny_dialogue_component_1_1;
            },
            function (cal_component_1_1) {
                cal_component_1 = cal_component_1_1;
            },
            function (go_cal_component_1_1) {
                go_cal_component_1 = go_cal_component_1_1;
            },
            function (weather_component_1_1) {
                weather_component_1 = weather_component_1_1;
            },
            function (kindness_service_1_1) {
                kindness_service_1 = kindness_service_1_1;
            },
            function (settings_component_1_1) {
                settings_component_1 = settings_component_1_1;
            }],
        execute: function() {
            BackgroundComponent = (function () {
                function BackgroundComponent(kindnessService, sonnyComponent, sonnyDialogue) {
                    this.showStyle = false;
                    this.theme = "summer";
                    this.selectedBackground = "summer";
                    this.calVisit = 0;
                    this.kindnessService = kindnessService;
                    this.sonnyComponent = sonnyComponent;
                    this.sonnyDialogue = sonnyDialogue;
                }
                BackgroundComponent.prototype.ngOnInit = function () {
                    this.summerScene();
                };
                /*
                * SETTINGS
                */
                BackgroundComponent.prototype.settings = function () {
                    console.log("go to settings");
                    document.getElementById("settingsView").style.display = "block";
                    document.getElementById("settingsView").style.animation = "settingsIntro 1s";
                    document.getElementById("settingsView").style.animationFillMode = "forward";
                };
                /*
                * CHECK SUBMISSION
                */
                BackgroundComponent.prototype.kindessSubmit = function () {
                    document.getElementById("submitCheck").style.display = "block";
                    var inputPerson = document.getElementById("inputPerson");
                    var inputKindness = document.getElementById("inputKindness");
                    if (inputPerson.value == "" && inputKindness.value == "") {
                        console.log("Fields empty");
                        document.getElementById("kindnessText").style.color = "red";
                        document.getElementById("whoText").style.color = "red";
                        inputPerson.placeholder = "Please enter a person or recipient into this field!";
                        inputKindness.placeholder = "Please record a kindness you performed into this field!";
                    }
                    else if (inputPerson.value == "") {
                        console.log("No Who");
                        document.getElementById("whoText").style.color = "red";
                        document.getElementById("kindnessText").style.color = "black";
                        inputPerson.placeholder = "Please enter a person or recipient into this field!";
                    }
                    else if (inputKindness.value == "") {
                        console.log("No Kindness");
                        document.getElementById("kindnessText").style.color = "red";
                        document.getElementById("whoText").style.color = "black";
                        inputKindness.placeholder = "Please record a kindness you performed into this field!";
                    }
                    else {
                        this.kindnessSuccess(); // winning animation
                        this.kindnessService.saveData(inputPerson.value, inputKindness.value); // call in the service to deal with data
                    }
                };
                // SUBMISSION SUCCESSFUL
                BackgroundComponent.prototype.kindnessSuccess = function () {
                    if (document.getElementById('sonnyIcon').style.display == "none") {
                        this.sonnyComponent.sonnyState("winning");
                        this.sonnyDisclaimer(["Congrats on recording today's kindness!!"], 2000);
                    }
                    else {
                        this.sonnyComponent.sonnyState("intro-winning");
                        this.sonnyDisclaimer(["Congrats on recording today's kindness!!"], 2000);
                    }
                    document.getElementById("doneView").style.display = "block";
                    document.getElementById("calVictory").style.display = "block";
                    setTimeout(function () {
                        document.getElementById("kindnessView").style.display = "none";
                    }, 500);
                    this.sonnyDialogue.transitionViews("kindnessView", "doneView");
                };
                BackgroundComponent.prototype.themeBack = function () {
                    this.sonnyDialogue.transitionViews("themeChange", "kindnessView");
                };
                BackgroundComponent.prototype.sonnyDisclaimer = function (phraseArray, timeout) {
                    var _this = this;
                    // winning disclaimer
                    setTimeout(function () {
                        _this.sonnyDialogue.sonnySpeech(true, phraseArray);
                        _this.sonnyComponent.startTalking();
                        setTimeout(function () {
                            _this.sonnyComponent.stopTalking();
                        }, 6000);
                    }, timeout);
                };
                /*
                * SUMMER SCENE
                */
                BackgroundComponent.prototype.summerScene = function () {
                    document.getElementById("themeSelected").innerHTML = "summer";
                    this.furnitureImg = './img/scenes/summer.gif?t=' + new Date().getTime();
                    document.getElementById("birdContainer").style.display = "block";
                    document.getElementById("boatContainer").style.display = "block";
                    document.getElementById("winterHouse").style.display = "none";
                    document.getElementById("snowContainer1").style.display = "none";
                    document.getElementById("snowContainer2").style.display = "none";
                };
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
                    if (theme == "summer") {
                        this.summerScene();
                    }
                    else if (theme == "winter") {
                        document.getElementById("themeSelected").innerHTML = "winter";
                        this.furnitureImg = './img/scenes/winter.gif?t=' + new Date().getTime();
                        document.getElementById("birdContainer").style.display = "none";
                        document.getElementById("boatContainer").style.display = "none";
                        document.getElementById("winterHouse").style.display = "block";
                        document.getElementById("snowContainer1").style.display = "block";
                        document.getElementById("snowContainer2").style.display = "block";
                    }
                };
                BackgroundComponent = __decorate([
                    core_1.Component({
                        selector: 'background',
                        templateUrl: 'app/background.component.html',
                        styleUrls: ['app/background.component.css'],
                        directives: [settings_component_1.SettingsComponent, sonny_component_1.SonnyComponent, sonny_dialogue_component_1.SonnyDialogue, cal_component_1.CalComponent, go_cal_component_1.GoCalComponent, weather_component_1.WeatherComponent],
                        providers: [kindness_service_1.KindnessService, sonny_component_1.SonnyComponent, sonny_dialogue_component_1.SonnyDialogue, weather_component_1.WeatherComponent, cal_component_1.CalComponent]
                    }), 
                    __metadata('design:paramtypes', [kindness_service_1.KindnessService, sonny_component_1.SonnyComponent, sonny_dialogue_component_1.SonnyDialogue])
                ], BackgroundComponent);
                return BackgroundComponent;
            }());
            exports_1("BackgroundComponent", BackgroundComponent);
        }
    }
});
//# sourceMappingURL=background.component.js.map
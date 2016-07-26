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
    var core_1, core_2;
    var KindnessService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            KindnessService = (function () {
                function KindnessService() {
                    this.kindnessArray = [];
                    this.whoArray = [];
                    this.dateArray = [];
                    this.stateArray = 'ready';
                }
                KindnessService.prototype.ngOnInit = function () {
                };
                /*
                * LOAD ARRAYS
                */
                KindnessService.prototype.loadWhoArray = function () {
                    if (localStorage.getItem("whoArray") == "") {
                        return [];
                    }
                    return JSON.parse(localStorage.getItem("whoArray"));
                };
                KindnessService.prototype.loadKindnessArray = function () {
                    if (localStorage.getItem("kindnessArray") == "") {
                        return [];
                    }
                    return JSON.parse(localStorage.getItem("kindnessArray"));
                };
                KindnessService.prototype.loadDateArray = function () {
                    if (localStorage.getItem("kindnessArray") == "") {
                        return [];
                    }
                    return JSON.parse(localStorage.getItem("dateArray"));
                };
                KindnessService.prototype.loadStateArray = function () {
                    // state is a string
                    //return JSON.parse(localStorage.getItem("stateArray"));
                };
                /*
                * Format date.now() into day/month/year
                */
                KindnessService.prototype.formatDateNow = function () {
                    var today = new Date();
                    var dd = today.getDate();
                    var mm = today.getMonth() + 1; //January is 0!
                    var yyyy = today.getFullYear();
                    if (dd < 10) {
                        dd = 0 + dd;
                    }
                    if (mm < 10) {
                        mm = 0 + mm;
                    }
                    return mm + '/' + dd + '/' + yyyy;
                };
                /*
                * STORE KINDNESS, RECEPTIENT & DATE DATA PER KIND ACTION
                * RETURNS ARRAY LENGTH
                */
                KindnessService.prototype.saveData = function (who, kindness) {
                    if (this.loadData() == 0) {
                        this.kindnessArray = [];
                        this.whoArray = [];
                        this.dateArray = [];
                    }
                    this.kindnessArray.unshift(kindness);
                    this.whoArray.unshift(who);
                    var now = this.formatDateNow();
                    this.dateArray.unshift(now);
                    localStorage.setItem("kindnessArray", JSON.stringify(this.kindnessArray));
                    localStorage.setItem("whoArray", JSON.stringify(this.whoArray));
                    localStorage.setItem("dateArray", JSON.stringify(this.dateArray));
                };
                /*
                *
                * LOAD KINDNESS, RECEPTIENT & DATE DATA
                * RETURNS ARRAY LENGTH
                */
                KindnessService.prototype.loadData = function () {
                    if (localStorage.getItem("kindnessArray") == "") {
                        return 0;
                    }
                    this.kindnessArray = JSON.parse(localStorage.getItem("kindnessArray"));
                    this.whoArray = JSON.parse(localStorage.getItem("whoArray"));
                    this.dateArray = JSON.parse(localStorage.getItem("dateArray"));
                    return this.kindnessArray.length;
                };
                KindnessService = __decorate([
                    core_1.Component({}),
                    core_2.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], KindnessService);
                return KindnessService;
            }());
            exports_1("KindnessService", KindnessService);
        }
    }
});
//# sourceMappingURL=kindness.service.js.map
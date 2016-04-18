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
    var Kindness, AppComponent, KINDNESSLIST;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Kindness = (function () {
                function Kindness() {
                }
                return Kindness;
            }());
            exports_1("Kindness", Kindness);
            AppComponent = (function () {
                function AppComponent() {
                    this.kindnesses = KINDNESSLIST;
                    this.title = 'Kindness App';
                }
                AppComponent.prototype.onSelect = function (kindness) { this.selectedKindness = kindness; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <div *ngIf=\"selectedKindness\">\n    <h1>{{title}}</h1>\n    <h2>{{selectedKindness.deed}} details!</h2>\n    <div><label>id: </label>{{selectedKindness.id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"selectedKindness.deed\" placeholder=\"deed\">\n    </div>\n  </div>\n  \n  <h2>My Actions</h2>\n<ul class=\"heroes\">\n  \n    <!-- each hero goes here -->\n    <li *ngFor=\"#kindness of kindnesses; #i = index\" \n    [class.selected]=\"kindness === selectedKindness\"\n    (click)=\"onSelect(kindness)\">\n    <span class=\"badge\">{{i}} {{kindness.id}}</span> {{kindness.deed}}\n\n</ul>\n\n  ",
                        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            KINDNESSLIST = [
                { "id": 11, "deed": "Test Action 1" },
                { "id": 12, "deed": "Test Action 2" },
                { "id": 13, "deed": "Test Action 3" },
                { "id": 14, "deed": "Test Action 4" },
                { "id": 15, "deed": "Test Action 5" },
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map
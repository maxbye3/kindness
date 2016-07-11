import {Component, ElementRef, OnInit} from 'angular2/core';
import { SonnyComponent } from './sonny.component';
declare var jQuery: any;


@Component({
    selector: 'sonny-speech',
    template: '',
    // directives: [SonnyComponent],
    providers: [SonnyComponent]
})
export class sonnySpeech implements OnInit {
    elementRef: ElementRef;
    private sonnyComponent;
    //sonnyImg : HTMLImageElement; 


    constructor(sonnyComponent: SonnyComponent) {
        this.sonnyComponent = sonnyComponent;
    }


    ngOnInit() {


        // if sonnyStay set to false then this callback will launch:
        
            this.launchOutro = () => this.sonnyComponent.sonnyState('exit');
        

        setTimeout(() => {

            // GREETING          
            this.sonnySpeech(false,"Hello! Welcome!<br>This is the Kindness Prototype!","Click <img src='./img/icons/sonny.png' style='height: 20px;border: #473939 solid 0.5px;padding: 5px;vertical-align: bottom;'> if you need my help",null);
            setTimeout(() => {
                jQuery(".sonnyIcon").addClass("jiggleLink");
            }, 5000);
            // greeting  

        }, 2200);



    }



    public launchOutro: () => void;




    sonnySpeech(sonnyStay, item1, item2, item3) {

        var itemArray = [item1, item2, item3];
        var sonnyArray = [];
        var sonnyStay = sonnyStay;
        var classname = this;

        for (var i = 0; i < itemArray.length; i++) {
            if (itemArray[i] != null) {
                sonnyArray.push(itemArray[i]);
            }
        }

        jQuery("#typed").typed({
            strings: sonnyArray,
            typeSpeed: 0,
            showCursor: false,
            backDelay: 750,
            backSpeed: 2,
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite            
            callback: function () {

                if (!sonnyStay) {
                    classname.launchOutro();
                }
            }

        });
    }

}
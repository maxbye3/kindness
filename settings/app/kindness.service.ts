import {Component, ElementRef, OnInit} from 'angular2/core';
import { Injectable } from 'angular2/core';

@Component({        
    // directives: [KindnessComplete],
    // providers: [SonnyComponent]
})

@Injectable()
export class KindnessService implements OnInit {
    private kindnessArray = [];
    private whoArray = [];
    private dateArray = [];
    private stateArray = 'ready';

    constructor() {

        console.log("SERVICE CONSTRUCTOR");
        console.log(this.loadData());

    }

    ngOnInit() {
    }

    /*
    * LOAD ARRAYS
    */
    loadWhoArray(){
        if(localStorage.getItem("whoArray")==""){
            return [];
        } 
        return JSON.parse(localStorage.getItem("whoArray"));
    }

    loadKindnessArray(){
        if(localStorage.getItem("kindnessArray")==""){
            return [];
        } 
        return JSON.parse(localStorage.getItem("kindnessArray"));
    }

    loadDateArray(){
        if(localStorage.getItem("kindnessArray")==""){
            return [];
        } 
        return JSON.parse(localStorage.getItem("dateArray"));
    }

    loadStateArray(){
        // state is a string
        //return JSON.parse(localStorage.getItem("stateArray"));
    }

    /*
    * Format date.now() into day/month/year
    */
    formatDateNow(){
     var today = new Date();
     var dd = today.getDate();
     var mm = today.getMonth()+1; //January is 0!
     var yyyy = today.getFullYear();
    
    if(dd<10){
        dd=0+dd;
    } 
    if(mm<10){
        mm=0+mm;
    } 
    
    return dd+'/'+mm+'/'+yyyy; 
    }

    /*
    * STORE KINDNESS, RECEPTIENT & DATE DATA PER KIND ACTION
    * RETURNS ARRAY LENGTH
    */
    saveData(who,kindness){

        
        if(this.loadData() == 0){
            this.kindnessArray = [];
            this.whoArray = [];
            this.dateArray = [];
        }

        this.kindnessArray.unshift(kindness);
        this.whoArray.unshift(who);
        var now = this.formatDateNow();
        this.dateArray.unshift();

   
        localStorage.setItem("kindnessArray", JSON.stringify(this.kindnessArray));
        localStorage.setItem("whoArray", JSON.stringify(this.whoArray));
        localStorage.setItem("dateArray", JSON.stringify(this.dateArray));
    }

    

    /*
    * 
    * LOAD KINDNESS, RECEPTIENT & DATE DATA
    * RETURNS ARRAY LENGTH
    */
    loadData(){
       

        if(localStorage.getItem("kindnessArray") == ""){
            return 0;
        }
        
        this.kindnessArray = JSON.parse(localStorage.getItem("kindnessArray"));
        this.whoArray = JSON.parse(localStorage.getItem("whoArray"));
        this.dateArray = JSON.parse(localStorage.getItem("dateArray"));
        return this.kindnessArray.length;
    }

}
import {Component, ElementRef, OnInit} from 'angular2/core';
declare var jQuery: any;


@Component({
    selector: 'weather',
    template: `
    <div id="weatherContainer">
        <div id="tinselContainer" style="position: absolute; margin-top: -60px;"></div>
    </div>
    

    `,
    //styleUrls: ["app/sonny.dialogue.component.css"],
    // providers: [SonnyComponent]
})

export class WeatherComponent {


   rain(){ 
        
        var colors = ['red','green','blue','yellow','purple','orange'];
        colors[0];
        for(var i = 0; i < 100; i++){           
            document.getElementById("tinselContainer").innerHTML += 
            '<div id="tinsel" \
            style="\
            left: '+ Math.floor((Math.random() * 90) + 1) +'vw;\
            animation-name: rain'+Math.floor((Math.random() * 2) + 1)+';\
            animation-duration: '+ Math.floor((Math.random() * 5) + 2) +'s;\
            animation-delay: '+ Math.floor((Math.random() * 10) + 0) +'s;\
            background: '+colors[Math.floor((Math.random() * colors.length) + 0)]+';\
            "></div>';           
        }

       setTimeout(() => {  
            document.getElementById("tinselContainer").innerHTML = ""
        }, 15000); 

        


   }
}
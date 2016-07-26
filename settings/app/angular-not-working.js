  function makeVisible(itemNum){
    $(".taskDetail"+itemNum).fadeIn();  
  }

  // test
  function appendDate(){
    $(".testDate").html("<p>Date: <input type='text' class='datepicker'></p>");
    $( ".datepicker" ).datepicker();
  }
  //test

  function editText(type,text,itemNum){
  calSpeech(["Editing the truth?","Edit away..."]);


  if(type=="date"){

  var textInput = '<form>\
  <input class="'+type+'Edit" type="text" id="datepicker" placeholder="'+text+'">\
  <span onclick="saveData(\''+type+'\',\''+itemNum+'\')"><a href="">(save)</a></span>\
  </form>';
  }
  else{ // who and kind
  var textInput = '<form>\
  <input class="'+type+'Edit" type="text" placeholder="'+text+'">\
  <span onclick="saveData(\''+type+'\',\''+itemNum+'\')"><a href="">(save)</a></span>\
  </form>';
  }

  $(".taskDetail"+itemNum+" ."+type+"").html(textInput);
  
  $( "#datepicker" ).datepicker();
  }

  function saveData(type,itemNum){
    
    var text = $('.'+type+'Edit').val();
    

    var arrayType = type+"Array";

    // if type = "kind" then update the kindness on square as well
    if(type=="kindness"){
      calSpeech(["That comes across way better","Changes saved..."]);
      $(".square .kindness"+itemNum).html(text);
    }
    else if(type == "who"){
      calSpeech(["Well, I'm not a fan of them.","But your changes are saved..."]);
    }
    else {
       calSpeech(["Date has been changed..."]);
    }
    
    //load
    var localStorageArray = JSON.parse(localStorage.getItem(arrayType));
    //edit
    localStorageArray[itemNum] = text;
   
    //save
    localStorage.setItem(arrayType, JSON.stringify(localStorageArray));

    //restore
    $(".taskDetail"+itemNum+" ."+type+"").html("<p class='"+type+"'>"+text+"&nbsp;<span onclick='editText(\""+type+"\",\""+text+"\",\""+itemNum+"\")'><a href=''>(edit)</a></span></p>");
  }


  function deleteData(itemNum){
    calSpeech(["Kindness deleted.","And good riddance..","I never liked that submission anyway.."]);
    $(".task"+itemNum).remove();
    $(".taskDetail"+itemNum).remove();
    $(".encourageScreen").remove();

    //load
    var kindnessArray = JSON.parse(localStorage.getItem("kindnessArray"));
    var whoArray = JSON.parse(localStorage.getItem("whoArray"));
    var dateArray = JSON.parse(localStorage.getItem("dateArray"));
    
    //edit
    kindnessArray.splice(itemNum, 1);
    whoArray.splice(itemNum, 1);
    dateArray.splice(itemNum, 1);
    
    //save
    localStorage.setItem('kindnessArray', JSON.stringify(kindnessArray));
    localStorage.setItem('whoArray', JSON.stringify(whoArray));
    localStorage.setItem('dateArray', JSON.stringify(dateArray));

  }


  function calSpeech(phraseArray) {  
        if(document.getElementById("calyCall").style.display == "none"){
          

        setTimeout(() => {     },3000)    
        document.getElementById("calType").innerHTML = "";    
        var ctx = this;
        jQuery("#calType").typed({
            strings: phraseArray,
            typeSpeed: 5,
            showCursor: false,
            backDelay: 1750,
            backSpeed: 2,
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite            
            preStringTyped: function() {
               if(document.getElementById("calyGif").src.includes("idle")){
                chatAnimation();
                document.getElementById("calBubble").style.opacity= "1";
               }
            },
            callback: function () {

                // cleanup
                phraseArray = [];                
                return;
            }
        });

      
        
      }
    }


function chatAnimation(){
    var calyImg = document.getElementById("calyGif");

   // chat intro
   calyImg.src = "./img/caly/chat-intro.gif?t=" + new Date().getTime();
   setTimeout(() => { 

      // chat anumation 
      calyImg.src = "./img/caly/chat.gif?t=" + new Date().getTime();
      setTimeout(() => { 
      
                 // chat outro
                 calyImg.src = "./img/caly/chat-outro.gif?t=" + new Date().getTime();
                 setTimeout(() => { 
                   // go idle
                   calyImg.src = "./img/caly/idle.gif?t=" + new Date().getTime(); 
                 },800)    
       },4000)
    },900);  
}
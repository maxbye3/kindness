  function makeVisible(itemNum){
    $(".taskDetail"+itemNum).fadeIn();
  }

  function editText(type,text,itemNum){

  var textInput = '<form>\
  <input class="'+type+'Edit" type="text" placeholder="'+text+'">\
  <span onclick="saveData(\''+type+'\',\''+itemNum+'\')"><a href="">(save)</a></span>\
  </form>';

  $(".taskDetail"+itemNum+" ."+type+"").html(textInput);
  }

  function saveData(type,itemNum){
    var text = $('.'+type+'Edit').val();
    

    var arrayType = type+"Array";

    // if type = "kind" then update the kindness on square as well
    if(type=="kindness"){
      $(".square .kindness"+itemNum).html(text);
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
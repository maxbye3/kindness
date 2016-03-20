// Get a reference to our posts
var firebaseRef = new Firebase('https://mrmoonhead.firebaseio.com'),
deedDatabase = new Firebase('https://mrmoonhead.firebaseio.com/actions'), 
howmany = 1; // by default a single person

/*
* Populate Pornoun
* Change pronoun input to reflect change
*/
function pronounInput(type){
 
  if(type == "single"){
    $(".whoDropdown button").html("Single");
    howmany = 1;
  }
  else{
    $(".whoDropdown button").html("Group");
    howmany = 2;
  }  
}

/*
* Save Kindness
* Into deedDatabase
*/
function updateKindness(e){
  
  var deedForm = $(".deedForm").val(),
  who = $(".whoForm").val(),
  what = $('.deedForm').val();      
  
  if(who!=="" && what!=="") {
      $(".kindSubmit").removeClass("inactive").attr("onclick","saveKindness()");
  }
  else{
      $(".kindSubmit").addClass("inactive").attr("onclick","");
  }  
  
  if (e.keyCode == 13) {
    saveKindness();
  }    
}

$('.kindnessScreen').keypress(updateKindness);


function saveKindness(){
  
  var deedForm = $(".deedForm").val(),
  who = $(".whoForm").val(),
  what = $('.deedForm').val();   
  
  var d = new Date(),
  todaysDate = d.getDate() + "/" + (d.getMonth()+1) +"/" + d.getFullYear();
  
 // Save deed in database
  deedDatabase.push({
    when: todaysDate,
    who: who,
    what: what,
    howmany: howmany
  });  
  
  alert("day complete...")
  
}

// Retrieve new posts as they are added to our database
deedDatabase.on("child_added", function(snapshot, prevChildKey) {
  pastDeeds = snapshot.val();
//   console.log("Previous Post ID: " + prevChildKey);
  $('<div/>').html("<p>\
    <span class='alert alert-info'>" + pastDeeds.when + "</span> \
    <span class='label label-info'>" + pastDeeds.what + "</span> for \
    <span class='label label-success'>" + pastDeeds.who + "</span>\
    </p>").appendTo($('#messagesDiv'));
    
    var taskString = "(" + pastDeeds.when + ") " + pastDeeds.what + " for " + pastDeeds.who;

    if(taskString.length > 33) taskString = taskString.substring(0,33) + "...";
   
    $(".kindnessScreen  .sea p").html(taskString);
});


function seeDatabase(){
    alert("see database");
}
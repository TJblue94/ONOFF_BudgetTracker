// When page first loads user must click to open planner
//Current day must be displayed at top of calander
// Days or Timeblocks should have different colors based off of past, present, future
// When timeblock is clicked you can enter text or event
// Save button should save it into local storage
// when page is refreshed events should stay saved

//var Times = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm",];
//var TimeSlots = document.getElementsByClassName("<p>")

var saveButtons = document.querySelector(".saveBtn");
var timeblock = document.querySelector(".timeblock");
var textarea = document.querySelector(".textarea");
//var 
init()

//for (let index = 0; index < array.length; index++) {
 // const element = array[index];}

function storeTodos(eventText) {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("event", JSON.stringify(eventText));
}

// When form is submitted...
timeblock.addEventListener("submit", function(event) {
  event.preventDefault();
  
  var eventText = textarea.value.trim();
  console.log(eventText)
  // Return from function early if submitted todoText is blank
  if (eventText === "") {
    return; 
  }

  // Store updated todos in localStorage, re-render the list
storeTodos(eventText);
 return false
});

function init() {
  // Get stored todos from localStorage
  // Parsing the JSON string to an object
  var storedPlans = JSON.parse(localStorage.getItem("event"));
  textarea.value = storedPlans
}


//renderTodos();

//function updateText(text){
  //  document.getElementById("result").innerHTML =text;
    //}

//$("#button-1").on("click", function() {
 //   if(state == 0) {
  //    firstNumber.text(firstNumber.text() + $("#button-1").text()
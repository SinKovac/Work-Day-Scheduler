var workDay = {
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 AM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": "",
  };
  
function hourNumberFromHourString(hourString) {
    switch(hourString) {
      case "9 AM": return 9;
      case "10 AM": return 10;
      case "11 AM": return 11;
      case "12 AM": return 12;
      case "1 PM": return 13;
      case "2 PM": return 14;
      case "3 PM": return 15;
      case "4 PM": return 16;
      case "5 PM": return 17;
    }
  }

 $(document).ready(function(){
    if(!localStorage.getItem('workDay')) {
      updateCalendarTasks(workDay);
    } else {
      updateCalendarTasks(JSON.parse(localStorage.getItem('workDay')));
    }
  })
  
  $('#date-today h6').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));

var counter = 1;
  for(const property in workDay) {
    let textEntry = "#text-entry" + counter;
    $(textEntry).text(workDay[property]);
    let timeId = "#time" + counter;
    let present = moment().hour();
    let timeString = $(timeId).text();
    let timeNumber = hourNumberFromHourString(timeString);  
    if(timeNumber < present) {
      $(textEntry).addClass("past");
    } else if (timeNumber > present) {
      $(textEntry).addClass("future");
    } else {
      $(textEntry).addClass("present");
    }
    counter ++;
  }

 $("button").click(function() {
    value = $(this).siblings("textarea").val();
    hourString = $(this).siblings("div").text();
    
    saveSchedule(hourString, value);
  });

function loadCorrectDataset() {
    result = localStorage.getItem('workDay')
    return (result ? result : workDay);
  }
  
function initializeLocalStorage() {
   localStorage.setItem('workDay', JSON.stringify(workDay));
  };
  
function saveToLocalStorage(dayObj) {
   localStorage.setItem('workDay', JSON.stringify(dayObj));
  }
  
function saveSchedule(hourString, val) {
   if(!localStorage.getItem('workDay')) {
     initializeLocalStorage();
    }
 
function updateCalendarTasks(dayObject) {
    $(".calendar-row").each(function(index) {
      let res = $(this).children("div");
      $(this).children("textarea").text(dayObject[res.text()]);
    })
  }

 var workHours = JSON.parse(localStorage.getItem('workDay'));
    workHours[hourString] = val
  
    saveToLocalStorage(workHours);
  }

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
      case "9 AM": return 8;
      case "10 AM": return 9;
      case "11 AM": return 10;
      case "12 AM": return 11;
      case "1 PM": return 12;
      case "2 PM": return 13;
      case "3 PM": return 14;
      case "4 PM": return 15;
      case "5 PM": return 16;
    }
  }

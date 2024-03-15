let date = new Date();


let month = 2;
let year = 2015;


function generateRandomYear() {
     let value = Math.floor(Math.random() * 2023 + 1)

     if (value === year || value < 2015) {
          return generateRandomYear()
     } else {
          year = value;
          return value;
     }
}


function generateRandomMonth() {
     let value = Math.floor(Math.random() * 12 + 1);
     if (value === month) {
          return generateRandomMonth()
     } else {
          month = value;
          return value
     }
}



export function setTime() {
     let timeGone = ``;
     let myDate = new Date(generateRandomYear(), generateRandomMonth());
     let timeDifference = date - myDate;
     let conversion = 0;

     if (timeDifference < 1000 * 60) {
          conversion = Math.floor(timeDifference / 1000)
          timeGone = conversion > 1 ? `${conversion} seconds ago` : `${conversion} second ago`;
     } else if (timeDifference < 1000 * 60 * 60) {
          conversion = Math.floor(timeDifference / (1000 * 60))
          timeGone = conversion > 1 ? `${conversion} mins ago` : `${conversion} min ago`;
     } else if (timeDifference < 1000 * 60 * 60 * 24) {
          conversion = Math.floor(timeDifference / (1000 * 60 * 60));
          timeGone = conversion > 1 ? `${conversion} hours ago` : `${conversion} hour ago`;
     } else if (timeDifference < 1000 * 60 * 60 * 24 * 7) {
          conversion = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          timeGone = conversion > 1 ? `${conversion} days ago` : `${conversion} day ago`
     } else if (timeDifference < 1000 * 60 * 60 * 24 * 7 * 4) {
          conversion = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
          timeGone = conversion > 1 ? `${conversion} weeks ago` : `${conversion} week ago`;
     } else if (timeDifference < 1000 * 60 * 60 * 24 * 7 * 4 * 12) {
          conversion = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7 * 4));
          timeGone = conversion > 1 ? `${conversion} months ago` : `${conversion} month ago`
     } else {
          conversion = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7 * 4 * 12));
          timeGone = conversion > 1 ? `${conversion} years ago` : `${conversion} year ago`
     }
     return timeGone;
}


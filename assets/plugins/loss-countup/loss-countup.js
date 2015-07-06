/* Copyright 2015 James Saint
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.licences.jamessaint.com/money-count-up
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var startDate;
var endDate;

$(document).ready(function() {
    function UpdateDollarz(){
        startDate = new Date('1/1/2015 00:00:01 AM GMT').getTime(); // Define date to begin counter
        endDate = new Date().getTime(); // ALWAYS THE CURRENT, PRECISE TIME...

        // FOR A SPAN ITS NOT .VAL() ... INSTEAD ITS .TEXT() OR .HTML()...
        // YOUR VERSION WAS ALSO MISSING THE MYDIFF FUNCTION.  
        // USING THE CONSOLE TO WATCH FOR ERRORS WILL GIVE YOU CLUES 
        // ON WHERE THE ISSUES ARE WHEN DEBUGGING JAVASCRIPT.
        
        $('#dollar-figure').text('$' + (mydiff(startDate, endDate, 'seconds') * 357).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));  // 357 can be changed to any amount required to be multiplied by
    };
    
    setInterval(function(){
        UpdateDollarz();
    }, 1000);

});

// GENERIC FUNCTION TO CALCULATE THE SPAN OF TIME BETWEEN TWO JAVASCRIPT DATE OBJECTS...
function mydiff(date1, date2, interval) {
    console.log('mydiff function called...');
    console.log('start date: ' + startDate);
    console.log('end date: ' + endDate);

    var second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        week = day * 7;
    //date1 = new Date(date1); // PREVIOUSLY IT JUST USED HARD DATES, NOT PRECISE TIME STAMPS.
    //date2 = new Date(date2); // PREVIOUSLY IT JUST USED HARD DATES, NOT PRECISE TIME STAMPS.;
    date1 = new Date(date1).getTime(); // NOW WE USE TIMESTAMP FOR START... 
    date2 = new Date().getTime(); // AND UP TO DATE TIMESTAMPS FOR THE END DATE
    var timediff = date2 - date1;
    if (isNaN(timediff)) return NaN;
    switch (interval) {
        case "years":
            return date2.getFullYear() - date1.getFullYear();
        case "months":
            return (
                (date2.getFullYear() * 12 + date2.getMonth()) -
                (date1.getFullYear() * 12 + date1.getMonth())
            );
        case "weeks":
            return Math.floor(timediff / week);
        case "days":
            return Math.floor(timediff / day);
        case "hours":
            return Math.floor(timediff / hour);
        case "minutes":
            return Math.floor(timediff / minute);
        case "seconds":
            return Math.floor(timediff / second);
        default:
            return undefined;
    };
};
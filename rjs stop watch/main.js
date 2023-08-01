// // Timer 


// let second = 0;
// let minute = 0;
// let hour = 1;
// let hr = document.querySelector(".hr");
// let min = document.querySelector(".min");
// let sec = document.querySelector(".sec");

// hr.textContent = 0;
// min.textContent = 0;
// sec.textContent = 0;
// setInterval(() => {
//     sec.textContent = second++;
//     if(second == 59){
//         // sec.textContent = 0;
//         min.textContent = ++minute;
//         second = 0;
//     }
//     if(minute == 59){
//         hr.textContent = ++hour;
//         minute = 0;
//         second = 0;
//     }

//     // sec.textContent = second++;
// }, 200);





















let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;

function start(){
    timer = true;
    stopwatch();


}
function stop(){
    timer =  false;
    
}
function reset(){
    timer =  false;

    hr = 0;
    sec = 0;
    min = 0;
    count = 0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}

function stopwatch(){
    if(timer == true){
        count = count + 1;

        if(count == 100){
            sec = sec + 1;
            count = 0;
        }
        

        if(sec == 60){
            min = min + 1;
            sec = 0;
        }

        if(min == 60){
            hr = hr +1;
            min = 0;
            sec = 0;
        }

        let hrString = hr;
        let minString = min;
        let secString = sec;
        let countString = count;

        if(hr < 10){
            hrString = "0" + hrString;
        }
        if(min < 10){
            minString = "0" + minString;
        }
        if(sec < 10){
            secString = "0" + secString;
        }
        if(count < 10){
            countString = "0" + countString;
        }
        
        
        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;

        setTimeout("stopwatch()", 10)

    }

}














let first = document.querySelectorAll(".btn")[0];
let second = document.querySelectorAll(".btn")[1];
let third = document.querySelectorAll(".btn")[2];


first.addEventListener("click", start);
second.addEventListener("click", stop);
third.addEventListener("click", reset);



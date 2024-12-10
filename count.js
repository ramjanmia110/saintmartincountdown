let day =document.getElementById("days");
let hour =document.getElementById("hours");
let minute =document.getElementById("minutes");
let second =document.getElementById("seconds");
let message =document.getElementById("message");

let tourTime =new Date("December 20, 2024 18:00:00").getTime();


function tourCountDown(){
    let now =new Date().getTime();
    let leftTime =tourTime -now;
    
    if( leftTime > 0){
        let days =Math.floor(leftTime /(1000*60*60*24));
        let hours =Math.floor((leftTime % (1000*60*60*24)) /(1000*60*60));
        let minutes =Math.floor((leftTime % (1000*60*60)) /(1000*60));
        let seconds =Math.floor((leftTime % (1000*60)) /1000);
       
        day.innerText =days;
        hour.innerText =hours;
        minute.innerText =minutes;
        second.innerText =seconds;
    }else{
        clearInterval(countDownTiming);
        message.innerText ="Hurrah! Today We Will Go To saint martin";
    }
}



let countDownTiming =setInterval(tourCountDown,1000);
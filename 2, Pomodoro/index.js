
let pomodoro = document.querySelector('.pomodoro');
let shortBreak = document.querySelector('.short_break');
let longBreak = document.querySelector('.long_break');
let timer = document.querySelector('.timer p');
let startButton = document.querySelector('.start');
let secondsRemaining;

// function pomo()
// {

//     timer.innerText = '25 : 00'
//     // shortBreak.style.display = 'none';
//     // longBreak.style.display = 'none';
//     // let secondsRemaining = 25 * 60;
//     // return secondsRemaining
// }


// function short()
// {

//     timer.innerHTML = '05 : 00'
//     // pomodoro.style.display = 'none';
//     // longBreak.style.display = 'none';
//     // let secondsRemaining = 5 * 60;
//     // return secondsRemaining
// }



// function long()
// { 
//     timer.innerHTML = '15 : 00'
//     // pomodoro.style.display = 'none';
//     // longBreak.style.display = 'none';
//     // let secondsRemaining = 15 * 60;

//     // return secondsRemaining;
// }


// =============================
pomodoro.addEventListener("click", function(){
  timer.innerText = '25 : 00'
  shortBreak.style.display = 'none';
  longBreak.style.display = 'none';

   secondsRemaining = 25 * 60;
});
shortBreak.addEventListener("click", function(){
  timer.innerHTML = '05 : 00'
  pomodoro.style.display = 'none'
  longBreak.style.display = 'none'
   secondsRemaining = 5 * 60;
});
longBreak.addEventListener("click", function(){
  timer.innerHTML = '15 : 00'
  pomodoro.style.display = 'none'
  shortBreak.style.display = 'none'
   secondsRemaining = 15 * 60;
});





// let secondsRemaining;

if( pomo() )
{
  secondsRemaining = pomo();
}
else if( short() )
{
  secondsRemaining = short();

}
else if( long() )
{
  secondsRemaining = long();

}

// let secondsRemaining = pomo();
// let secondsRemaining = long(); 

// ====================================

// let secondsRemaining = 25 * 60;
let = interval;

function start() {
  startButton.disabled = true;   

     interval = setInterval(() => {
      secondsRemaining--;
  
      if (secondsRemaining === 0) {
        clearInterval(interval);
        alert('Your Pomodoro session is complete!');
      }
  
      timer.innerHTML = secondsToTime(secondsRemaining);
    }, 1000);
  }
  





 function stop() {
  clearInterval(interval);
  // secondsRemaining = 25*60;

    pomodoro.style.display = '';
    shortBreak.style.display = '';
    longBreak.style.display = '';
    startButton.disabled = false
}


  
  function secondsToTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
  
    return `${minutes}:${secondsRemaining}`;
  }
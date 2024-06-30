
  const wheel = document.querySelector('.cricket_page');
  const startButton = document.querySelector('.button');
  const display = document.querySelector('.display');
  const team_1 = document.querySelector('.team_1');
  const team_2 = document.querySelector('.team_2');
  const winner = document.querySelector('.winner');
  const targetDisplay = document.querySelector('.target');
  
  
  
  
  // ========================= variables ============================

  let player1_run=0, player2_run=0, target=0, target_help=0;
  let player1_wicket=0, player2_wicket=0;
  let spinCount=1;
  let wicket = 0;
  let innings = 1;

  let deg = 0;
  let zoneSize = 40; // deg

  //======================== Counter clockwise =====================
  const symbolSegments = {
    1: 4,
    2: 1,
    3: 'Catch !!!',
    4: 3,
    5: 0,
    6: 6,
    7: 2,
    8: 5,
    9: 'Out !!!', 
  }



  // ======================== update runs and wickets ================
  const handleWin = (actualDeg) => {
    


    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    if(innings == 1){
      // adding run for the team 1
        if(0 <=symbolSegments[winningSymbolNr] && symbolSegments[winningSymbolNr] <= 6){
          player1_run=player1_run+Number(symbolSegments[winningSymbolNr]);
          target = player1_run;
        }
        else{
          player1_wicket++;
          wicket++;
        }
    
        display.innerHTML = symbolSegments[winningSymbolNr];
        team_1.innerHTML = player1_run +'/'+player1_wicket;
    
        // console.log('Innings : ${innings}' + symbolSegments[winningSymbolNr]);
        console.log(`Innings: ${innings} run:${symbolSegments[winningSymbolNr]} wic:${wicket} spinCount:${spinCount}`);
      }

      else if (innings == 2){

        // adding run for the team 2
        if(0 <=symbolSegments[winningSymbolNr] && symbolSegments[winningSymbolNr] <= 6)
          player2_run=player2_run+Number(symbolSegments[winningSymbolNr]);
        else{
          player2_wicket++;
          wicket++;
        }
        display.innerHTML = symbolSegments[winningSymbolNr];
        team_2.innerHTML = player2_run +'/'+player2_wicket;
    
        // console.log('Innings : ${innings}'+symbolSegments[winningSymbolNr]);
        console.log(`Innings: ${innings} run:${symbolSegments[winningSymbolNr]} wic:${wicket} spinCount:${spinCount}`);

      }
      // ====================================== testing =======================
      

    
  }
  
  



  // ================================ Wheel spinner ===========================================
  
  startButton.addEventListener('click', () => { 
    

    if ( spinCount <= 6 && wicket <= 1 && player2_run <= target /*&& innings <=3*/ ) {
      

        // Reset display
        display.innerHTML = `Bowling  ${spinCount}`;
        // Disable button during spin
        startButton.style.pointerEvents = 'none';
        // Calculate a new rotation between 5000 and 10 000
        deg = Math.floor(1000 + Math.random() * 2000);
        // Set the transition on the wheel
        wheel.style.transition = 'all 3s ease';
        // Rotate the wheel
        wheel.style.transform = `rotate(${deg}deg)`;
        // Apply the blur
        wheel.classList.add('blur');

        // Increment the spin count
        spinCount++;

    }

    // ====================================================================
    else 
    {
      spinCount = 1;
        wicket = 0;
        innings++;
        target_help++;
      
        if(innings == 2)
        {
          target_help = target; 
          targetDisplay.innerHTML = `Target : ${target_help+1}`;
          

        }
      document.querySelector('.team_2_color').style.color = 'red';
      document.querySelector('.team_1_color').style.color = 'black';
        
    }

// ==========================================================================

    if(innings == 3)
{
  console.log(`working..............`);
  startButton.disabled = true;
  showResult.style.display = "block";
}
    
 
  });

  

  wheel.addEventListener('transitionend', () => {

      // Remove blur
      wheel.classList.remove('blur');
      // Enable button when spin is over
      startButton.style.pointerEvents = 'auto';
      // Need to set transition to none as we want to rotate instantly
      wheel.style.transition = 'none';
      // Calculate degree on a 360 degree basis to get the "natural" real rotation
      // Important because we want to start the next spin from that one
      // Use modulus to get the rest value
      const actualDeg = deg % 360;
      // Set the real rotation instantly without animation
      wheel.style.transform = `rotate(${actualDeg}deg)`;
      // Calculate and display the winning symbol
      handleWin(actualDeg);

    
  });



// ========================== New Code ======================

let showResult = document.querySelector('.show-result');
let replay = document.querySelector('.replay');

showResult.addEventListener("click", () => {
  
    // startButton.removeEventListener('click');
      //   // wheel.removeEventListener('transitioned');
        if(player1_run > player2_run){
          // winner.style.border = '1px solid red'
          winner.innerHTML = 'Team 1 is winner';
          console.log(replay);
          replay.style.display = "inline-block";
        }
        else if(player1_run < player2_run){
          // winner.style.border = '1px solid red'
          winner.innerHTML = 'Team 2 is winner';
          console.log(replay);
          replay.style.display = "inline-block";
        }
        else{
          // winner.style.border = '1px solid red'
          winner.innerHTML = 'draw';
          console.log(replay);
          replay.style.display = "inline-block";
        }


})


replay.addEventListener("click", () => {
  window.location.reload();
})
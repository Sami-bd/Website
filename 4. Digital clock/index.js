
const  hour = document.querySelector('.hour');
const  min = document.querySelector('.min');
const  sec = document.querySelector('.sec');
const  amPm = document.querySelector('.amPm');


function getSec()
{
    const now = new Date();
    const hours = now.getHours();
    const mins = now.getMinutes();
    const seconds = now.getSeconds();
     
    function show2DigitInteger(number) {
        const paddedNumber = number.toString().padStart(2, '0');
        return paddedNumber;
      }


    if(hours > 12)
    {
        hour.innerText = show2DigitInteger(hours)-12;
        amPm.innerText = 'PM';
        
    }
    else{
        hour.innerText = show2DigitInteger(hours);
        amPm.innerText = 'AM';
    }

    
    min.innerText = show2DigitInteger(mins);
    sec.innerText = show2DigitInteger(seconds);

}

setInterval(getSec, 1000);

// getSec();
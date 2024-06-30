// random messi's photo

function messi()
{
    let rand = Number(Math.floor(Math.random() * 6) + 1);


    let x = document.getElementById('img');

    
        if(rand == 1)
        {
            x.src = "./messi1.jfif"
        }
        else if(rand == 2)
        {
            x.src = "./messi2.jfif"
        }
        else if(rand == 3)
        {
            x.src = "./messi3.jfif"
        }
        else if(rand == 4)
        {
            x.src = "./messi4.jfif"
        }
        else if(rand == 5)
        {
            x.src = "./messi5.jfif"
        }
        else if(rand == 6)
        {
            x.src = "./messi6.jfif"
        }

        console.log(rand);
}


// random naymer's

function naymer()
{
    let rand = Number(Math.floor(Math.random() * 6) + 1);


    let x = document.getElementById('img');

    
        if(rand == 1)
        {
            x.src = "./naymer1.jfif"
        }
        else if(rand == 2)
        {
            x.src = "./naymer2.jfif"
        }
        else if(rand == 3)
        {
            x.src = "./naymer3.jfif"
        }
        else if(rand == 4)
        {
            x.src = "./naymer4.jfif"
        }
        else if(rand == 5)
        {
            x.src = "./naymer5.jfif"
        }
        else if(rand == 6)
        {
            x.src = "./naymer6.jfif"
        }

        console.log(rand);
}

// dice rolling

function dice()
{
    let rand = Number(Math.floor(Math.random() * 6) + 1);
    document.getElementById('dice_num').innerHTML = 'Dice number : '+rand;

    let x = document.getElementById('dice');

    
        if(rand == 1)
        {
            x.src = "./dice1.png"
        }
        else if(rand == 2)
        {
            x.src = "./dice2.png"
        }
        else if(rand == 3)
        {
            x.src = "./dice3.png"
        }
        else if(rand == 4)
        {
            x.src = "./dice4.png"
        }
        else if(rand == 5)
        {
            x.src = "./dice5.png"
        }
        else if(rand == 6)
        {
            x.src = "./dice6.png"
        }

        console.log(rand);
}
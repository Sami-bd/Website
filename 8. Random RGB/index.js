function rgb(){
    let r = Number(Math.floor(Math.random() * 256));
    let g = Number(Math.floor(Math.random() * 256));
    let b = Number(Math.floor(Math.random() * 256));

    let x = document.getElementById('rgb').style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    document.getElementById('text').innerHTML = 'rgb('+r+','+g+','+b+')';
    console.log(x)
}
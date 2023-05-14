let mili = 0;
let sec = 0;
let min = 0;
let hour = 0;
let int = null;
let timershow= document.querySelector('.timer');

function showTimer(){
    mili +=10;

    if(mili == 1000){
        mili = 0;
        sec +=1;

        if(sec == 60){
            sec = 0;
            min +=1;
            
            if(min == 60){
                min = 0;
                hour +=1;
            }
        }    
    }

    let h = hour < 10 ? "0" + hour : hour;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let ms = mili < 10 ? "00" + mili : mili < 100 ? "0" + mili : mili;

    timershow.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

document.getElementById('start').addEventListener('click', ()=>{
    if(int!=null){
        clearInterval(int);
    }
    int = setInterval(showTimer,10);
});

document.getElementById('pause').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('reset').addEventListener('click', ()=>{
    clearInterval(int);
    mili = 0;
    sec = 0;
    min = 0;
    hour = 0;

    timershow.innerHTML = '00 : 00 : 00 : 000';
});





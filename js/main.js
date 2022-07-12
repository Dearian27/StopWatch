
const intervals = document.querySelector('.btns-wrapper');

let btnChecker;
const addInterval = (oneInt) => 
{
    let currentBtn = oneInt.target.dataset.int;
    //console.log(oneInt.target.dataset.int);
    for(let i = 0; i < intervals.children.length; i++)
    {
        intervals.children[i].classList.remove('active');
    }
    intervals.children[currentBtn].classList.add('active');
    btnChecker = currentBtn;
}

 intervals.addEventListener('click',oneInt =>
 {
     //console.log(oneInt);
     addInterval(oneInt);
 });




const btnSettings = document.querySelector('.btnSettings');
const settings = document.querySelector('.settings');

const btnPlay = document.getElementById('btnPlay');
const btnPause = document.getElementById('btnPause');
const btnStop = document.getElementById('btnStop');

const numberSeconds = document.getElementById('seconds');
const numberTenSeconds = document.getElementById('tenSeconds');
const numberMinutes = document.getElementById('minutes');
const numberTenMinutes = document.getElementById('tenMinutes');

let seconds = 0, tenSeconds = 0, minutes = 0, tenMinutes = 0,
    timerIsGoing = false, timerWillBeStarted = false;


btnSettings.addEventListener('click', ()=>
{
    settings.classList.toggle('active');
})



    setInterval(() =>
    {
    if(timerIsGoing && timerWillBeStarted)
    {
        seconds++;
        if(seconds >= 10)
        {
            seconds = 0;
            tenSeconds++;
            numberTenSeconds.innerHTML = tenSeconds;    // десяті секунд
        }
        if(tenSeconds == 6)
        {
            tenSeconds = 0;
            minutes++;
            numberMinutes.innerHTML = minutes;          // хвилини
            numberTenSeconds.innerHTML = tenSeconds; 
        }
        if(minutes >= 10)
        {
            minutes = 0;
            tenMinutes++;
            numberTenMinutes.innerHTML = tenMinutes;    // десяті хвилин
            numberMinutes.innerHTML = minutes;
        }
        numberSeconds.innerHTML = seconds;          // секунди
    }
    } ,1000)

// const Start = () => {
//     console.log('click');
//     btn.classList.add('anim');
//    // btn.classList.remove('anim');
//     console.log('Setclick');
// }

function sleep(millis) 
{
    millis += new Date().getTime();
    while (new Date() < millis){}
} 


window.addEventListener('load' ,() =>{timeChecker()})

const timeChecker = () =>
{
    setInterval(()=>
    {
        if(btnChecker == 0)
        {
            
        }
        else if(btnChecker == 1)
        {
            if(timerIsGoing == false && !(seconds == 0 && tenSeconds == 0 && minutes == 0 && tenMinutes == 0))
            {
                if(    seconds == 0 && tenSeconds == 0 
                    || seconds == 5 && tenSeconds == 1 
                    || seconds == 0 && tenSeconds == 3
                    || seconds == 5 && tenSeconds == 4)
                {
                    console.log('Чверть!');
                    soundClick();
                }
            }
        }
        else if(btnChecker == 2)
        {
            if(timerIsGoing == false && !(seconds == 0 && tenSeconds == 0 && minutes == 0 && tenMinutes == 0))
            {
                if(    seconds == 0 && tenSeconds == 0 
                    || seconds == 0 && tenSeconds == 3)
                {
                    console.log('Половина!');
                    soundClick();
                }
            }
        }
        else if (btnChecker == 3)
        {
            if(timerIsGoing == false && !(seconds == 0 && tenSeconds == 0 && minutes == 0 && tenMinutes == 0))
            {
                if( seconds == 0 && tenSeconds == 0 )
                {
                    console.log('Хвилина!');
                    soundClick();
                }
            }
        }

    },1000)

}
const  soundClick = () => 
{
    let audio = new Audio();
    audio.src = './sounds/bell.mp3';
    audio.autoplay = true;
}
// window.addEventListener('click', (btn) => {
//     console.log('Hi')
//     if(btn == btnPlay)
//         console.log('hello')
// })
btnPlay.addEventListener('click', () =>
{
    timerIsGoing = true;
    if(timerWillBeStarted == false) // Перший запуск
    {
        timerWillBeStarted = true;
    }

    btnStop.classList.add('active');
    btnPlay.classList.remove('active');
    btnPause.classList.add('active');
})
btnPause.addEventListener('click', () =>
{
    timerIsGoing = false;
    btnPause.classList.remove('active');
    btnPlay.classList.add('active');
})
btnStop.addEventListener('click', () =>
{
    timerWillBeStarted = false;
    timerIsGoing = false;

    seconds = 0;
    tenSeconds = 0;
    minutes = 0;
    tenMinutes = 0;

    numberSeconds.innerHTML = "0";
    numberTenSeconds.innerHTML = "0";
    numberMinutes.innerHTML = "0";
    numberTenMinutes.innerHTML = "0";

    btnStop.classList.remove('active');
    btnPause.classList.remove('active');
    btnPlay.classList.add('active');
})

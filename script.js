// //const randomcolor = 

// const randomColor = function () {
//     const hex = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += hex[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };
  
const randomColor =function(){
    const hex = '0123456789ABCDEF';
    let color ='#';
    for(let i =0 ;i<6 ;i++){
        color += hex[parseInt(Math.random()*16)]
    }
    return color;
    };
let changecolor;// need to declare outside as it getting used in another function aswell
let dance = document.getElementById('danceemoji');
dance.innerHTML = '';


function changing(){// isko startchangingcolor ke andar bhi daal skte the but aise karne ka man tha too aise kar diye ehehe
    document.body.style.backgroundColor = randomColor();
} 

const startchangingcolor = function(){
    if(!changecolor){ //space bachane ke liye
    changecolor = setInterval(changing , 250);
    }
    displayemoji(`💃💃🕺🕺`);
};

const stopchangingcolor = function(){
    clearInterval(changecolor);
    changecolor = null; //space bachane ke liye
    displayemoji(`🧍‍♂️🧍‍♂️🧍‍♀️🧍‍♀️`)
};
function displayemoji(emoji){
    dance.innerHTML = `<span>${emoji}</span>`;
}


const start = document.getElementById('start').addEventListener('click' , startchangingcolor);

const stop = document.getElementById('stop').addEventListener('click' , stopchangingcolor);


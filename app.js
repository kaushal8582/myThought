const music = new Audio('music/10.mp3');

//  music.play();



const rightBtn = document.querySelector("#right");
const leftBtn = document.querySelector("#left");
const main = document.querySelector(".main");
const part1 = document.querySelector(".part1");
const boximg = document.querySelector(".img img");
const love = document.querySelector("#love")
const splas = document.querySelector(".splash")

love.addEventListener("click",()=>{
    splas.style.display = "none"
    music.play()
})



let index = 0; 
let boxImgIndex = 1; 

const data = [
    {
        shyari: "फिज़ा में महकती शाम हो तुम,प्यार में झलकता ज़ाम हो तुम,सीने में छुपाये फिरते है हम तुम्हारी यादें,इसलिये मेरी जिंदगी का दूसरा नाम हो तुम।", 
        img: "crush2/1.jpg", 
        music: "music/10.mp3"
    }, 
    {
        shyari: "एक तुम ही हो जिसे देख कर, दिल को सुकून मिलता है।", 
        img: "crush2/2.jpg", 
        music: "music/1.mp3"
    },
    {
        shyari: "कैसे कह दूँ इश्क नहीं है तुमसे, मेरे लिए इश्क का मतलब ही तुम हो !", 
        img: "crush2/3.jpg", 
        music: "music/2.mp3"
    },
    {
        shyari: "यू तो तैरने में हो गया हूँ माहिर,फिर भी अक्सर डूब जाता ह तुम्हारे ख्यालों में।", 
        img: "crush2/4.jpg", 
        music: "music/3.mp3"
    }, 
    {
        shyari: "इश्क की अदा बड़ी निराली है गालिब नैनो में बसकर कब दिल में उतर जाए पता नही चलता..!!", 
        img: "crush2/5.jpg", 
        music: "music/4.mp3"
    },
    {
        shyari: "मैंने जान बचा के रखी है, एक जान के लिए, इतना लव कैसे हो गया, एक अनजान के लिए।", 
        img: "crush2/6.jpg", 
        music: "music/5.mp3"
    },
    {
        shyari: "गुस्से की दुकान हो आप, पर मेरी जान हो आप।", 
        img: "crush2/7.jpg", 
        music: "music/6.mp3"
    },
    {
        shyari: "मेरी जिंदगी मेरी जान हो तुम मेरे सुकून का दुसरा नाम हो तुम।", 
        img: "crush2/8.jpg", 
        music: "music/7.mp3"
    },
    {
        shyari: "इसे पढ़ रही हो तो हा जरुर करना , अगर बात हो हा की तो कोई बात नहीं मगर न हो तो replay जरुर करना .", 
        img: "crush2/9.jpg", 
        music: "music/8.mp3"
    },
    {
        shyari: "इसे पढ़ रही हो तो हा जरुर करना , अगर बात हो हा की तो कोई बात नहीं मगर न हो तो replay जरुर करना .", 
        img: "crush2/10.jpg", 
        music: "music/9.mp3"
    },
    
];


function playmusic(){
    music.src = data[index].music;  
    music.play(); 
}

function leftMove() {
    music.pause()
    if (index > 0) {
        index--;
        boxImgIndex--;
    }
    main.style.backgroundImage = `url(${data[index].img})`; 
    part1.innerHTML = `${data[index].shyari}`;
    boximg.src = `${data[boxImgIndex].img}`;
    music.src = data[index].music;  
    music.play(); 
    music.addEventListener("ended",()=>{
    playmusic()
    })
   
}

function rightMove(){
   
    music.pause()
    if (boxImgIndex < data.length -1  ) {
        index++;
        boxImgIndex++;
    }
    main.style.backgroundImage = `url(${data[index].img})`; 
    part1.innerHTML = `${data[index].shyari}`;
    boximg.src = `${data[boxImgIndex].img}`;
    music.src = data[index].music; 
    music.play(); 
    music.addEventListener("ended",()=>{
        playmusic()
     })

}

music.addEventListener("ended",()=>{
    playmusic()
 })


leftBtn.addEventListener("click",()=>{

   
    leftMove()
})



rightBtn.addEventListener("click",()=>{

    
    rightMove()

})

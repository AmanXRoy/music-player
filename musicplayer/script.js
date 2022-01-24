let trackimage = document.querySelector('#track--image');
let trackname = document.querySelector('.track--name');
let trackartist = document.querySelector('.track--artist');
let prevbtn =document.querySelector('.fa-backward');
let playbtn =document.querySelector('.fa-play');
let nextbtn =document.querySelector('.fa-forward');
let music = document.querySelector('.track--music');
let isplaying = false;
let trackindex = 0;

let songs =[
    {
        title:"song 1",
        artist:"unkown",
        name:"1",
    },

    {
        title:"song 2",
        artist:"unkown",
        name:"2",
    },

    {
        title:"song 3",
        artist:"unkown",
        name:"3",
    }
];

 



playbtn.addEventListener('click',()=>{
    if(!isplaying)
    {
        playsong();
    }
    else{
        pausesong();
    }
})

playsong=()=>{
    isplaying = true;
     playbtn.classList.replace("fa-play","fa-pause")
     trackimage.classList.add('anime');
     music.play();
}

pausesong=()=>{
    isplaying = false
    playbtn.classList.replace("fa-pause","fa-play")
    trackimage.classList.remove('anime');
    music.pause();
}

// change songs 
loadsong=(songs)=>{
        trackname.textContent=songs.title;
        trackartist.textContent=songs.artist;
        trackimage.src="images/"+songs.name+".jpg";
        music.src="music/"+songs.name+".mp3";

}

loadsong(songs[2]);





prevbtn.addEventListener('click',()=>{
    trackindex--;
    if(trackindex < 0)
    {
        trackindex = songs.length -1;
    }
    loadsong(songs[trackindex]);
    playsong();  

})

nextbtn.addEventListener('click',()=>{
    trackindex++;
    if(trackindex > songs.length-1)
    {
        trackindex = 0;
    }
    loadsong(songs[trackindex]);
    playsong();  

})




let progressbar=document.getElementById("progressbar");
let upperplayElements = document.querySelectorAll('.fa.fa-play-circle');
let  songname=document.querySelectorAll("songname");
let playcircle=document.getElementById('playcircle');
 let previous=document.getElementById('previous');
 let forword=document.getElementById('forword');
 let audio=new Audio('1.mp3')
  let songindex=0; 


//  Deal with  the  play button which is neighbour 
upperplayElements.forEach((element,songindex) => {
    element.addEventListener("click", () => {
        upperplayElements.forEach((element) => {
             
              element.classList.remove('fa-pause-circle');
              element.classList.add('fa-play-circle');
              
         });
              if(!audio.paused){
                  audio.pause();
                  element.classList.add('fa-play-circle');
                  element.classList.remove('fa-pause-circle');
                  playcircle.classList.add('fa-play-circle');
                   playcircle.classList.remove('fa-pause-circle');
                }
                 else {
                   element.classList.remove('fa-play-circle');
                   element.classList.add('fa-pause-circle'); 
                   audio.src=`${songindex+1}.mp3`;
                   audio.currentTime=0;
                   audio.play();
                   playcircle.classList.remove('fa-play-circle');
                   playcircle.classList.add('fa-pause-circle');
                 }
             
            
        })
    });
     
     
 forword.addEventListener(("click"),()=>{
       if(songindex>=7){
        songindex=0;
        audio.src=`${songindex+1}.mp3`
        audio.currentTime=0;
        audio.play();
    }
            songindex+=1;
            audio.src=`${songindex}.mp3`
            audio.currentTime=0;
            audio.play();


 })
 previous.addEventListener(("click"),()=>{
       if(songindex<=0){
        songindex=7;
        audio.src=`${songindex}.mp3`
        audio.currentTime=0;
        audio.play();
    }
    else if(songindex-=1){
            audio.src=`${songindex}.mp3`
            audio.currentTime=0;
            audio.play();
           
        }


 })

// Deal with play button which use to play or pause the   song 
playcircle.addEventListener("click",()=>{
        if (audio.paused||audio.currentTime<=0){
            audio.play();
            playcircle.classList.remove('fa-play-circle');
            playcircle.classList.add('fa-pause-circle');
             
         }
         else{
             audio.pause();
             playcircle.classList.remove('fa-pause-circle');
             playcircle.classList.add('fa-play-circle');
 
        }
})
   
 
 //Deal with the progressbar 
 audio.addEventListener("timeupdate",()=>{
    let progress =+(audio.currentTime/audio.duration)*100
    progressbar.value =progress;
 })

//  Deal with motion of progress bar
 progressbar.addEventListener("change",()=>{
      audio.currentTime=(progressbar.value*audio.duration)/100
 })
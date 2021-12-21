'use strict';
// let audio= new audio ('fail.wav');
// let completed =new audio('completed.wav');

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent='🎊Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value);


let secrectNumber=Math.trunc(Math.random()*20)+1;
let check =new Audio("check.wav");
let fail=new Audio('fail.wav');
let win=new Audio("win.wav");
let score=20;
let highscore=0;


const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}



document.querySelector('.check').addEventListener('click',function(){
   
    check.play();
    const guess= Number (document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    if(!guess){
        // document.querySelector('.message').textContent='🤚No Number';
    displayMessage('🤚No Number');

    }else if(guess=== secrectNumber){
       

        // document.querySelector('.message').textContent='🎊Correct Number';
        displayMessage('🎊Correct Number');
        win.play();
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent =secrectNumber;

        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
            document.querySelector('.score').textContent=score;
        }

     
     
       

    }else if(guess!==secrectNumber)
      {
    
        if(score>1){
            // document.querySelector('.message').textContent =guess>secrectNumber ? '📈 Too High !':'📉 Too Low !';
            displayMessage(guess>secrectNumber ? '📈 Too High !':'📉 Too Low !');
        score--;
        document.querySelector('.score').textContent=score;
        }else{
            // document.querySelector('.message').textContent ='😭You Lost the Game!';
            displayMessage('😭You Lost the Game!');
            document.querySelector('.score').textContent=0;
           
            
            fail.play();
        }
        
        
    }
    
    // else if(guess > secrectNumber){
    //     if(score>1){
    //         document.querySelector('.message').textContent ='📈 Too High !';
    //     score--;
    //     document.querySelector('.score').textContent=score;
    //     }else{
    //         document.querySelector('.message').textContent ='😭You Lost the Game!';
    //         document.querySelector('.score').textContent=0;
           
            
    //         fail.play();
    //     }
        
        
    // }else if(guess <secrectNumber) {
    //     if(score>1){
    //         document.querySelector('.message').textContent ='📉 Too Low !';
    //     score--;
    //     document.querySelector('.score').textContent=score;
    //     }else{
    //         document.querySelector('.message').textContent ='😭You Lost the Game!';
    //         document.querySelector('.score').textContent=0;
            
    //         fail.play();
    //     }
    // }
})

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    document.querySelector('.guess').value='';
     secrectNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent='?';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.score').textContent=score;
    
    document.querySelector('.score').textContent=score;
    // document.querySelector('.message').textContent='Start guessing...';
    displayMessage('Start guessing...');

})
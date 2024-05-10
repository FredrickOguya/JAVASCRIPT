const score = JSON.parse(localStorage.getItem('score')) ||{
    wins: 0,
     losses: 0,
     ties: 0
   };
   updateScoreElement();
 /*
   if (!score){
   score={
     wins: 0,
     losses: 0,
     ties: 0
   }
 }
 */



 let isAutoplaying = false;
 let IntervalId;
 
 //const autoplay = () => {

 //}
 document.querySelector('.reset-score-button').addEventListener('click',()=>{
  resetConfirmation ();
 })
 
 

 document.querySelector('.auto-play-button').addEventListener('click',()=>{
    if (!isAutoplaying) {
        IntervalId = setInterval(() => {
          const playerMove = pickComputerMove();
          playGame(playerMove);
        }, 1000);
        isAutoplaying = true;
        document.querySelector('.auto-play-button').innerHTML='Stop playing'
      } else {
        clearInterval(IntervalId);
        isAutoplaying = false;
        document.querySelector('.auto-play-button').innerHTML='Auto play'

      }
 })
 
 
  document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('rock')
 }) 
  document.querySelector('.js-paper-button').addEventListener('click', () =>{
    playGame('paper')
  })
  document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('scissors')
  })

  document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
      playGame('rock');
    }
    else if (event.key === 'p') {
      playGame('paper');
    }
    else if (event.key === 's') {
      playGame('scissors');
    }
    else if (event.key=== 'a') {
        IntervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
          }, 1000);
          isAutoplaying = true;
          document.querySelector('.auto-play-button').innerHTML='Stop playing'
    }
    else if (event.key ==='Backspace') {
      resetConfirmation ();
    }
    
  })
 function playGame(playerMove) {
   const computerMove = pickComputerMove();
     
   let result='';
   
   if (playerMove === 'scissors') {
       if(computerMove === 'rock' ){
         result = 'you lose.';
     } else if(computerMove === 'paper'){
       result = 'you win.';
     } else if (computerMove === 'scissors') {
       result = 'tie.';
     } 
    
   }else if (playerMove=== 'paper') {
     if(computerMove === 'rock' ){
      result = 'you win.';
     } else if(computerMove === 'paper'){
       result = 'tie.';
     } else if (computerMove === 'scissors' ){
         result = 'you lose.';
     }
   }else if (playerMove ==='rock'){
     if(computerMove === 'rock' ){
      result = 'tie.';
     } else if(computerMove === 'paper'){
       result = 'you lose.';
     } else if (computerMove === 'scissors'){
       result = 'you win.';
     }
   }
     if (result === 'you win.') {
       score.wins += 1;
     } else if (result === 'you lose.') {
       score.losses += 1;
     } else if(result === 'tie.'){
       score.ties += 1;
     }

     localStorage.setItem('score', JSON.stringify(score));

       updateScoreElement();

       document.querySelector('.js-result').innerHTML = result;
       document.querySelector('.js-moves').innerHTML = `you 
       <img src="project pics/${playerMove}-emoji.png" class="move-icon">
       <img src="project pics/${computerMove}-emoji.png" class="move-icon">
       computer`
 }
 function updateScoreElement() {
   document.querySelector('.js-score')
     .innerHTML = `wins: ${score.wins}, losses:${score.losses},ties:${score.ties}`;
 }
 function pickComputerMove () {
   const randomNumber = Math.random (); 
 
   let computerMove = '';


   if(randomNumber >=0 && randomNumber < 1/3){
     computerMove = 'rock'
   } else if (randomNumber >= 1/3 && randomNumber < 2/3){
     computerMove = 'paper'
   } else if (randomNumber >= 2/3 && randomNumber < 1){
       computerMove = 'scissors'
     } 
     return computerMove;     
 } 
 function resetAll(){
  score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score')
      document.querySelector('.js-score')
      
     .innerHTML = `wins: ${score.wins}, losses:${score.losses},ties:${score.ties}`;
 }
 function resetConfirmation (){
  document.querySelector('.sure').innerHTML = `Are you sure you want to reset the score? 
  <button class="js-confirm confirm">yes</button> <button class="js-dontConfirm dontConfirm"'>No</button>`

  document.querySelector('.js-confirm').addEventListener('click',()=>{
    resetAll();
    clearConfirmation ();
  })
  document.querySelector('.js-dontConfirm').addEventListener('click',()=>{
    clearConfirmation ();
  })
 }
 function clearConfirmation () {
  document.querySelector('.sure').innerHTML = '';
 }
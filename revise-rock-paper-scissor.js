function play(move){
    let randomNumber=Math.random();
    let computerMove;

    if(randomNumber>0 && randomNumber<1/3){
        computerMove = 'Rock';
    }else if(randomNumber>1/3 && randomNumber<2/3){
        computerMove = 'Paper';
    }else if(randomNumber>2/3){
        computerMove ='Scissors';
    }
    if(computerMove==='Rock'){
        console.log(` You: ${move}\n Computer: Rock\n You Tie`)
    }else if(computerMove==='Paper'){
        console.log(` You: ${move}\n Computer: Paper\n You lose`)
    }else if(computerMove==='Scissors'){
        console.log(` You: ${move}\n Computer: Scissors\n You Win`)
    }
}
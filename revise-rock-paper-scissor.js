const count = {
        Win:0,
        Losses:0,
        Tie:0
    }
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
        if (move==='Rock'){
            console.log(` You: ${move}\n Computer: Rock\n You Tie`)
            result = 'Tie';
        }else if(move === 'Paper'){
            console.log(` You: ${move}\n Computer: Rock\n You Win`)
            result = 'win';   
        }else if(move === 'Scissors'){
            console.log(` You: ${move}\n Computer: Rock\n You Lose`)
            result = 'loss'   
        }
    }else if(computerMove==='Paper'){
        if (move==='Rock'){
            console.log(` You: ${move}\n Computer: Paper\n You Lose`)
            result = 'loss';
        }else if(move === 'Paper'){
            console.log(` You: ${move}\n Computer: Paper\n You Tie`) 
            result = 'Tie';  
        }else if(move === 'Scissors'){
            console.log(` You: ${move}\n Computer: Paper\n You Win`)
            result = 'win'   
        }
    }else if(computerMove==='Scissors'){
        if (move==='Rock'){
            console.log(` You: ${move}\n Computer: Scissors\n You Win`);
            result = 'win';
        }else if(move === 'Paper'){
            console.log(` You: ${move}\n Computer: Scissors\n You Lose`);
            result = 'loss';   
        }else if(move === 'Scissors'){
            console.log(` You: ${move}\n Computer: Scissors\n You Tie`);
            result = 'Tie';   
        }
    }
    if (result==='win'){
        count.Win+=1;
    }else if (result==='loss'){
        count.Losses+=1;
    }else if(result ==='Tie'){
        count.Tie+=1;
    }
    console.log(count)
}
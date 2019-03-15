/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 50 point5GLOBAL score wins the game  */

var scores, roundScore, activePlayer, gamePlaying;
//initail game: 
init()  ;

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying === true) {
        //1. Random Number 
        var dice = Math.floor(Math.random() * 6) + 1;

        //2.display the result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = "block";
        diceDom.src = 'dice-' + dice + '.png';

        //3.update the round score if the rolled number was Not a 1 
        if (dice !== 1) {
            //add score 
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else {
            //next player
            nextPlayer();
        }
    }
}
)

//----------------------------------functions-------------------//
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

function init()
{
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying= true;
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

   
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';

    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2 ';
    
    document.querySelector('.dice').style.display = "none";
}

//--------------------------------------------------------------------------//

//press the hold button : 
document.querySelector('.btn-hold').addEventListener('click', function () {
    //1 . add the current score to total score of the active player . 
    scores[activePlayer] += roundScore;

    //2.update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //3. check if the player won the GAME , or pass turn 
    if (scores[activePlayer] >= 50) {
        gamePlaying = false;
        roundScore = 0 ;

        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.player-'+activePlayer +'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer +'-panel').classList.remove('active');
        document.getElementById('current-'+activePlayer).textContent = '0';

        document.querySelector('.dice').style.display = 'none';
    }
    else
        nextPlayer();

})

document.querySelector('.btn-new').addEventListener('click', init)  ;





//---------------------------------------------------------------------------------//
//document.querySelector("#current-" +activePlayer).textContent = dice  ; 
//document.querySelector("#current-" + activePlayer ).textContent = dice ; 
//document.querySelector("#current-" + activePlayer).innerHTML = '<em>' + dice + '</em>'
//var x = document.querySelector("#score-0").textContent 
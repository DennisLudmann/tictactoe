let fields = [];
let gameOver = false;
let currentShape = 'X';


function fillShape(id) {
    if (!fields[id] && !gameOver) {          // ! means that its revers(making a false to a true) - or and "if" to a "if not"
        //in this scenario we check if the id is in use - if it is we dont execute the next code - same with gameOver
        if (currentShape == 'X') {
            currentShape = 'O';
            document.getElementById('player_1').classList.remove('player_inactive');
            document.getElementById('player_2').classList.add('player_inactive');
           
        } else {
            currentShape = 'X';
            document.getElementById('player_2').classList.remove('player_inactive');
            document.getElementById('player_1').classList.add('player_inactive');
           
        }
        fields[id] = currentShape;
        console.log(fields);
        draw();
        checkForVictory();
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'O') {
            document.getElementById('O-' + i).classList.remove('d-none');
        }
        if (fields[i] == 'X') {
            document.getElementById('X-' + i).classList.remove('d-none');
        }


    }
}

function restart() {
    gameOver = false;
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart').classList.add('d-none');

    for (let i = 0; i < 8; i++) {
        document.getElementById('victory-line' +i).classList.add('d-none');
        
    }
    for (let i = 0; i < 9; i++) {
        document.getElementById('X-' +i).classList.add('d-none');
        document.getElementById('O-' +i).classList.add('d-none');
    }
    
    fields = [];
}

function checkForVictory() {
    let winner;
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) { // first field is the same as the second field and the second field is identical to the third field and the first field does exist (is not undefined) 
        winner = fields[0];
        document.getElementById('victory-line0').style.transform = 'scaleX(1)';
    }                                                                                //ex
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {            // circle == circle "true"
        winner = fields[3];                                                         // circle == cross "false"
        document.getElementById('victory-line1').style.transform = 'scaleX(1)';     //undefined == undefined "false" because of the last parameter                                           
    }


    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('victory-line2').style.transform = 'scaleX(1)';
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('victory-line3').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('victory-line4').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('victory-line5').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('victory-line6').style.transform = 'rotate(45deg) scaleX(1.3)';
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('victory-line7').style.transform = 'rotate(-45deg) scaleX(1.3)';
    }
    if (winner) {
        
        gameOver = true;            // to make the game not continue (its set to false as default)
        setTimeout(function () {      //to show GameOver img and delay the display for a 1sek.
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restart').classList.remove('d-none');
        }, 1000);
        document.getElementById('end-screen').style = '';
    }
}

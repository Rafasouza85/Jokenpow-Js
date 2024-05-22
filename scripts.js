const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {

    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + ' Maquina: ' + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate!"
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Voce ganhou!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Voce perdeu para Alexa!"
    }

}

/*

// ENUMS

humanScoreNumber  ->  Camel Case
GAME_OPTIONS      ->  Snake Case

const GAME_OPTIONS = {

    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'

}

const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]

cria-se esse código uma vez só.

*/

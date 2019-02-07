class Hangman {

    constructor(word, remainingGuesses) {
        this.wordArray = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessLetters = [];
        this.status = 'playing';
    }

    calculateStatus() {
        const finished = this.wordArray.every((letter) => {
            return this.guessLetters.includes(letter) || letter === ' ';
        });
    
        if(finished) {
            this.status = 'finished';
        } else if(this.remainingGuesses === 0){
            this.status = 'failed';
        } else {
            this.status = 'playing';
        }
    }

    get statusMessage(){
        if(this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`;
        } else if (this.status === 'finished') {
            return 'Great work! You guessed the word';
        } else if (this.status === 'failed') {
            const word = this.wordArray.join('');
            return `Nice try! The word was "${word}"`
        }
    }

    get puzzle(){
        let puzzleWord = '';
        this.wordArray.forEach(letter => {
            if(this.guessLetters.includes(letter) || letter === ' '){
                puzzleWord += letter;
            } else {
                puzzleWord += '*';
            }
        });
        return puzzleWord;
    }

    makeGuess(letter){
        if(this.status === 'playing') {
            letter = letter.toLowerCase();
            const isUnique = !this.guessLetters.includes(letter);
            const isBadGuess = !this.wordArray.includes(letter);
            if (isUnique) {
                this.guessLetters.push(letter);
            }
            if (isUnique && isBadGuess) {
                this.remainingGuesses--;
            }
            this.calculateStatus();
        }
    }
}

export {Hangman as default};
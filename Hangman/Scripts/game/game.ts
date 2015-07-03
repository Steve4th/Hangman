class LetterCollection {
    private letters: string[];

    constructor() {
        this.letters = [];
    }

    public addLetter(letterToAdd: string): void {
        if (this.containsLetter(letterToAdd) === false ) {
            this.letters.push(letterToAdd);
        }
    }

    public containsLetter(letterToTest: string): boolean {
        return this.letters.indexOf(letterToTest) >= 0;
    }

    public length(): number {
        if (this.letters) {
            return this.letters.length;
        } else {
            return 0;
        }
    }
}

class Game {
    private activeWord: string;
    public activeWordDisplay: string;
    public matchedLetters: LetterCollection;
    public unmatchedLetters: LetterCollection;

    constructor(newWord: string) {
        this.reset(newWord);
    }

    private resetLetterCollections() {
        this.matchedLetters = new LetterCollection();
        this.unmatchedLetters = new LetterCollection();
    }

    private formatDisplayedWord(): void {
        var displayWord = "";
        for (var i = 0; i < this.activeWord.length; i++) {
            var letterToCheck = this.activeWord[i];
            if (this.matchedLetters.containsLetter(letterToCheck)) {
                displayWord += letterToCheck;
            } else {
                displayWord += "_";
            }
        }

        this.activeWordDisplay = displayWord;
    }

    private reset(newWord: string): void {
        this.resetLetterCollections();
        this.activeWord = newWord;
        this.formatDisplayedWord();
    }

    public tryLetterForMatch(letterToTryForMatch: string): boolean {
        var lowerCaseActiveWord = this.activeWord.toLowerCase();
        var lowerCaseLetterToTryForMatch = letterToTryForMatch.toLowerCase();

        if (lowerCaseActiveWord.indexOf(lowerCaseLetterToTryForMatch) >= 0) {
            this.matchedLetters.addLetter(lowerCaseLetterToTryForMatch);
            this.formatDisplayedWord();
            return true;
        } else {
            this.unmatchedLetters.addLetter(lowerCaseLetterToTryForMatch);
            return false;
        }
    }
}
﻿/// <reference path="../typings/jasmine/jasmine.d.ts" />
class game {
    activeWord: string;
    activeWordDisplay: string;
    matchedLetters: string[];
    unmatchedLetters: string[];

    constructor() {
        this.reset("");
    }

    private resetLetterCollections() {
        this.matchedLetters = [];
        this.unmatchedLetters = [];
    }

    private replaceLettersWithUnderscores(inputString: string): string {
        var replacementRegEx = new RegExp('/[A-Z]');
        return inputString.replace(/[a-zA-Z]+/g, "_");;
    }

    public reset(newWord: string): void {
        this.activeWord = newWord;
        this.activeWordDisplay = this.replaceLettersWithUnderscores(newWord);
        this.resetLetterCollections();
    }    

    public tryLetterForMatch(letterToTryForMatch: string): boolean {
        var lowerCaseActiveWord = this.activeWord.toLowerCase();
        var lowerCaseLetterToTryForMatch = letterToTryForMatch.toLowerCase();

        if (lowerCaseActiveWord.indexOf(lowerCaseLetterToTryForMatch) >= 0) {
            this.matchedLetters.push(lowerCaseLetterToTryForMatch);
            //TODO update active word display
            return true;
        }
        else {
            this.unmatchedLetters.push(lowerCaseLetterToTryForMatch);
            return false;
        }
    }
}
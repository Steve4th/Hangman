interface IPhraseService {
    getPhrase(): string
}

class FixedResponsePhraseService implements IPhraseService {
    public getPhrase(): string {
        return "hangman";
    }
}
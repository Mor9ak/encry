interface IndexInput {
    text: string;
    alphabet: string;
}

const IndexMech = (props: IndexInput) => {

    const text = props.text.toLowerCase();
    const alphabetString = props.alphabet.toLowerCase();
    let encryptedText = "";

    const alphabet = new Map<string, string>();

    let nullsWorker = Math.floor(alphabetString.length / 10).toString().length;

    for (let i = 0; i < alphabetString.length; i++) {
        if (i < 10 * nullsWorker) {
            alphabet.set(alphabetString[i], "0".repeat(nullsWorker) + i.toString());
        } else {
            alphabet.set(alphabetString[i], i.toString())
        }
    }
    alphabet.set(" ", alphabet.size.toString());

    for (let i = 0; i < text.length; i++) {
        if (!alphabet.has(text[i])) {
            alphabet.set(text[i], alphabet.size.toString())
        }
        encryptedText += alphabet.get(text[i]);
    }

    return encryptedText;
}

export default IndexMech;
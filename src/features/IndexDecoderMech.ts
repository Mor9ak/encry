interface IndexDecoderInput {
    text: string;
    alphabet: string;
}

const IndexDecoderMech = (props: IndexDecoderInput) => {

    const text = props.text.toLowerCase();
    const alphabetString = props.alphabet.toLowerCase();
    let encryptedText = "";
    let parts : string[] = [];

    const alphabet = new Map<string, string>();

    let nullsWorker = Math.floor(alphabetString.length / 10).toString().length;

    for (let i = 0; i < alphabetString.length; i++) {
        if (i < 10 * nullsWorker) {
            alphabet.set("0".repeat(nullsWorker) + i.toString(), alphabetString[i]);
        } else {
            alphabet.set(i.toString(), alphabetString[i]);
        }
    }
    alphabet.set(alphabet.size.toString(), " ");

    for (let i = 0; i < text.length; i += 1) {
        parts.push(text.substring(i, i + nullsWorker + 1));
        i += nullsWorker;
    }
    for (let i = 0; i < parts.length; i++) {
        if (!alphabet.has(parts[i])) {
            alphabet.set(alphabet.size.toString(), "?");
        }
        encryptedText += alphabet.get(parts[i]) === undefined ? "?" : alphabet.get(parts[i]);
    }
    return encryptedText;
}

export default IndexDecoderMech;
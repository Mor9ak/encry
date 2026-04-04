interface AtbashInput {
    text: string;
    alphabet: string;
}

const AtbashMech = (props: AtbashInput) => {

    const rawAlphabet = props.alphabet.toLowerCase();
    const text = props.text.toLowerCase();

    const alphabet = new Map<string, string>();
    let encryptedText = "";

    for (let i = 0; i < rawAlphabet.length; i++) {
        alphabet.set(rawAlphabet[i], rawAlphabet[rawAlphabet.length - 1 - i]);
    }

    for (let i = 0; i < text.length; i++) {
        if (!alphabet.has(text[i])) {
            encryptedText += text[i];
            continue;
        }
        encryptedText += alphabet.get(text[i]);
    }

    return encryptedText;
}

export default AtbashMech;
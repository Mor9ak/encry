interface CaesarInput {
    text: string;
    alphabet: string;
    step: number;
}

const CaesarMech = (props: CaesarInput) => {

    const alphabet = props.alphabet.toLowerCase();
    const step = props.step;
    const inputText = props.text.toLowerCase();

    let text: string = "";

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText.charAt(i);
        const index = alphabet.indexOf(char);

        if (index !== -1) {
            const newIndex = (index + step) % alphabet.length;
            text += alphabet[newIndex];
        } else {
            text += char;
        }
    }
    return text;
}
export default {CaesarMech};
const CaesarMech = ({ text, alphabet, key }: { text: string; alphabet: string; key: number }) => {
    if (!alphabet) {
        return text;
    }

    const normalizedAlphabet = alphabet.toLowerCase();
    const alphabetLength = normalizedAlphabet.length;
    const alphabetMap = new Map<string, number>(
        normalizedAlphabet.split('').map((char: string, index: number) => [char, index])
    );

    const normalizedKey = ((key % alphabetLength) + alphabetLength) % alphabetLength;
    const inputText = text.toLowerCase();

    let result = "";

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText.charAt(i);
        const index = alphabetMap.get(char);

        if (index !== undefined) {
            const newIndex = (index + normalizedKey) % alphabetLength;
            result += normalizedAlphabet[newIndex];
        } else {
            result += char;
        }
    }

    return result;
};

export default CaesarMech;
interface AtbashInput {
    text: string;
    alphabet: string;
}

const AtbashMech = ({ text, alphabet }: AtbashInput): string => {

    if (!alphabet) return text;

    const normalizedAlphabet = [...new Set(alphabet.toLowerCase())];

    const atbashMap = new Map(
        normalizedAlphabet.map((char, index, arr) => [
            char,
            arr[arr.length - 1 - index]
        ])
    );

    return text
        .toLowerCase()
        .split('')
        .map(char => atbashMap.get(char) ?? char)
        .join('');
};

export default AtbashMech;
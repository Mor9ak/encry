const IndexDecoderMech = ({text, alphabet}: { text: string; alphabet: string }): string => {
    if (!text) return "";

    const normalizedAlphabet = alphabet.toLowerCase();
    const nullsWorker = Math.floor(normalizedAlphabet.length / 10).toString().length;

    const alphabetMap = new Map(
        normalizedAlphabet.split('').map((char, index) => [
            index < 10 * nullsWorker
                ? "0".repeat(nullsWorker) + index
                : String(index),
            char
        ])
    );

    alphabetMap.set(String(alphabetMap.size), " ");

    const result: string[] = [];
    const textLower = text.toLowerCase();

    for (let i = 0; i < textLower.length; i += nullsWorker + 1) {
        const code = textLower.substring(i, i + nullsWorker + 1);
        result.push(alphabetMap.get(code) ?? "?");
    }

    return result.join('');
};

export default IndexDecoderMech;
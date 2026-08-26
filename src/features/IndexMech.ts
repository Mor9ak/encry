const IndexMech = ({ text, alphabet }: { text: string; alphabet: string }): string => {
    if (!text || !alphabet) return "";

    const normalizedAlphabet = alphabet.toLowerCase();
    const nullsWorker = Math.floor(normalizedAlphabet.length / 10).toString().length;

    const alphabetMap = new Map(
        normalizedAlphabet.split('').map((char, index) => [
            char,
            index < 10 * nullsWorker
                ? "0".repeat(nullsWorker) + index
                : String(index)
        ])
    );

    alphabetMap.set(" ", String(alphabetMap.size));

    const result: string[] = [];
    const textLower = text.toLowerCase();

    for (const char of textLower) {
        if (!alphabetMap.has(char)) {
            alphabetMap.set(char, String(alphabetMap.size));
        }
        result.push(alphabetMap.get(char)!);
    }

    return result.join('');
};

export default IndexMech;
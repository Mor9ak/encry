const OneTwoMech = ({ text }: { text: string }): string => {
    if (!text) return "";

    const pairs = text.match(/.{1,2}/g) || [];
    return pairs.map(pair =>
        pair.length === 2 ? pair[1] + pair[0] : pair
    ).join('');
};

export default OneTwoMech;
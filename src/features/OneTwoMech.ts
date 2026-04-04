interface OneTwoInput {
    text: string;
}

const OneTwoMech = (props: OneTwoInput) => {

    let text = props.text;
    let parts : string[] = [];
    let encryptedText = "";

    for (let i = 0; i < text.length; i++) {
        parts.push(text.substring(i, i + 2));
        i++;
    }
    for (let i = 0; i < parts.length; i++) {
        if (!parts[i][1]) {
            encryptedText += parts[i];
        } else {
            encryptedText += parts[i][1] + parts[i][0];
        }
    }
    return encryptedText;
}

export default OneTwoMech;
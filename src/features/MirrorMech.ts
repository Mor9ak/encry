interface MirrorInput {
    text: string;
}
const MirrorMech = (props : MirrorInput) => {

    const text = props.text;
    let encryptedText = "";

    if (text.length <= 0) return "Some problems";

    for (let i = text.length - 1; i >= 0; i--) {
        encryptedText += text[i];
    }

    return encryptedText;
}

export default MirrorMech;
const MirrorMech = ({ text }: { text: string }): string =>
    text ? text.split('').reverse().join('') : "";

export default MirrorMech;
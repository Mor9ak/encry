import React from 'react';

interface Props {
    label: string;
    encrypting: Function;
    alphabet?: string;
    link?: string;
    standardText?: string;
    inputPlaceholder1: string;
    inputPlaceholder2?: string;
    inputPlaceholder3?: string;
}



const Section = (props : Props) => {

    const StandardAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const StandardText = "Text";

    const [text, setText] = React.useState(props.standardText || StandardText);
    const [key, setKey] = React.useState(0);
    const [alphabet, setAlphabet] = React.useState(StandardAlphabet);

    const encrypted = React.useMemo(() => {
        return props.encrypting({text, alphabet, key});
    }, [text, alphabet, key, props.encrypting]);

    React.useEffect(() => {
        if (props.alphabet && props.alphabet.length > 0) {
            setAlphabet(props.alphabet);
        } else if (props.alphabet === undefined || props.alphabet.length <= 0) {
            setAlphabet(StandardAlphabet);
        } else setAlphabet(StandardAlphabet);

    }, [props.alphabet]);

    return (
        <div className="text-white flex flex-col w-fit h-fit rounded-lg p-5 bg-elementsBg">
            <a className={"flex items-center justify-center gap-2 text-2xl text-mainText"} target={"_blank"} href={props.link}>
                {props.label}
            </a>
            <h3 className={"text-xl text-mainText text-center"}>{encrypted}</h3>
            <div className={"*:border-2 *:p-2 *:rounded-lg *:border-borderCol *:border-collapse *:m-1 " +
                "text-secondaryText *:focus:text-mainText flex flex-col md:lg:flex-row justify-center"}>
                <input type={"text"} onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                    const value = e.target.value;
                    if (!value) {
                        setText(StandardText);
                    } else setText(value);
                }} placeholder={props.inputPlaceholder1}/>
                {props.inputPlaceholder2 && <input type={"text"} onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                    const value = e.target.value;
                    if (!value) {
                        setAlphabet(StandardAlphabet)
                    } else setAlphabet(value);
                }} placeholder={props.inputPlaceholder2}/>}
                {props.inputPlaceholder3 && <input type={"text"} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setKey(Number(e.target.value))} placeholder={props.inputPlaceholder3}/>}
            </div>
        </div>
    );
}

export default Section;
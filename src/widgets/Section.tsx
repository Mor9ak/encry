import React from 'react';

interface Props {
    label: string;
    encrypting: Function;
    alphabet?: string;
    inputPlaceholder1: string;
    inputPlaceholder2?: string;
    inputPlaceholder3?: string;
}



const Section = (props : Props) => {

    const [text, setText] = React.useState('Your text will be here');
    const [key, setKey] = React.useState(0);
    const [alphabet, setAlphabet] = React.useState(props.alphabet);

    const encrypted = props.encrypting({text, alphabet, key});

    if (text.length <= 0) setText("Your text will be here");
    if (props.alphabet !== undefined) {
        if (alphabet && alphabet.length <= 0) setAlphabet(props.alphabet);
    }

    return (
        <div className="text-white flex flex-col w-fit h-fit rounded-lg m-7 p-5 bg-[#4F772D]">
            <a className={"flex items-center justify-center gap-2 text-2xl text-[#ECF39E]"} target={"_blank"} href={"https://ru.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F"}>
                {props.label}
            </a>
            <h3 className={"text-xl text-[#ECF39E] text-center"}>{encrypted}</h3>
            <div className={"*:border-2 *:p-2 *:rounded-lg *:border-[#31572C] *:border-collapse *:m-1 " +
                "text-[#90A955] *:focus:text-[#ECF39E]"}>
                <input type={"text"} onChange={((e : React.ChangeEvent<HTMLInputElement>) => setText(e.target.value))} placeholder={props.inputPlaceholder1}/>
                {props.inputPlaceholder2 && <input type={"text"} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setAlphabet(e.target.value)} placeholder={props.inputPlaceholder2}/>}
                {props.inputPlaceholder3 && <input type={"text"} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setKey(Number(e.target.value))} placeholder={props.inputPlaceholder3}/>}
            </div>
        </div>
    );
}

export default Section;
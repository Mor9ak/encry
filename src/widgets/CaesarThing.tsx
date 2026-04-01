import React from 'react';
import CMImport from "../features/CaesarMech";

const CaesarThing = () => {

    const [text, setText] = React.useState<string>("Your text will be here");
    const [step, setStep] = React.useState<number>(0);
    const [alphabet, setAlphabet] = React.useState<string>("abcdefghijklmnopqrstuvwxyz");

    if (text.length === 0) setText("Your text will be here");
    if (alphabet.length === 0) setAlphabet("abcdefghijklmnopqrstuvwxyz");

    return (
        <div className="text-white flex flex-col w-fit h-fit rounded-lg m-7 p-5 bg-[#4F772D]">
            <h2 className={"text-2xl text-[#ECF39E] text-center"}>Caesar</h2>
            <h3 className={"text-xl text-[#ECF39E] text-center"}>{CMImport.CaesarMech({text: text, alphabet: alphabet, step: step})}</h3>
            <div className={"*:border-2 *:p-2 *:rounded-lg *:border-[#31572C] *:border-collapse *:m-1 " +
                "text-[#90A955] *:focus:text-[#ECF39E]"}>
                <input type={"text"} placeholder={"Enter text"} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}/>
                <input type={"text"} placeholder={"Enter alphabet (english rn))"} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setAlphabet(e.target.value)}/>
                <input type={"text"} placeholder={"Enter step"} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setStep(e.target.value)}/>
            </div>
        </div>
    );
}
export default CaesarThing;

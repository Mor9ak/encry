import React from 'react';

interface Props {
    label: string;
    encrypted: string;
    text: string;
    alphabet: string;
    key: number;
}

const Section = (props : Props) => {
    return (
        <div className="text-white flex flex-col w-fit h-fit rounded-lg m-7 p-5 bg-[#4F772D]">
            <h2 className={"text-2xl text-[#ECF39E] text-center"}>{props.label}</h2>
            <h3>{props.encrypted}</h3>
            <div>
                <input type={"text"}/>
                <input type={"text"}/>
                <input type={"text"}/>
            </div>
        </div>
    );
}

export default Section;
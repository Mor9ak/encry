import React from "react";
import Section from "../widgets/Section";
import CaesarMech from "../features/CaesarMech";
import MirrorMech from "../features/MirrorMech";
import IndexMech from  "../features/IndexMech";
import AtbashMech from "../features/AtbashMech";
import OneTwoMech from "../features/OneTwoMech";
import IndexDecoderMech from "../features/IndexDecoderMech";

const SectionHolder = () => {
    return (
        <div className="flex flex-wrap gapParam justify-center">
            <Section
                label={"Caesar"}
                alphabet={"abcdefghijklmnopqrstuvwxyz"}
                link = {"https://ru.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F"}
                encrypting={CaesarMech}
                inputPlaceholder1={"Enter text"}
                inputPlaceholder2={"Enter alphabet (english rn))"}
                inputPlaceholder3={"Enter step"}
            />
            <Section
                label={"Mirror"}
                encrypting={MirrorMech}
                inputPlaceholder1={"Enter text"}
            />
            <Section
                label={"Index"}
                link={"https://ru.wikipedia.org/wiki/%D0%90%D1%84%D1%84%D0%B8%D0%BD%D0%BD%D1%8B%D0%B9_%D1%88%D0%B8%D1%84%D1%80"}
                encrypting={IndexMech}
                alphabet={"abcdefghijklmnopqrstuvwxyz"}
                inputPlaceholder1={"Enter text"}
                inputPlaceholder2={"Enter alphabet (english rn))"}
            />
            <Section
                label={"Atbash"}
                link={"https://ru.wikipedia.org/wiki/%D0%90%D1%82%D0%B1%D0%B0%D1%88"}
                encrypting={AtbashMech}
                alphabet={"abcdefghijklmnopqrstuvwxyz"}
                inputPlaceholder1={"Enter text"}
                inputPlaceholder2={"Enter alphabet (english rn))"}
            />
            <Section
                label={"One to two"}
                link={"https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_%D1%88%D0%B8%D1%84%D1%80"}
                encrypting={OneTwoMech}
                inputPlaceholder1={"Enter text"}
            />
            <Section
                label={"Index decoder"}
                standardText={"19042319"}
                encrypting={IndexDecoderMech}
                inputPlaceholder1={"Enter text"}
                inputPlaceholder2={"Enter alphabet (english rn))"}
            />
        </div>
    );
}

export default SectionHolder;
import React from "react";
import Section from "../widgets/Section";
import CaesarMech from "../features/CaesarMech";
import MirrorMech from "../features/MirrorMech";
import IndexMech from  "../features/IndexMech";

const SectionHolder = () => {
    return (
        <div className="flex flex-wrap m-7 gap-7">
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
                encrypting={IndexMech}
                alphabet={"abcdefghijklmnopqrstuvwxyz"}
                inputPlaceholder1={"Enter text"}
                inputPlaceholder2={"Enter alphabet (english rn))"}
            />
        </div>
    );
}

export default SectionHolder;
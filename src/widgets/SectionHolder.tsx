import React from "react";
import Section from "../widgets/Section";
import CMImport from "../features/CaesarMech"
import MImport from "../features/MirrorMech"

const SectionHolder = () => {
    return (
        <div className="flex flex-row">
            <Section
                label={"Caesar"}
                alphabet={"abcdefghijklmnopqrstuvwxyz"}
                encrypting={CMImport.CaesarMech}
                inputPlaceholder1={"Enter text"}
                inputPlaceholder2={"Enter alphabet (english rn))"}
                inputPlaceholder3={"Enter step"}
            />
            <Section
                label={"Mirror"}
                encrypting={MImport.MirrorMech}
                inputPlaceholder1={"Enter text"} alphabet={""} inputPlaceholder2={""}
            />
        </div>
    );
}

export default SectionHolder;
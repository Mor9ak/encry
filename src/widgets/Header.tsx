import React from 'react';
import {ThemeChanger} from "../features/theme/themeChanger";

const Header = () => {
    return (
        <header className="relative bg-elementsBg py-3 rounded-lg mt-7 uniWidth">
            <div className="absolute top-3 right-3">
                <ThemeChanger/>
            </div>

            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl text-center text-mainText">Encry</h1>
                <p className="text-center text-xl text-secondaryText mt-2">
                    Ciphers playgrounds by Mor9ak (Kazakou Yaroslau)
                </p>
            </div>
        </header>
    );
};

Header.displayName = 'Header';

export default Header;
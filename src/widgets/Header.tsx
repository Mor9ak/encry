import React from 'react';

const Header = () => {
    return (
        <header className={"bg-elementsBg justify-center w-95% px-7 py-3 rounded-lg mx-7"}>
            <h1 className={"text-4xl text-center justify-center items-center text-mainText"}><a href={"/"}>Encry</a></h1>
            <p className={"text-center text-xl text-secondaryText mt-2"}>Ciphers playgrounds by Mor9ak (Kazakou Yaroslau)</p>
        </header>
    )
}

export default Header;
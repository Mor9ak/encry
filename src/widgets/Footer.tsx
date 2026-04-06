import React from 'react';

const Footer = () => {
    return (
        <footer className={"bg-elementsBg justify-center p-7 rounded-lg items-center text-xl text-center m-7"}>
            <h1 className={"text-2xl text-mainText text-center"}>About this all</h1>
            <p className={"text-secondaryText"}>Encry - one of my portfolio project. Here i used React, Tailwind CSS, and Vite.</p>
            <div className="flex *:shadow-xl/30 justify-center *:mx-7 *:text-mainText *:p-3 *:rounded-lg *:cursor-pointer *:my-3 *:border-2 *:border-borderCol">
                <a href={"https://github.com/Mor9ak"} target={"_blank"}>My Github</a>
                <a href={"https://t.me/mor9ak"} target={"_blank"}>My telegram</a>
            </div>
        </footer>
    )
}

export default Footer;
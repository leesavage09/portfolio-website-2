import React from "react"
import { Link } from 'react-router-dom';

export default function Home(props) {

    return (
        <div className="card">
            <div>
                <h2>Welcome</h2>
                <p>Welcome to my portfolio website, My name is Lee, and I am a full stack developer specialising in front end development.
                User experence is very important to me, both useability and readability of the code I write and traditional UX practices.
            </p>
                <p>I created this React website from scratch to better understand the  Bable, Webpack toolchain.  You can view the <a href='https://github.com/leesavage09/portfolio-website-2'>source here</a></p>
            </div>
        </div >
    )
}
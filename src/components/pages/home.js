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

                <div id='projects'>
                    <h2>Projects</h2>

                    <p>These are some of my projects. notinstagram is the most recent and largest project. </p>
                    <div className='projectsGrid'>
                        <Link to="/notinstagram">
                            <h2>notinstagram</h2>
                            <img className='screenshot' src='./screenshots/notinstagram.png' />
                        </Link>
                        <Link to="/fractic">
                            <h2>Fractal Explorer</h2>
                            <img className='screenshot' src='./screenshots/fractic.png' />
                        </Link>
                        <Link to="/trees">
                            <h2>Procedural Trees</h2>
                            <img className='screenshot' src='./screenshots/trees.png' />
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
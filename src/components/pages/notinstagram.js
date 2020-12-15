import React from "react";
import { PrimaryAction, GhostAction } from '../buttons'
import style from '../../scss/project.module'

export default function Notinstagram(props) {

    return (
        <div className={style.projectCard}>

            <div className={style.scroll}>

                <p> 
                    I created notinstagram to show I can develop a full stack project to specification.
            </p>
                <p>
                    notinstagram is a clone of the Instagram website, The UI is a pixel perfect replication written in SCSS React and Redux.
            </p>
                <p>
                    A front-end custom image processing library directly sends images to pre-signed URLs on the AWS server. This results in very low server cost and high performance.
            </p>
                <p>
                    The back end is Ruby on Rails, running on a free Heroku dyno. The PostgreSQL behind the rails REST API is highly optimized for N+1 queries.
            </p>
                <p>
                    For a more detailed technical explanation with code snippets and pictures see the readme.md on Github
            </p>
                <p className="textcenter">

                    <GhostAction href='https://github.com/leesavage09/notinstagram/blob/master/README.md'>README.md and Source</GhostAction>
                    <PrimaryAction href="http://notinstagram.leesavage.co.uk">Visit notinstagram</PrimaryAction><br />
                    <span className="smallPrint">Please allow time to load as the Heroku dyno will be sleeping</span>
                </p>
            </div>
            <div>
                <img className={style.screenshot} src='./screenshots/notinstagram.png' />
            </div>
        </div>
    )
}
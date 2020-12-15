import React from "react";
import { PrimaryAction, GhostAction, FracticGooglePlayBadge, CloseButton } from '../buttons'
import style from '../../scss/project.module'

export default function Fractic(props) {

    return (
        <div className={style.projectCard}>
            <CloseButton to="/projects" className={style.close} />

            <div className={style.scroll}>
                <h2>Fractic</h2>

                <p>
                    I created this fractal explorer to better understand Progressive Web Apps. Written in Typescript and developed using Angular, Ionic and Cordova.
                </p>
                <p>
                    A lot of time was spent ensuring cross-browser compatibility as well as consistent behaviour on various versions of the android SKD, Mac support was a challenge as at the time Apple was not supporting Progressive Web apps.
                </p>
                <p>
                    This project was highly algorithmic in nature and 2 versions of a custom renderer were developed one in a javascript canvas and a FragmentShader for rendering in WebGL where higher performance was available. This is dynamically detected and switched automatically.
                    There area multiple optimisations that keep the frame rate high such as dynamic resolution changes and multi-pass rendering.
                </p>
                <p>
                    An older project that shows my experience with PWA and algorithms but lacks the superior code organisation of my more recent projects.
            </p>
                <p className="textcenter">
                    <GhostAction href='https://github.com/leesavage09/Ionic-Fractal-Explorer'>Source Code</GhostAction>
                    <PrimaryAction href="http://fractic.leesavage.co.uk">Visit Webapp</PrimaryAction>
                </p>
                <p className='textcenter'>
                    <FracticGooglePlayBadge />
                </p>
            </div>
            <div>
                <img className={style.screenshot} src='./screenshots/fractic.png' />
            </div>
        </div>
    )
}
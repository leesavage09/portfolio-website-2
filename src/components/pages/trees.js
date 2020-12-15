import React from "react";
import { PrimaryAction, GhostAction, CloseButton } from '../buttons'
import style from '../../scss/project.module'

export default function Fractic(props) {

    return (
        <div className={style.projectCard}>
            <CloseButton to="/projects" className={style.close} />

            <div className={style.scroll}>

                <div>
                    <h2>Trees</h2>

                    <p>
                        TODO
              </p>
                    <p className="textcenter">
                        <GhostAction href='https://github.com/leesavage09/FractalTrees'>Source Code</GhostAction>
                        <PrimaryAction href="http://trees.leesavage.co.uk">Visit Webapp</PrimaryAction>
                    </p>
                </div>
            </div>
            <div>
                <img className={style.screenshot} src='./screenshots/fractic.png' />
            </div>
        </div>
    )
}
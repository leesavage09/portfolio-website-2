import React from "react";
import { PrimaryAction, GhostAction } from '../buttons'

export default function Fractic(props) {

    return (
        <div className="card">

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
            <div>
                <img className='screenshot' src='./screenshots/fractic.png' />
            </div>
        </div>
    )
}
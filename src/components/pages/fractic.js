import React from "react";
import { PrimaryAction, GhostAction } from '../buttons'

export default function Fractic(props) {

    return (
        <div className="card">

            <div>
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
                    <a className='googleplay' href='https://play.google.com/store/apps/details?id=uk.co.leesavage.fractic&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_gb/badges/static/images/badges/en_badge_web_generic.png' /></a>
                </p>
            </div>
            <div>
                <img className='screenshot' src='./screenshots/fractic.png' />
            </div>
        </div>
    )
}
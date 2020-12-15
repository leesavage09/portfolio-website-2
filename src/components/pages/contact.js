import React from "react";
import { EmailMe, GitHub, LinkedIn } from '../buttons'
import style from '../../scss/contact.module'

export default function Contact(props) {

    return (
        <div className={style.contactCard}>
            <h2>Contact Me</h2>
            <div className={style.contactButtons}><EmailMe />
            <LinkedIn />
            <GitHub />
            </div>
        </div>
    )
}
import React from "react";
import Styles from '../scss/topNav.module'
import { PrimaryAction } from './buttons'
import {Link} from 'react-router-dom';

export default function TopNav(props) {

    return (
        <div className={Styles.topnav}>
            <Link to="/"><h1>Lee Savage</h1></Link>
            <ul>
                <PrimaryAction to="/contact">Contact</PrimaryAction>
            </ul>
        </div>
    )
}
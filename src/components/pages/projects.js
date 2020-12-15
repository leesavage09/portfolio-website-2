import React from "react"
import { Link } from 'react-router-dom';
import style from '../../scss/projects.module'

export default function Home(props) {

    return (
        <div className="card">
            <h2>Projects</h2>
            <div className={style.projectsGrid}>
                <div className={style.screenshot}>
                    <Link to="/notinstagram">
                        <img src='./screenshots/notinstagram.png' />
                    </Link>
                </div >
                <div className={style.screenshot}>
                    <Link to="/fractic">
                        <img src='./screenshots/fractic.png' />
                    </Link>
                </div>
                <div className={style.screenshot}>
                    <Link to="/trees">
                        <img src='./screenshots/trees.png' />
                    </Link>
                </div>

            </div>
        </div>
    )
}

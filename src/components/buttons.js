import React from "react";
import btnStyle from '../scss/buttons.module'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export function PrimaryAction(props) {
    if (props.href) {
        return <a href={props.href} className={btnStyle.cta}>{props.children}</a>
    }
    else if (props.to) {
        return <Link to={props.to} className={btnStyle.cta}>{props.children}</Link>
    }
}
export function GhostAction(props) {
    if (props.href) {
        return <a href={props.href} className={btnStyle.ghost}>{props.children}</a>
    }
    else if (props.to) {
        return <Link to={props.to} className={btnStyle.ghost}>{props.children}</Link>
    }
}

export function FracticGooglePlayBadge(props) {
    return (
        <a className={btnStyle.googlePlay} href='https://play.google.com/store/apps/details?id=uk.co.leesavage.fractic&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_gb/badges/static/images/badges/en_badge_web_generic.png' /></a>
    )
}

export function CloseButton(props) {
    return (
        <Link to={props.to}>
            <FontAwesomeIcon className={props.className + " " + btnStyle.close} icon={faTimesCircle} />
        </Link>
    )
}

export function EmailMe(props) {
    return (
        <a href="mailto:leesavage09@gmail.com" >
            <FontAwesomeIcon className={btnStyle.contact} icon={faEnvelopeSquare} />
        </a>
    )
}

export function GitHub(props) {
    return (
        <a href="https://github.com/leesavage09/" >
            <FontAwesomeIcon className={btnStyle.contact} icon={faGithubSquare} />
        </a>
    )
}

export function LinkedIn(props) {
    return (
        <a href="https://linkedin.com/in/leesavage09" >
            <FontAwesomeIcon className={btnStyle.contact} icon={faLinkedin} />
        </a>
    )
}
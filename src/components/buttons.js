import React, { Component, useState } from "react";
import btnStyle from '../scss/buttons.module'
import { Link } from 'react-router-dom';

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
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
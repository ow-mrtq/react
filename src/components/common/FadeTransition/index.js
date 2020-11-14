import React from 'react';
import {CSSTransition} from "react-transition-group";
import './index.css';
function FadeTransition(props) {
    function addTransition(node) {
        node.style.transition = `opacity ${props.timeout}ms`;
    }
    function removeTransition(node) {
        node.style.transition = '';
    }
    return (
        <CSSTransition {...props} classNames="fade" onEnter={addTransition} onEntered={(node,isAppear)=>{
            removeTransition(node);
            props.onEntered && props.onEntered(node,isAppear);
        }} onExit={addTransition} onExited={(node,isAppear)=>{
            removeTransition(node);
            props.onExited && props.onExited(node,isAppear);
        }}/>
    );
}

export default FadeTransition;
import Props from "../props";
import React from "react";

function StatusIcon(props: Props) {
    return(
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
        <circle cx="8" cy="8" r="7.5" stroke="currentColor"/>
        <circle cx="8" cy="8" r="5.5" fill="currentColor" stroke="currentColor"/>
        </svg>

    )
}

export default StatusIcon;
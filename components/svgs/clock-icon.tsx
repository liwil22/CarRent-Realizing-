import Props from "../props";
import React from "react";

function ClockIcon(props: Props){
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#656575" strokeWidth="2" stroke-miterlimit="10"/>
<path d="M12 6.75V12H17.25" stroke="#656575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


    )
}

export default ClockIcon;
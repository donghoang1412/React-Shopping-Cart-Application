import React from "react";

let Footer = (props)=>{
    
    return(
        <div className="footer">
        © Copyright 2021 All rights reserved. &nbsp;|&nbsp; <a href="https://www.synergisticit.com/" target="_blank">SynergisticIT</a> &nbsp;|&nbsp; <a href="http://www.synergisticit.com/sitemap.xml" target="_blank">Sitemap</a>
        {/* {`This is footer component. Received address through props is ${props.address} and Name is ${props.name}
        ${props.user.name}
        ${props.user.pwd}
        `}
        {props.children[0]}
        {props.children[1]} */}
</div>
    )
}

export default Footer;
import React from 'react';
import './footer.css'; 

function Footer () {
    return (
    <div>
        <a href="https://github.com/KV647">
        <img className='footer' src="./public/github-mark.png"></img>
        </a>
        <a href="https://stackoverflow.com/users/22803815/kv647">
        <img className='footer2' src="./public/stack.png"></img>
        </a>
        <a href="https://www.linkedin.com/in/keller-vicino-8a17ba22a/">
        <img className='footer3' src="./public/LI-In-Bug.png"></img>
        </a>
    </div>
    )
};

export default Footer;
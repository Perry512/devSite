import React from "react";

import {computePosition} from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.5/+esm';

function Test() {
    //const navbar = 'navbar';
    const testStyle = {
        background: "#777777",
        color: "white",
        padding: "20px",
        width: "max-content",
        position: "absolute",
        top: "0",
        left: "0"

    }

    const button = document.querySelector('#button');
    const tooltip = document.querySelector('#tooltip');

    computePosition(button, tooltip).then(({x,y}) => {
        Object.assign(tooltip.style, {
            left: `${x}px`,
            top: `${y}px`,

        });
    });

    return (
        <html>
            <head> <title> Floating UI </title> </head>
            
            <body style={testStyle}>
                <button id="button" aria-describedby="tooltip">
                    My Button
                </button>
                <div id="tooltip" role="tooltip"> My Tooltip </div>

                <script type="module">

                    
                </script>
            </body>
        </html>
    )
}

export default Test;
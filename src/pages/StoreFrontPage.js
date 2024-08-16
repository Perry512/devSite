import React from "react";
import {Link} from "react-router-dom";

const StoreFrontContent = () => {

    return (
        <div> Hello World! 
        <nav> <Link to="/">To Main</Link></nav>
        </div>
    );

}

export default function StoreFrontPage() {

    return (
        <div>
            <StoreFrontContent />
        </div>
    )
}
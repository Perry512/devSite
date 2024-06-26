import React from "react";

const Footer = (props) => {
    const customFooterStyle = {
        zIndex: "10",
    };

    return (
        <div
            className="m-auto d-flex align-item-center justify-content-center "
            style={customFooterStyle}
        >
            <UtilityComponent tag={props.utilityTags}/>
            <footer className="shadow-lg d-flex align-items-center justify-content-center footer-nav-container">
                <FooterNav onClick={props.onClick}/>
            </footer>
        </div>

    );
    
};

export default Footer;
import React from 'react';
import './footer.css';
const amazonLogo = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContent">
                <div className="footerCont1">
                    <div className="contentFooterTitle">Get To Know Us</div>


                </div>
                <div className="footerCont1">
                    <div className="contentFooterTitle">Connect With Us</div>
                    <div className="contentFooterSubTitlediv">
                        <div className="contentFooterSubTitleCont">Instagram</div>
                        <div className="contentFooterSubTitleCont">Twitter</div>
                        <div className="contentFooterSubTitleCont">Facebook</div>
                    </div>
                </div>

                <div className="footerCont1">
                    <div className="contentFooterTitle">Make Money With US</div>

                </div>

                <div className="footerCont1">
                    <div className="contentFooterTitle">Lets Us Help You</div>

                </div>
            </div>
            <div className="amazonImg">
                <img className='amazonImgFooter' src='https://missouripartnership.com/wp-content/uploads/2025/04/amazon-logo-squid-ink-smile-orange.png' />
            </div>
        </div>
    )
}

export default Footer
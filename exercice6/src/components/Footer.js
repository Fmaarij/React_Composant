import React from 'react';
import './footer.css';
class Footer extends React.Component {
    render() {
        return(
            
            <footer className="bg-light text-center text-lg-start">
            <div className="text-center p-3" >
                 © 2020 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
  
            </footer>
        );
    }
}
export default Footer;
import React from 'react';
import './header.css';
class Header extends React.Component {
    homePage=()=>{
        console.log("Home page");
    }
    galleryPage=()=>{
        console.log("gallery page");
    }
    contactPage=()=>{
        console.log("contact page");
    }
    render() {
        return(
            <nav>
                <ul>
                    <li onClick={this.homePage}><a>HOME</a></li>
                    <li onClick={this.galleryPage}><a>GALLERY</a></li>
                    <li onClick={this.contactPage}><a>CONTACT</a></li>
                </ul>
            </nav>
        );
    }
}
export default Header;
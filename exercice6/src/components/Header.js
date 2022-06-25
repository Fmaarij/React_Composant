import React from 'react';

class Header extends React.Component {
    render() {
        return(
            <nav>
                <ul>
                    <li><a>HOME</a></li>
                    <li><a>GALLERY</a></li>
                    <li><a>CONTACT</a></li>
                </ul>
            </nav>
        );
    }
}
export default Header;
import React from 'react';
import './navigation.css';

class Navigation extends React.Component { 
    navigation = () => {
        console.log('Il y a eu un clique');
    };
    render() {
        return(
            <nav>
                <button onClick={this.navigation}>Accueil</button>
                <button>Gallery</button>
                <button>Contact</button>
            </nav>
        );
    }
}
export default Navigation;
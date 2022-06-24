import React from 'react';
import './navigation.css';

class Navigation extends React.Component { 
    navigation = (destination) => { 
        console.log('navigation vers '+destination);
    };
    render() {
        return(
            <nav>
                
                <button onClick={() => this.navigation('accueil')} >Accueil</button>
                <button onClick={()=>this.navigation('gallery')} >gallery</button>

                <button onClick={()=>this.navigation('contact')}>Contact</button>

            
            </nav>
        );
    }
}
export default Navigation;
import React from 'react';
import DemoComponent from '../DemoComponent';
import DisplayTime from './DisplayTime';
import Navigation from './navigation'

class Header extends React.Component {  
    currentPage = "heure";

    render() {
        //first methode avec if
        // let pageContent;
        // if(this.currentPage =="accueil"){
        //     pageContent=<DemoComponent />;
        // }else{
        //     pageContent= <DisplayTime />;
        // }
        
        // return (
        //     <header className='App-header'>
        //         < Navigation />
        //         {this.currentPage}
        //         {pageContent}
              
        //     </header>
        // );

        //second methode =  La condition à la volée
        return (
            <header className='App-header'>
                <Navigation />
                {this.currentPage}
                { this.currentPage == "accueil" && <DemoComponent />}
                { this.currentPage == "heure" && <DisplayTime />}
            </header>
        )

    }
}
export default Header;
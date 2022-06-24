import React from 'react';
import Article from './Article';
import './body.css';
class Body extends React.Component {   
    render() {
        return(
            <div className="containerBody">
                <Article />
            </div>
        );
    }
}
export default Body;
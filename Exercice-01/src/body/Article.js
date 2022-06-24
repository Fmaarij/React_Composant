import React from 'react';
import './article.css';
import tartine from '../img/tartine.png';
class Article extends React.Component {
    render() {
        // let imgLigne1=src="./img/tartine.png";
        return (
            <div className="les-Article">
                {/* //ligne1 */}
            <div className="ligne1">
                <div className='img1'>
                <img src={tartine} alt="tartine"></img>
                </div>
                <div className="text-ligne1">
                    <p><span>Titre principle<br></br></span>
                    <span>Mon premier article<br></br></span>
                    Lorem bla bla Lorem
                    Lorem bla bla Lorem 
                    Lorem bla bla Lorem 
                    Lorem bla bla Lorem  bla bla lorem Lorem bla bla lorem Lorem bla bla lorem Lorem bla bla lorem Lorem bla bla Lorem bla bla Lorem bla</p>
                </div>
            </div>

             {/* //ligne2 */}
             <div className="ligne1">
                <div className='img1'>
                <img src={tartine} alt="tartine"></img>
                </div>
                <div className="text-ligne1">
                    <p><span>Titre principle<br></br></span>
                    <span>Mon premier article<br></br></span>
                    Lorem bla bla Lorem
                    Lorem bla bla Lorem 
                    Lorem bla bla Lorem 
                    Lorem bla bla Lorem  bla bla lorem Lorem bla bla lorem Lorem bla bla lorem Lorem bla bla lorem Lorem bla bla Lorem bla bla Lorem bla</p>
                </div>
            </div>
            </div>
        );
    }
}
export default Article;
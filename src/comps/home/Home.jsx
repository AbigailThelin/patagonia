import React, {Component} from 'react';

import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';


class Home extends Component{

    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return(
            <div className='home'>
                <NavBar />
                <Footer />
            </div>
        )
    }
}

export default Home;
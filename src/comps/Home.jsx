import React, {Component} from 'react';

import NavBar from './NavBar';


class Home extends Component{

    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return(
            <div>
                <NavBar />
                this is the home page
            </div>
        )
    }
}

export default Home;
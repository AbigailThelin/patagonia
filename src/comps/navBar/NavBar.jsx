import React, {Component} from 'react';

class NavBar extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div className='navBar'>
                <div className='shop'>
                    shop
                </div>
                <div className='search'>
                    <input />
                </div>
                <div className='navIcons'>

                </div>
            </div>
        )
    }
}

export default NavBar;
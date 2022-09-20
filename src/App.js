import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = {
            products : []
        }
    }
    render(){
        return(
            <div>
                <h1>
                    Hello World
                </h1>
            </div>
        )
    }
}

export default App;
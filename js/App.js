import React, {Component} from 'react';

import Destination from'./destination';
import Form from './form'; 
import Button from './button'


class App extends Component{
    render(){

         return(
            <section className='booking'>
            <h1>Aka Tag</h1>
            <Destination from= 'Stockholm' to ='Goteborg'/>
            <Form />
            <Button />
                    </section>
        )

    }
}
export default App
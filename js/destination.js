import React from 'react'; 


function Destination(props){
    return(
        <div className='col-2'>
            <h2>{props.from}</h2>
            <h2>{props.to}</h2>
        </div>
    )
}

export default Destination; 
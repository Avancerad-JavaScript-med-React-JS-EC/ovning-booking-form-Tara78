import React from 'react'; 

function Form(){
    return(
        <form>
           <lable className='col-1'>
                <input type='radio' name= 'klass' />2:a klass
                </lable>
                <lable className='col-1'>
                <input type='radio' name= 'klass' />1:a klass
                </lable>
                   <label className= 'col-1'>Antal biljtter</label>
                   <label className= 'col-1'>Title</label>  
 <select class='col-1'>
    <option value ='1'>1</option>
    <option value ='2'>2</option>
    <option value ='3'>3</option>
    <option value ='4'>4</option>
    <option value ='5'>5</option>
</select>
<select class='col-1'>
    <option value ='mr'>Mr.</option>
    <option value ='mrs'>Mrs.</option>
    <option value ='ms'>Ms.</option>
    <option value ='dr'>Dr.</option>
</select>

<label className='col-2'>Namn </label>
<input type='text' className='col-2' />

<label className='col-2'> E-post </label>
    <input type='text' className='col-2' />
    <label className='col-2'>
        <input type= 'checkbox' />
        Godkanner 
    </label>
         


    </form>
    )
}

export default Form; 
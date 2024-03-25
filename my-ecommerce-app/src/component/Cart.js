import React, {useState} from 'react';

const Cart = (props) =>{
    const [total, setTotal] = useState(props.name);
    // const [temp, setTemp] = useState(total[0]);
    function handleIncrement(){
        var place = total
        setTotal(total) 
    }
    function checkProduct(){
        // setTemp(total[2]);
    }
    return(
        <div>
        <p>{total}</p>
        <button onClick={handleIncrement}>test</button>
        {/* <p>{temp}</p> */}
        <button onClick={checkProduct}>check</button>
        </div>
    )
}

export default Cart;
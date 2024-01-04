// import React from 'react'
// import { useState } from 'react';


// function Counter() {

//     const [change,setChange]=useState(0)

//     function increment(){
//     setChange(change + 1)
//     }
    
//     function decrement(){
//       setChange(change - 1)
//     }
//     function reset(){
//       setChange(0)
//     }








import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyAmount, reset } from '../Redux/counterSlice'

function Counter() {

const dispatch=useDispatch()
const count=useSelector((state)=>state.counterSlice.count)
const [amount,setAmount] = useState(0)
const handleIncrement=()=>{
  if(amount>0){
      dispatch(incrementbyAmount(+amount))
      setAmount("")
  }
  else{
    alert("Please Enter A Valid Amount")
  }
}

    return (
      <div>
          <div className="container mt-5 " style={{height:'300px', width:'400px',border:'2px white solid'}}>
                <h1 className="mt-5 container w-25">{count}</h1>
        <div className="mt-5 ">
          <button onClick={()=>dispatch(decrement())} className="mx-3 bg-white text-black">Decrement</button>
          <button onClick={()=>dispatch(reset())} className="mx-3 bg-white text-black">Reset</button>
          <button onClick={()=>dispatch(increment())} className="mx-3 bg-white text-black">Increment</button>
        </div>
    
    <div className='d-flex justify-content-between mt-5 w-100'>
      <input onChange={e=>setAmount(e.target.value)} value={amount||""} type="text" className='form-control' placeholder='Enter the amount to be Incremented!!' />
      <button onClick={handleIncrement} className='btn btn-primary ms-3'>Incremented by Amount</button>
    </div>
           
          </div>
  
  
      </div>
    )
  }
  
  export default Counter
import React from 'react'

const PaymentFilter = ({paymentMethods,updatepayment,currentfilterby}) => {
  return (
    <div className="container restaurants">
    <h1>Cash Methods</h1>
    <div className="restaurant-options">
        {Object.entries(paymentMethods).map(([key,value])=>(
                <div key={key} className="restaurant-option" onClick={()=>{updatepayment(key)}}>
                {value}
                </div>
       ))}
    </div>
</div>
  )
}

export default PaymentFilter

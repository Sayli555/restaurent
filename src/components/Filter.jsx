import React from 'react'

const Filter = ({updatefilter,currentfilterby,filter}) => {
  return (
    <div className="container restaurants">
    <h1>50 restaurants</h1>
    <div className="restaurant-options">
        {Object.entries(filter).map(([key,value])=>(
                <div key={key} className="restaurant-option" onClick={()=>{updatefilter(key)}}>
                {value}
                </div>
       ))}
    </div>
</div>
  )
}

export default Filter

import React from 'react'

export default function ({id,title,type,name,value,handleChange,errors}) {
  return (
    <div className="mb-3">
        <label htmlFor={id} className='form-label'>{title}</label>
        <input type={type} name={name} id={id} value={value}className='form-control' onChange={handleChange} />
        {errors[name] &&<p className='text-danger'>{errors[name]} </p> }
    </div>
  )
}

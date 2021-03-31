import React, {useState} from 'react'
import {messageItem} from '../types/index'

const Form:React.FC = () => {
    const [message,setMessage] = useState('')
    const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setMessage(event.target.value)
    }
    const handleSubmit = (event:React.FormEvent) => {
        setMessage("")
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Body:</label>
            <textarea value={message} onChange={handleChange}/>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form
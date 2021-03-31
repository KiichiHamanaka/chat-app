import React, {ChangeEvent, useState} from 'react'
import {messageItem} from '../types/index'
import {useRegisterData} from "../firebase/firebaseDB";

const Form:React.FC = () => {
    const [message,setMessage] = useState('')
    const [name, setName] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const registerData = useRegisterData();

    return(
        <div>
            <label>Name: <input onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}/></label>
            <label>Body: <input onChange={(event: ChangeEvent<HTMLInputElement>) => setBody(event.target.value)}/></label>
            <button onClick={() => registerData(
                {
                                name : name,
                                body : body,
                                createdAt : Date.now()
                            }
                )}>Submit</button>
        </div>
    )
}

export default Form
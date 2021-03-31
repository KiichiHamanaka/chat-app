import React, {ChangeEvent, useState} from 'react'
import {messageItem} from '../types/index'
import {useRegisterData} from "../firebase/firebaseDB";

const Form:React.FC = () => {
    const [message,setMessage] = useState('')
    const [keyData, setKeyData] = useState<string>('');
    const [valueData, setValueData] = useState<string>('');
    const registerData = useRegisterData();

    return(
        <div>
            <label>Name: <input placeholder="key" onChange={(event: ChangeEvent<HTMLInputElement>) => setKeyData(event.target.value)}/></label>
            <label>Body: <input placeholder="value" onChange={(event: ChangeEvent<HTMLInputElement>) => setValueData(event.target.value)}/></label>
            <button onClick={() => registerData({[keyData]: valueData})}>Submit</button>
        </div>
    )
}

export default Form
import React, {useState} from 'react'
import {messageItem} from '../types/index'
interface Props {
    message:messageItem
}

const Message:React.FC<Props> = ({message}) => {
    return(
        <li>
        </li>
    )
}

export default Message
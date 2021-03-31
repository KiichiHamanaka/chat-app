import React, {useMemo, useState} from 'react'
import { useFetchAllData } from '../firebase/firebaseDB';

const Message:React.FC = () => {
    const data = useFetchAllData();
    const dataList = useMemo(() => Object.entries(data).map(([key, value]) => ({ value })), [data]);
    console.log(dataList)
    return(
        <ul>
        </ul>
    )
}

export default Message
import React, {useMemo, useState} from 'react'
import { useFetchAllData } from '../firebase/firebaseDB';

const Message:React.FC = () => {
    const data = useFetchAllData();
    const dataList = useMemo(() => Object.entries(data || {}).map(([key, value]) => ({ key, value })), [data]);

    return(
        <ul>
            {dataList.map((text) => (
                <li>{text}</li>
            ))}
        </ul>
    )
}

export default Message
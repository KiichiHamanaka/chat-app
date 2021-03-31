import {useEffect, useMemo, useState} from 'react'
import { firebase } from './firebase'

const useDatabase = () => {
    return useMemo(() => firebase.database().ref(`/bbs/`), [])
}

const useFetchData = (ref:firebase.database.Reference) => {
    const [data, setData] = useState();
    useEffect(() => {
        ref.on('value', snapshot => setData(snapshot.val()))
    }, [ref]);
    return data
}

export const useFetchAllData = () => useFetchData(useDatabase())

import {useCallback, useEffect, useMemo, useState} from 'react'
import { firebase } from './firebase'

const useDatabase = () => {
    return useMemo(() => firebase.database().ref(`/bbs/`), [])
}

const useFetchData = (ref:firebase.database.Reference) => {
    const [data, setData] = useState<any>();
    useEffect(() => {
        ref.on('value', snapshot => setData(snapshot.val()))
    }, [ref]);
    return {data}
}

export const useFetchAllData = () => useFetchData(useDatabase())

const useSetDocument = (ref: firebase.database.Reference) => {
    const updateDocument = useCallback(
        (document: unknown) => {
            ref.set(document);
        }, [ref]
    );
    return updateDocument;
};

export const useRegisterData = () => {
    const setDocument = useSetDocument(firebase.database().ref(`/bbs/` + Date()));
    const {data: registeredData} = useFetchAllData();
    const registerData = useCallback((registerData: {
        name : string,
        body : string,
        createdAt : number
    }) => {
        setDocument({...registerData});
    }, [setDocument, registeredData]);

    return registerData;
};
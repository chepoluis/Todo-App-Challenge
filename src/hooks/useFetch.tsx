import { useEffect, useRef, useState } from "react";

interface TodoItem {
    description: string,
    dueDate: string,
    id: string,
    isCompleted: boolean
}

interface state {
    [index: number]: {
        description: string,
        dueDate: string,
        id: string,
        isCompleted: boolean
    };
    loading: boolean,
}

export const useFetch = ( url: string, method: string ) => {
    const isMounted = useRef(true);
    const [state, setState] = useState<any>({
        data: null,
        loading: true,
        // error: null
    })

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        setState({
            data: null,
            loading: true,
            // error: null
        })

        fetch( url, { // ! Crear un folder helper y crear un metodo para esto
            method,
            headers: { // Put the key in an environment file
                'X-Api-Key': 'PMAK-5ef63db179d23c004de50751-10300736bc550d2a891dc4355aab8d7a5c'
            }
        })
            .then( resp => resp.json() )
            .then( data => {
                if (isMounted.current) {
                    setState({
                        data,
                        loading: false,
                        // error: null
                    })
                }
            })
    }, [method, url])

    return state;
};

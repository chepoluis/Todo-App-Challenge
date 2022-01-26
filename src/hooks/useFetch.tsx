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
        const api_key: any = process.env.REACT_APP_KEY_TODO; // Revisar tipado
        setState({
            data: null,
            loading: true,
            // error: null
        })

        fetch( url, { // ! Crear un folder helper y crear un metodo para esto
            method,
            headers: { // Put the key in an environment file
                'X-Api-Key': api_key
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

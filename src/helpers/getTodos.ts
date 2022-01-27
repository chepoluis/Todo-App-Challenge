export const getTodos = async ( method: string, id?: string ) => {
    console.log(id)
    const api_key: any = process.env.REACT_APP_KEY_TODO;
    const URL = `https://944ba3c5-94c3-4369-a9e6-a509d65912e2.mock.pstmn.io/${method.toLocaleLowerCase()}/${!!id ? id : ''}`;

    const resp = await fetch( URL, { // ! Crear un folder helper y crear un metodo para esto
        method,
        headers: { // Put the key in an environment file
            'X-Api-Key': api_key
        }
    });

    return await resp.json();
}
import axios from 'axios';
import { useState, useEffect } from 'react';

export function Test(props) {

    const [data, setData] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3000/').then((fetchedData) => {
            console.log(fetchedData.data);
            setData(fetchedData.data)
        })
    }, [])

    if (data) {
        return (
            <pre>
                {JSON.stringify(data)}
            </pre>
        )
    } else {
        return (
            <p>Fetch data Error</p>
        )
    }
}
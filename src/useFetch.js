import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abort = new AbortController();
        
        setTimeout(() => {  
            fetch(url, {signal: abort.signal}).then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch data');
                }
                return res.json();
            }).then(data => {
                setData(data)
                setIsPending(false);
                setError(null);
            }).catch((error) => {
                if(error.name === 'AbortError') {
                    console.log('load aborted')
                } else {
                    setIsPending(false);
                    setError(error.message);
                }
            })
        }, 1000);
        return () => { abort.abort() }
    }, []);

    return {data, isPending, error}
}

export default useFetch;
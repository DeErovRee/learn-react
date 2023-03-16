import React, { useEffect, useState } from "react"

const API = 'https://api.tronalddump.io'

export const ApiTronaldDump = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        reload()
    },[])

    const reload = async () => {
        setLoading(true);
        setError('');
        setData('');

        await new Promise((resolve) => setTimeout(resolve, 1000));

        try {
            const res = await fetch(`${API}/random/quote`);
            const data = await res.json();
            setData(data.value);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('error');
            }
        } finally {
            setLoading(false);
        }
    }

    return (
    <div className="App">
        <div className="quoteBlock">
            {loading ? <h1>Tronald Dump thinks</h1> : <h1>Tronald Dump says:</h1>}
            
            {error ? <h2 style={{ color: 'red'}}>{error}</h2> : <span className="quote"><h2>{data}</h2></span>}
            <button onClick={reload} style={{ padding: '10px 15px' }}>TRY AGAIN</button>
        </div>
    </div>
    )
}
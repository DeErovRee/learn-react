import React, { useEffect, useState } from "react"

const API = 'https://api.tronalddump.io'

export const ApiTronaldDump = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        reload()
    },[])

    const reload = () => {
        setLoading(true)
        setTimeout(() => {fetch(`${API}/random/quote`)
        .then((response) => response.json())
        .then((data) => setData(data.value))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false))},1500)
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
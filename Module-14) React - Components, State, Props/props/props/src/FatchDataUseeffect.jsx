import React, { useEffect, useState } from 'react'

function FatchDataUseeffect() {
    let [data, setData] = useState([]);   // api se data isme store krnge 
    let [loading, setLoading] = useState(true); // waiting show karenge
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos") // api call
            .then((response) => response.json()) // json me badalna 
            .then((json) => {
                setData(json); // data ko state me set krna 
                setLoading(false); // loading ko state me set krna 
            })
            .catch((error) => console.log("Error fetching data", error));
    }, []); // empty dependencies array

    return (
        <div>
            <h2> API Data</h2>
            {loading ? ( 
                <p>Loading... </p> ) 
                : ( <ul>
                {data.slice(0 ,5 ).map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul> 
        ) }
        </div>
    )
}
export default FatchDataUseeffect
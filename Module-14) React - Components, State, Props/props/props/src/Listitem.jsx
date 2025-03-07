import React, { useState } from 'react'

function Listitem() {
    let fruit = ["Banana", "Strawberry", "Apple", "grapes"]
    return (
        <div><h2>Fruit List</h2>
            <ul>
                {fruit.map((fruits, index) => (
                    <li key={index}>{fruits}</li>
                ))}

            </ul>
        </div>
    )
}

export default Listitem
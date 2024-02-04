import React from "react";

export default function Task15() {

    const arr = [1, 2, 3, 4, 5];

    return (
        <ul>
            {arr.map((el, id) => {
                return <li key={id}>{el}</li>
            })}
        </ul>
    )
}
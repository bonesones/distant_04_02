import React from "react";

export default function Task16() {

    const obj = {name: 'john', surname: 'smit'};

    return (
        <p>
            name: <span>{obj.name}</span> <br />
            surname: <span>{obj.surname}</span>
        </p>
    )
}
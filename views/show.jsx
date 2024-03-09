const React = require('react')
const Default = require('./layouts/default')

function Show({bread}) {
    return (
        <Default>
        <main>
            <h1>{bread.name}</h1>
            <p>{bread.description}</p>
            <p>{bread.price}</p>
        </main>
        </Default>
    )
}
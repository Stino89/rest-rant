const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: Page not found</h1>
                <p>Oops, sorry we can't find this page!</p>
                <div>
                <img src="/images/funny.png" alt="meme" width="500px" height="500px"/>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404
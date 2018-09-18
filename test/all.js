const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
    .goto('http://localhost:8080/voting/new').wait(500)
    .end()
    .then(console.log)
    .catch(error => {
        console.error('Search failed:', error)
    })
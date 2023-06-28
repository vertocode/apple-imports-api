// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const cors = require('cors')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
const corsOptions = {
    origin: ['*'], // Sets permission for all routes in any domain.
    optionsSuccessStatus: 200
}
server.use(cors(corsOptions))
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(10000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server

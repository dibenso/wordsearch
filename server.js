const express = require('express')
const next = require('next')
const helmet = require('helmet')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
app.config.poweredByHeader = false
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  server.use(helmet())

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
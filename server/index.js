
const express = require('express')
const http=require('http')
const { loadNuxt, build  } = require('nuxt')

const app = express()
const isDev = process.env.NODE_ENV !== 'production'
// Import and Set Nuxt.js options


async function start() {



 const  port = process.env.NUXT_PORT || '3000'


const nuxt = await loadNuxt(isDev ? 'dev' : 'start')
if (isDev) {
    build(nuxt)
  }
  // Give nuxt middleware to express
  app.use(nuxt.render)
http.createServer(app)
    .listen(port, '0.0.0.0', () => {
      consola.ready({
        message: `Server listening on http://localhost:${port}`,
        badge: true
      })
    })
}
start()

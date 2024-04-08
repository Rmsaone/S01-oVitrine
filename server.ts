import express from 'express'
import router from './src/routes/routes'

const app = express()
const port = 3000

// Config
app.set('views', './src/views')
app.set('view engine', 'ejs')

// Configuration des fichiers static
app.use(express.static('./src/public'))

app.use('/', router)

app.listen(port, () => {
  console.log(`Challenge oVitrine sur port : ${port}`)
})
import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/levi', (req, res) => {
  res.send('Hello Leví!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
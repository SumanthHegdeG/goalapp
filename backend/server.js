const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const goalRoutes = require('./routes/goalRoutes')

dotenv.config()
connectDB()

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/api/goals', goalRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

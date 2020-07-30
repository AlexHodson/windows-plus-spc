import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'

import login from './routes/login/login.mjs'
import mainDashboard from './routes/main-dashboard/mainDashboard.mjs'
import newFitJob from './routes/sales/fit/new/newFitJob.mjs'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ 'extended': false }))
app.use(bodyParser.json())
app.use('/login', login)
app.use('/mainDashboard', mainDashboard)
app.use('/sales/fit/new', newFitJob)

app.listen(4000, () => {
})

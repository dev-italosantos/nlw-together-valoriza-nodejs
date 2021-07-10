import 'reflect-metadata'
import express from 'express'

import './database'

// @types/express -D
const app = express()

//  http://localhost:3090
app.listen(3090, () => console.log('Server is running'))

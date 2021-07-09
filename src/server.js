'use strict'
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
const express = __importDefault(require('express'))
// @types/express -D
const app = express.default()
//  http://localhost:3090
app.listen(3090, function () { return console.log('Server is running') })

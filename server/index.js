const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const { GoogleGenerativeAI } = require('@google/generative-ai')

const app = express()
app.use(cors())
dotenv.config()
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

app.use(bodyParser.json())

app.post('/explain', async (req, res) => {
  try {
    const { code } = req.body

    if (!code) return res.status(400).json({ error: 'Code is required' })

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

    const prompt = `Explain the following code in simple terms:\n\n${code}`

    const result = await model.generateContent(prompt)
    const response = await result.response
    const explanation = response.text()

    res.json({ explanation })
  } catch (error) {
    console.error('Error in /explain:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(5000, () => console.log('Server running on http://localhost:5000'))

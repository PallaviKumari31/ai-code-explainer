import React, { useState } from 'react'
import axios from 'axios'
import { FaCode, FaMagic } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown';



function App() {
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState('javascript')
  const [explanation, setExplanation] = useState('')
  const [loading, setLoading] = useState(false)

  const handleExplain = async () => {
    if (!code.trim()) return alert('Please enter some code!')
    setLoading(true)
    setExplanation('')

    try {
      const res = await axios.post('http://localhost:5000/api/explain', {
        code,
        language,
      })
      setExplanation(res.data.explanation)
    } catch (err) {
      setExplanation('Error: Could not fetch explanation.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-100 font-sans">
      <header className="bg-black/20 backdrop-blur-md p-4 shadow-md flex items-center gap-3 justify-center">
        <FaCode size={26} className="text-blue-400" />
        <h1 className="text-3xl font-bold tracking-wide">AI Code Explainer</h1>
      </header>

      <main className="max-w-5xl mx-auto mt-10 px-6">
        <label className="block mb-2 text-xl font-medium text-gray-300">Choose language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="mb-4 bg-white/10 text-black px-4 py-2 rounded-lg border border-gray-600 focus:outline-none"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
          <option value="c">C</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="typescript">TypeScript</option>
          <option value="bash">Bash</option>
        </select>

        <label className="block mb-3 text-xl font-medium text-gray-300">Enter your code:</label>
        <textarea
          className="w-full h-56 p-4 text-sm bg-white/5 text-white border border-gray-600 rounded-lg backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          placeholder="// Write or paste your code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></textarea>

        <button
          className="mt-5 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-md"
          onClick={handleExplain}
        >
          <FaMagic />
          {loading ? 'Explaining...' : 'Explain Code'}
        </button>

        {explanation && (
          <div className="mt-8 p-5 rounded-lg border border-gray-600 shadow-md max-h-[500px] overflow-y-auto backdrop-blur-lg bg-white/5 text-white prose prose-invert prose-sm sm:prose-base lg:prose-lg">
         <ReactMarkdown>{explanation?.replace(/\u200B/g, '') || 'No explanation available.'}</ReactMarkdown>
        
          </div>
        )}

      </main>

      <footer className="mt-16 p-4 text-center text-sm text-gray-400">
        Designed for Developers
      </footer>
    </div>
  )
}

export default App

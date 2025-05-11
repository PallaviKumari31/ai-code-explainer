import { useState } from "react"
import axios from "axios"

function App() {
  const [code, setCode] = useState("")
  const [language, setLanguage] = useState("Python")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const handleExplain = async () => {
    setLoading(true)
    setResult("")
    try {
      const res = await axios.post("http://localhost:5000/api/explain", {
        code,
        language,
      })
      setResult(res.data.explanation)
    } catch (err) {
      setResult("Error: " + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">AI Code Explainer</h1>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="mb-4 p-2 border"
      >
        <option>Python</option>
        <option>JavaScript</option>
        <option>C++</option>
        <option>Java</option>
      </select>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-64 p-4 border rounded"
        placeholder="Paste your code here..."
      />
      <button
        onClick={handleExplain}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded"
      >
        {loading ? "Explaining..." : "Explain Code"}
      </button>
      {result && (
        <div className="mt-6 bg-white p-4 rounded shadow whitespace-pre-wrap">
          {result}
        </div>
      )}
    </div>
  )
}

export default App

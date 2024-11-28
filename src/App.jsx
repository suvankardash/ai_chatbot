import {useState} from 'react'  
import './App.css'
import axios from 'axios'
function App() {
  const  [question,setQuestion] = useState("");
  const  [answer, setAnswer] = useState("");
  async function generateAnswer()
  {
    setAnswer("Loading ...");
    const response = await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA80AlOpVzuRq9HjB4gQ-VcX7SpbD0vC8M",
      method:"POST",
      data:{"contents":[{"parts":[{"text":question}]}]}
    });
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  }
  return (
    <>
    <h1>AI CHAT Project</h1>
    <textarea className="border rounded w-full" placeholder="Ask me Anything" value = {question} onChange = {(e)=>setQuestion(e.target.value)} rows="10" cols="30"></textarea>
    <button onClick={generateAnswer}>Generate Answer</button>
    <pre>{answer}</pre>
    </>
  )
}
export default App
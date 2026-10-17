import { useEffect, useState } from 'react'

function App() {
  const [status, setStatus] = useState('carregando...')

  useEffect(() => {
    fetch('http://localhost:3333/health')
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus('erro ao conectar'))
  }, [])

  return <h1>API: {status}</h1>
}

export default App
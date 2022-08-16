import { useState } from 'react'
import { css } from '@emotion/react'
import { useSnackbar } from 'notistack';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return (
    <div>
      <h1>Vite + React</h1>
      <div css={css`
        padding: 2em;
      `}>
        <button onClick={() => {
          setCount((count) => count + 1)
          enqueueSnackbar(`Count updated to: ${count + 1}`)
        }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p css={css`
        color: #999;
      }`}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

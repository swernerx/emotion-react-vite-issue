import { css } from '@emotion/react'
import { Button } from 'uikit';

function App() {
  return (
    <div css={css`
      font-family: Helvetica, sans-serif;
      width: 100vw;
      margin: 0 auto;
      text-align: center;
    `}>
      <h1>Vite + React</h1>
      <p>Open the console to check for the warning message: <q>You are loading @emotion/react when it is already loaded.</q></p>
      <Button/>
    </div>
  )
}

export default App

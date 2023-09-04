import { useState } from 'react'
import reactLogo from '@assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ButtonComponent } from '@components/test.compont'
import { css } from '@panda/css'
import { SystemStyleObject } from '@panda/types'

function App() {
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState('Test Title Component')

  const styleObj: SystemStyleObject = {
    bg: 'gray.400',
    // age: 200,
    // at: 2023
  }
  const containerStyle = css(styleObj)
  console.log('containerStyle ', containerStyle)

  return (
    <>
      <div className={containerStyle}>
        <ButtonComponent title={title} onClick={() => setTitle('New Title Component')} />
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App

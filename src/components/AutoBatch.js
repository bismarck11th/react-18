import { useState } from 'react'
import { flushSync } from 'react-dom'
import axios from 'axios'
import { Layout } from './Layout'

export const AutoBatch = () => {
  const [count, setCount] = useState(0)
  const [fetchCount, setFetchCount] = useState(0)
  const [users, setUsers] = useState([])

  const clickHandler = () => {
    /*
    これはReact17の段階でバッチされる(stateを2回更新しているがレンダリングは1回のみ)
    React18はPromiseやsetTimeoutもバッチされる
    setCount((count) => count + 1)
    setFetchCount((fetchCount) => fetchCount + 1)
    */

    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setUsers(res.data)
      setFetchCount((fetchCount) => fetchCount + 1)
    })

    /* Automating Batching したくない場合 この場合2回レンダリングされる
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      flushSync(() => {
        setUsers(res.data)
      })
      flushSync(() => {
        setFetchCount((fetchCount) => fetchCount + 1)
      })
    })
    */
  }

  console.log('Rendered AutoBatch')
  return (
    <Layout>
      <p>Automatic AutoBatch</p>
      <p className="my-5">{fetchCount}</p>
      <button
        className="my-5 rounded bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-500"
        onClick={clickHandler}
      >
        click
      </button>
    </Layout>
  )
}

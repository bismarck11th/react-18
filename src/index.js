import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AutoBatch } from './components/AutoBatch'
import { SuspenseDemo } from './components/SuspenseDemo'
import { NestedSuspense } from './components/NestedSuspense'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/autobatch" element={<AutoBatch />} />
        <Route path="/suspense" element={<SuspenseDemo />} />
        <Route path="/nested_suspense" element={<NestedSuspense />} />
      </Routes>
    </BrowserRouter>
    <ReactQueryDevtools initialIdOpen={false} />
  </QueryClientProvider>
  // </React.StrictMode>
)

reportWebVitals()

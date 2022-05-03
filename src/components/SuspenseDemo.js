import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ExclamationCircleIcon } from '@heroicons/react/solid'

import { Layout } from './Layout'
import { Spinner } from './Spinner'
import { FetchUsers } from './FetchUsers'
import { FetchTasks } from './FetchTasks'
import { FetchComments } from './FetchComments'

export const SuspenseDemo = () => {
  return (
    <Layout>
      <p className="mb-3 text-xl font-bold text-blue-500">Suspense Demo</p>
      <ErrorBoundary
        fallback={
          <ExclamationCircleIcon className="my-5 h-10 w-10 text-pink-500" />
        }
      >
        <Suspense fallback={<Spinner />}>
          <FetchUsers />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={
          <ExclamationCircleIcon className="my-5 h-10 w-10 text-pink-500" />
        }
      >
        <Suspense fallback={<Spinner />}>
          <FetchTasks />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={
          <ExclamationCircleIcon className="my-5 h-10 w-10 text-pink-500" />
        }
      >
        <Suspense fallback={<Spinner />}>
          <FetchComments />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  )
}

import { useQueryUsers } from '../hooks/useQueryUsers'

export const FetchUsers = () => {
  /* suspenseを使わない場合 コンポーネントレベルで状態のハンドリングが必要
  const { status, data } = useQueryUsers()
  if (status === 'loading') return <p>Loading</p>
  if (status === 'error') return <p>Error</p>
  */
  const { data } = useQueryUsers()

  return (
    <div className="my-3 text-center">
      <p className="my-3 font-bold">User List 3s delay</p>
      {data?.map((user) => (
        <p className="my-3 text-sm" key={user.id}>
          {user.username}
        </p>
      ))}
    </div>
  )
}

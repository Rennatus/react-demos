const UserList = () => {
  const users = [
    {id:"1",name:"John",email:"123@123.com"},
    {id:"2",name:"Jane",email:"123@123.com"},
    {id:"3",name:"Jack",email:"123@123.com"},
  ]
  return (
    <div>
      <h1>User List</h1>
      {users.map(u=>(
        <div key={u.id}>
        <h1>{u.name}</h1>
        <h1>Email: {u.email}</h1>
        </div>
      ))}
    </div>
  )
}
export default UserList

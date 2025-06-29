const UserStatus = (props) => {
  if (props.logged_in && props.is_admin) {
    return <div>Welcome admin</div>;
  } else {
    return <div>Welcome user</div>;
  }
};
export default UserStatus;

import Weather from "./components/weather.jsx";
import UserStatus from "./components/user_status.jsx";

const App = () => {
  return (
    <>
      <Weather />
      <UserStatus logged_in={true} is_admin={false} />
    </>
  );
};
export default App;

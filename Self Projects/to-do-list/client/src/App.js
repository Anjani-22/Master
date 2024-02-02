import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
import Auth from "./components/Auth";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [tasks, setTasks] = useState(null);
  const authToken = cookies.AuthToken;
  const userEmail = cookies.Email;
  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/todos/${userEmail}`);
      const json = await response.json();

      setTasks(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (authToken) getData();
  }, [authToken]);
  // console.log(tasks);

  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  return (
    <div className="app">
      {!authToken && <Auth />}
      {authToken && (
        <>
          <ListHeader listName="🌴 Holiday List" getData={getData} />
          <p className="user-email"> Welcome back {userEmail}</p>
          {sortedTasks?.map((task) => (
            <ListItem key={task.id} task={task} getData={getData} />
          ))}
        </>
      )}
    </div>
  );
};

export default App;

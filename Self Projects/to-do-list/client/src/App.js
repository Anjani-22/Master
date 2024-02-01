import { useEffect, useState } from "react";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
import Auth from "./components/Auth";

const userEmail = "bob@gmail.com";

const App = () => {
  const [tasks, setTasks] = useState(null);
  const auth_token = false;
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
    getData();
  }, []);
  // console.log(tasks);

  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  return (
    <div className="app">
      {!auth_token && <Auth />}
      {auth_token && (
        <>
          <ListHeader listName="🌴 Holiday List" getData={getData} />
          {sortedTasks?.map((task) => (
            <ListItem key={task.id} task={task} getData={getData} />
          ))}
        </>
      )}
    </div>
  );
};

export default App;

import "./App.css";

import { useState, useEffect } from "react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { createTask } from "./graphql/mutations";
import { listTasks } from "./graphql/queries";

import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App({ user, signOut }) {
  const [task, setTask] = useState({
    name: "",
    description: "",
  });
  const [tasks, setTasks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(task);

    const result = await API.graphql(
      graphqlOperation(createTask, { input: task })
    );

    console.log(result);
  };

  useEffect(() => {
    async function loadTasks() {
      const result = await API.graphql(graphqlOperation(listTasks));
      setTasks(result.data.listTasks.items);
      console.log(result);
    }

    loadTasks();

    return () => {};
  }, []);

  return (
    <>
      <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut}>Sign out</Button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Title"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        ></textarea>

        <button>Submit</button>
      </form>

      {/* List tasks using aws ui library */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default withAuthenticator(App);

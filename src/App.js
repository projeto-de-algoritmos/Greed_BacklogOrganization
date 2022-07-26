import React, { useState } from "react";
import "./App.css";
import AddNewItem from "./components/AddNewItem";
import TasksList from "./components/TasksList";
import { Task, scheduleTasks } from "./scripts/interval";
import { Button } from "@mui/material";

const initialTasks = [
  new Task("Organizar o quarto", 2, 100),
  new Task("Ler capitulo 1 do livro O poder do agora", 3, 19),
  new Task("Fazer trabalho de PA1", 1, 1000),
];

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [scheduledTasks, setOrderedTasks] = useState([]);
  const [amount, setAmount] = useState(0);

  const updateTasks = (newJob) => {
    const task = new Task(newJob.name, newJob.deadline, newJob.amount);
    setTasks([...tasks, task]);
  };

  const orderBySchedule = () => {
    const { scheduledTasks, amount } = scheduleTasks(tasks);
    setOrderedTasks(scheduledTasks);
    setAmount(amount);
  };

  return (
    <div>
      <AddNewItem updateTasks={updateTasks} />

      <h2> Lista de tarefas existentes </h2>

      <TasksList tasks={tasks} />

      <h3> Cronograma </h3>

      <Button
        variant="outlined"
        style={{ marginTop: "5px" }}
        className="btn btn-primary"
        onClick={orderBySchedule}
      >
        Montar
      </Button>
      <h4>Lista de tarefas mais importantes</h4>
      <span> Valor total retornado = {amount} </span>
      <TasksList tasks={scheduledTasks} />
    </div>
  );
};

export default App;

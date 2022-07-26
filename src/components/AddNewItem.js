import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const AddNewItem = ({ updateTasks }) => {
  const initialInputState = {
    name: "task",
    amount: 1,
    deadline: 1,
  };

  const [form, setForm] = useState(initialInputState);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    updateTasks(form);
  };

  return (
    <form>
      <h2> Criar nova tarefa </h2>

      <TextField
        id="standard-basic"
        label="Tarefa a ser realizada"
        variant="standard"
        value={form.name}
        name="name"
        onChange={handleInputChange}
      />
      <TextField
        id="standard-basic"
        label="Deadline"
        variant="standard"
        value={form.deadline}
        name="deadline"
        onChange={handleInputChange}
        type="number"
      />
      <TextField
        id="standard-basic"
        label="Valor a ser gerado pela tarefa"
        variant="standard"
        value={form.amount}
        name="amount"
        onChange={handleInputChange}
        type="number"
      />

      <Button variant="outlined" onClick={onSubmit}>
        Enviar
      </Button>
    </form>
  );
};

export default AddNewItem;

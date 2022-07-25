import React, { useState } from "react";

const AddNewItem = ({ updateTasks }) => {
  const initialInputState = { 
    name: "task", 
    amount: 1, 
    deadline: 1 
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
      <label>
        Tarefa a ser realizada:
        <input type="text" name="name" value={form.name} onChange={handleInputChange} />
      </label>

      <label>
        Deadline:
        <input type="number" name="deadline" value={form.deadline} onChange={handleInputChange} />
      </label>

      <label>
        Valor a ser gerado pela tarefa:
        <input type="number" name="amount" value={form.amount} onChange={handleInputChange} />
      </label>

      <input type="button" value="Enviar" onClick={onSubmit}/>

    </form>
  );
};

export default AddNewItem;

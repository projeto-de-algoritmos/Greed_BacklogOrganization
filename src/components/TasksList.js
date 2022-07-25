import React from "react";

const renderTable = (data) => {
    const mapItems = (data) => {
      return data.map((task) => {
        return (
            <tr key={task.name}>
              <td> {task.name} </td>
              <td> {task.deadline} </td>
              <td> {task.amount} </td>
            </tr>
        );
      });
    };
    return data.length ? mapItems(data) : "Processando";
 };

const TasksList = ({ tasks }) => {
  return (
    <>
      {tasks.length ? (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Deadline</th>
              <th>Valor retornado</th>
            </tr>
          </thead>
          <tbody>
            {renderTable(tasks)}
          </tbody>
        </table>
      ) : (
        <div> Nenhuma tarefa. </div>
      )}
    </>
  );
};

export default TasksList;

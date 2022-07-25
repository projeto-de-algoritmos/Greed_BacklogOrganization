import React, { useState } from "react";
import "./App.css";
import ItemForm from "./ItemForm";
import JobsTable from "./JobsTable";
import { Job, scheduleJobs } from "./interval";

const initialJobs = [
    new Job('a', 2, 100),
    new Job('b', 1, 19),
    new Job('c', 2, 27),
    new Job('d', 1, 25),
    new Job('e', 3, 15)
]

const App = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const [scheduledJobs, setOrderedJobs] = useState([]);
  const [profit, setProfit] = useState(0);

  const updateJobs = (newJob) => {
    const job = new Job(newJob.name, newJob.deadline, newJob.profit);
    setJobs([...jobs, job]);
  };

  const orderBySchedule = () => {
    const { scheduledJobs, profit } = scheduleJobs(jobs);
    setOrderedJobs(scheduledJobs);
    setProfit(profit);
  };

  return (
    <div className="p-3">
      <ItemForm updateJobs={updateJobs} />
      <h3> Jobs Listing </h3>
      <JobsTable jobs={jobs} />
      <h3> Schedule </h3>
      <button
        style={{ marginTop: "5px" }}
        className="btn btn-primary"
        onClick={orderBySchedule}
      >
        Schedule
      </button>
      <h4> Schedule Listing </h4>
      <span> Total profit: {profit} </span>
      <JobsTable jobs={scheduledJobs} />
      <span>Timeline starts at 0</span>
    </div>
  );
};

export default App;

const { Heap } = require('heap-js');

class Task {
    constructor(name, deadline, amount) {
        this.id =  '_'+Math.random().toString(36).substr(2, 9);
        this.name = name;
        this.deadline =  parseInt(deadline, 10);;
        this.amount = parseInt(amount, 10);
    }
}

const scheduleTasks = (tasks) => {
    const sortedTasks = tasks.slice().sort((a, b) => a.deadline - b.deadline);
    const maxHeap = new Heap((a, b) => b.deadline - a.deadline);
    const result = [];

    for (let i = tasks.length - 1; i >= 0; i--) {
        let slots = 0;
        if (i === 0) {
            slots = sortedTasks[i].deadline;
        } else {
            slots = sortedTasks[i].deadline - sortedTasks[i - 1].deadline;
        }

        maxHeap.push(
            {
                amount: -sortedTasks[i].amount,
                ...sortedTasks[i],
            }
        );

        while (slots && maxHeap.size()) {
            const task = maxHeap.pop();
            slots--;
            result.push(task);
        }

    }

    result.sort((a, b) => a.deadline - b.deadline);

    return {
        scheduledTasks: result,
        amount: result.reduce((acc, task) => acc + task.amount, 0),
    };
}

module.exports = {
    Task,
    scheduleTasks
}
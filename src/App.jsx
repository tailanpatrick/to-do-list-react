import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";

import "./App.css";

const App = () => {
	// Use state mantém o componente atualizado
	const [tasks, setTasks] = useState([]);


	const handleTaskClick = (taskId) => {
		const newTasks = tasks.map(task => {
			if (taskId === task.id) return { ...task, completed: !task.completed };

			return task;
		});

		setTasks(newTasks);
	}

	const handleTaskAddition = (taskTitle) => {
		if (taskTitle === '') return;

		const newTask = [...tasks, {
			title: taskTitle,
			id: uuidv4(),
			completed: false
		}];

		setTasks(newTask);
	}

	const handleTaskDeletion = (taskId) => {
		const newTasks = tasks.filter((task) => taskId !== task.id);

		setTasks(newTasks);
	}

	return (
		<Router>
			<div className="container">
				<Header />

				<Routes>
					<Route path="/"
						exact
						element={
							<>
								<AddTask handleTaskAddition={handleTaskAddition} />

								<Tasks tasks={tasks}
									handleTaskClick={handleTaskClick}
									handleTaskDeletion={handleTaskDeletion} />
							</>
						} />
					<Route path="/:taskTitle"
						exact
						Component={TaskDetails}/>
				</Routes>
				
			</div>
		</Router>
	);
};

export default App;

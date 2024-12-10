import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
//create your first component
const Home = () => {
	const [tasks, setTasks] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const addTask = (e) => {
		e.preventDefault();
		if (inputValue.trim() === "") return;
		setTasks([...tasks, {id:[],text: inputValue}]);
		setInputValue("");
	};

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};


	return (
		<div className="container mt-5">
			<div className="text-center">
				<div className="card">
					<div className="card-header">
						TO DO
					</div>

					<input
						type="text"
						placeholder="Escribe aqui tu tarea"
						value={inputValue}
						
						onKeyDown={(event) => {
							if (event.key === "Enter") {
								addTask(event);
							}
						}}
						onChange={(e) => setInputValue(e.target.value)}
					/>
					   {tasks.length === 0 ? (
            <p className="no-tasks-message">No hay tareas, añadir tareas</p>
          ) : (
					<ul className="list-group list-group-flush">
						<div className="indList">
						{tasks.map((task) => (
							<li className="list-group-item d-flex justify-content-center p-0"
								key={task.id}
							>
								<h5 className="Tarea col-11 text-align-center">{task.text}</h5>
								<button
								className="delete col-1"
									onClick={() => deleteTask(task.id)}
								>
									<MdDelete />
								</button>
							</li>
						))}
					</div>
					
					</ul>
		  )}
				</div>
			</div>
		</div>
	);
};

export default Home;


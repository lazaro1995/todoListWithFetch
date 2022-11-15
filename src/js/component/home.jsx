import React, { useState, useEffect, useContext,Component } from "react";
import DeleteList from "./deleteList.jsx";
import GetList from "./getList.jsx";
import UpdateList from "./updateList.jsx";
 
const Home= () => {
	const [tasks , setTasks] = useState(null)
	const [inputValue, setInputValue] = React.useState("");
	const [cont, setcont] = React.useState(0);
	const [fruit, setfruit] = React.useState(0);
	console.log(tasks)
	useEffect(()=>{
		GetList(setTasks)
	},[])
	if(tasks != null){
		return(
			<div className="container bg-light">
		  <div className="text-center">
			<h1 className="mt-4 bg-secondary text center">To DO</h1>
			<input
			  className="dato"
			  type="text"
			  value={inputValue}
			  onChange={(e) => setInputValue(e.target.value)}
			  placeholder="What needs to be done ?"
			/>
			<button
			  className="btn-info ms-2"
			  onClick={() => setcont(UpdateList(tasks, inputValue, cont ))  }
			>
			  Add task
			</button>
		  </div>
	
		  <ul className="list-group mt-4">
			{tasks.map((item, index) => {
			  return (
				<li
				  key={index}
				  className="list-group-item d-flex justify-content-between"
				>
				  <h3 className="text-left">{item.label} </h3>	
				  <button
					className="btn btn-success"
					onClick={() => setTasks(DeleteList(tasks,index, setTasks)) }
				  >
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  width="16"
					  height="16"
					  fill="currentColor"
					  className="bi bi-x"
					  viewBox="0 0 16 16"
					>
					  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
					</svg>
				  </button>
				</li>
			  );
			})}
		  </ul>
		</div>
		)
	}
	
	else{
		return(
			<div className="container bg-light">
			<div className="text-center">
			  <h1 className="mt-4 bg-secondary text center">To DO</h1>
			  <input
				className="dato"
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder="What needs to be done ?"
			  />
			  <button
				className="btn-info ms-2"
				onClick={() => setcont(UpdateList(tasks, inputValue, cont ))}
			  >
				Add task
			  </button>
			</div>
			<li className="list-group-item d-flex justify-content-between mt-4">
			  <h3 className="text-left">No tasks, add a task</h3>
			</li>
		  </div>
		);
	}
	
	
}

//create your first component  
export default Home;

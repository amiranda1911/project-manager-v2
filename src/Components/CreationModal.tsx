import { IoIosClose } from "react-icons/io"
import { Uploader } from "./Uploader"
import { useState } from "react";
import { Status } from "../utils/EnumStatus";
import { Priority } from "../utils/EnumPriority";
import { useCreateTask } from "../hooks/useCreateTask";
import { useAuth } from "../hooks/useAuth";

interface CreationModalProps {
	closeDispatch: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreationModal = ({closeDispatch}: CreationModalProps) => {	
	const {createTask} = useCreateTask()
	const {getToken} = useAuth()
	const now = new Date()
	const [title, setTitle] = useState<string>("")
	const [status, setStatus] = useState<Status>(Status.ToDo)
	const [description, setDescription] = useState<string>("")
	const [startDate, setStartDate] = useState<string>(`${now.getFullYear()}-${now.getMonth()}-${String(now.getDay()).padStart(2, '0')}`)
	const [startTime, setStartTime] = useState<string>("00:00")
	const [endDate, setEndDate] = useState<string>(`${now.getFullYear()}-${now.getMonth()}-${String(now.getDay() + 1).padStart(2, '0')}`)
	const [endTime, setEndTime] = useState<string>("00:00")
	const [priority, setPriority] = useState<Priority>(Priority.Low)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		
		if(title === "" || description === "" || startDate === "" || endDate === ""){
			return
		}
		const task = {
			owner_id: getToken(),
			priority: priority,
			status: status,
			title: title,
			members: [1,2,3],
			commentsCount: Math.floor(Math.random() * (999 - 10 + 1)) + 10,
			completedTasksCount: Math.floor(Math.random() * (999 - 10 + 1)) + 10,
			progress: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
			start_datetime: new Date(`${startDate}T${startTime}`).getTime(),
			end_datetime: new Date(`${endDate}T${endTime}`).getTime(),
			estimated_time: 3
		}
		
		createTask(task)
		closeDispatch(false)
	}

  return (
    <>
    {/* back transparent screen */}
    <div className="absolute bg-black-black opacity-50 w-full h-full z-40"></div>
    <div className="absolute top-0 left-0  w-full h-full z-50 box-border p-4 md:px-36">
			<section id="creation-modal" className="
				w-full 
				h-full 
				bg-white 
				rounded-[0.66rem]
				py-4
				px-6
				overflow-y-auto
				">
				<header className="flex flex-row justify-between">
					<h1 className="form-header">Create new task</h1> 
					<button onClick={() => closeDispatch(false)}><IoIosClose className="text-23 text-[#BD2323]" /></button>
				</header>
				
				<form className="flex flex-col lg:flex-row" onSubmit={handleSubmit}>
					<div className="lg:w-1/2 lg:p-3">
						<div className="form-section">
							<label className="form-label">Title</label>
							<input type="text" className="form-input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter the title of the task"></input>
						</div>

						<div className="form-section">
							<label className="form-label">Status</label>
							<div className="flex flex-row">
								<div className="form-radio">
									<label>To do</label>
									<input type="radio" onChange={() => setStatus(Status.ToDo)} className="radio-violet" name="status" />
								</div>

								<div className="form-radio">
									<label>In progress</label>
									<input type="radio" onChange={() => setStatus(Status.InProgress)} className="radio-orange" name="status" />
								</div>

								<div className="form-radio">
									<label>Done</label>
									<input type="radio" onChange={() => setStatus(Status.Done)} className="radio-green" name="status" />
								</div>
							</div>
						</div>
						
						<div className="form-section">
							<label className="form-label" htmlFor="">Description</label>
							<textarea className="form-input" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter a description"></textarea>
						</div>

						<div className="form-section">
							<label htmlFor="" className="form-label">Start Date</label>
							<div className="flex flex-row">
								<input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="form-input" /> 
								<input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="form-input" />
							</div>
						</div>

						<div className="form-section">
							<label htmlFor="" className="form-label">End Date</label>
							<div className="flex flex-row">
								<input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="form-input" /> 
								<input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="form-input" />
							</div>
						</div>
					</div>

					<div className="lg:w-1/2 lg:p-3">
						<div className="form-section">
							<label htmlFor="" className="form-label">Task cover</label>
							<Uploader/>
						</div>

						<div className="form-section">
								<label htmlFor="" className="form-label">Add People</label>
								<input type="text" className="form-input" />
						</div>

						<div className="form-section">
							<label className="form-label">Priority</label>
							<div className="flex flex-row">
								<div className="form-radio">
									<label>Low</label>
									<input type="radio" onChange={() => setPriority(Priority.Low)} className="radio-violet" name="priority" />
								</div>

								<div className="form-radio">
									<label>Mid</label>
									<input type="radio" onChange={() => setPriority(Priority.Mid)} className="radio-orange" name="priority" />
								</div>

								<div className="form-radio">
									<label>High</label>
									<input type="radio" onChange={() => setPriority(Priority.High)} className="radio-green" name="priority" />
								</div>
							</div>
						</div>

						<div className="form-section">
							<button className="green-button" type="submit">Create!</button>
						</div>
					</div>
				</form>
			</section>
    </div>
    </>
  )
}

export default CreationModal
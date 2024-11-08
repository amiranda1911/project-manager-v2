import { IoIosClose } from "react-icons/io"
import { Uploader } from "./Uploader"

interface CreationModalProps {
	closeDispatch: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreationModal = ({closeDispatch}: CreationModalProps) => {
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
				
				<form className="flex flex-col">
					<div className="form-section">
						<label className="form-label">Title</label>
						<input type="text" className="form-input" placeholder="Enter the title of the task"></input>
					</div>

					<div className="form-section">
						<label className="form-label">Status</label>
						<div className="flex flex-row">
							<div className="form-radio">
								<label>To do</label>
								<input type="radio" className="radio-violet" name="status" />
							</div>

							<div className="form-radio">
								<label>In progress</label>
								<input type="radio" className="radio-orange" name="status" />
							</div>

							<div className="form-radio">
								<label>Done</label>
								<input type="radio" className="radio-green" name="status" />
							</div>
						</div>
					</div>
					
					<div className="form-section">
						<label className="form-label" htmlFor="">Description</label>
						<textarea className="form-input" placeholder="Enter a description"></textarea>
					</div>

					<div className="form-section">
						<label htmlFor="" className="form-label">Start Date</label>
						<div className="flex flex-row">
							<input type="date" className="form-input" /> 
							<input type="time" className="form-input" />
						</div>
					</div>

					<div className="form-section">
						<label htmlFor="" className="form-label">End Date</label>
						<div className="flex flex-row">
							<input type="date" className="form-input" /> 
							<input type="time" className="form-input" />
						</div>
					</div>

					
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
								<input type="radio" className="radio-violet" name="status" />
							</div>

							<div className="form-radio">
								<label>Mid</label>
								<input type="radio" className="radio-orange" name="status" />
							</div>

							<div className="form-radio">
								<label>High</label>
								<input type="radio" className="radio-green" name="status" />
							</div>
						</div>
					</div>

					<div className="form-section">
						<button className="green-button" type="submit">Create!</button>
					</div>
				</form>
			</section>
    </div>
    </>
  )
}

export default CreationModal
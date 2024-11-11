import { AiFillMessage } from "react-icons/ai"
import { FaCheckCircle } from "react-icons/fa"
import ProgressBar from "./ProgressBar"
import { Priority } from "../utils/EnumPriority"
import { Task } from "../utils/Task"


interface KanbanCardProps{
	task: Task
}

const KanBanCard = ({task} : KanbanCardProps) => {
  return (
	<div className="
		w-[6.116rem]	
		md:w-[11.5rem]
		lg:w-[17.38rem]
		bg-white
		rounded-[0.528125rem]
		mx-auto my-2
		p-1
		md:p-[0.95rem]
	">
			{!(task.image === "") && (
				<div className="mb-2 overflow-hidden  rounded-sm md:rounded-2xl
				w-[5]	
				md:w-[9.5rem]
				lg:w-[15.38rem]
				h-auto"
				>
					<img src={task.image} />
					</div>
			) }
		
		<div className="
			flex flex-col box-border justify-between
			 min-h-[4.004rem] m-0 
			 md:min-h-[7.53rem] 
			 lg:min-h-[10.38rem]
			">
				<span className={`
					flex
					font-jakarta 
					text-1 md:text-6 lg:text-12
					px-[0.17625rem] py-[0.0125rem]
					w-fit justify-start rounded-[1rem]
					lg:p-2
					card-priority-${Priority[task.priority].toLowerCase()}
				`}>
					{Priority[task.priority]}
				</span>
				<h2 className=" font-roboto font-bold 
					text-3 md:text-10 lg:text-16"
				>
					{task.title}</h2>
				
				<div>
					<div className=" w-full font-jakarta text-2 md:text-7 lg:text-14 flex flex-row justify-between">
						<span>Progress</span>
						<span>{task.progress}%</span>
					</div>		
					<ProgressBar progress={task.progress}/>
				</div>
				<footer className="flex flex-row
						lg:h-[2rem] 
						overflow-hidden
				">
					<div className="flex flex-row justify-between w-full">
						<div className="flex content-start space-x-[-12px] overflow-hidden">
						{Array.from({ length: Math.floor(Math.random() * (5 - 1 + 1)) + 1 }).map((_, index) => (
							<div key={index} className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
							<img src={"https://images.unsplash.com/photo-1728887823143-d92d2ebbb53a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
							alt={`Imagem ${index + 1}`} 
							className="rounded-full object-coverw-full h-full object-cover" />
							</div>
						))}
						</div>
						<div className="
							w-1/2 
							text-3 lg:text-16 font-semibold font-roboto
							flex justify-between
							">
							<span className="flex items-center"><AiFillMessage color="#94A3B8" className="mr-[0.1rem]"/>{task.commentsCount}</span>
							<span className="flex items-center"><FaCheckCircle color="#94A3B8" className="mr-[0.1rem]"/>{task.completedTasksCount}</span>
						</div>
					</div>
				</footer>
		</div>
		
	</div>
  )
}

export default KanBanCard
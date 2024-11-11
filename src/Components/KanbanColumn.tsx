import { IoAdd } from "react-icons/io5"
import { Task } from "../utils/Task"
import KanBanCard from "./KanbanCard"

interface KanbanColumnProps{
	type: string
	tasks: Task[]
	handleNewCard: React.Dispatch<React.SetStateAction<boolean>>
}
const KanbanColumn = ({type, tasks, handleNewCard} : KanbanColumnProps) => {

  return (
    <div className={`
			flex flex-col m-1 md:m-3 w-[6.881875rem] h-[12.29rem] md:w-[12.82rem] md:h-[23.13rem] lg:w-[19.38rem] lg:h-[34.56rem] bg-[#1E293B]/10 rounded-[0.46rem] md:rounded-[0.86rem] lg:rounded-[1.45rem]
			${type.replace(/\s+/g, '').toLowerCase()}-column
			`}>
				<header className="	column-header flex items-center justify-between w-full h-4 md:h-[1.86rem] lg:h-[2.81rem] rounded-full p-2 box-border">
						<div className="column-header-info flex font-roboto font-bold text-3">
							<div className="
								flex items-center justify-center
								column-header-tasks-count
								rounded-[27.145rem]
								text-white font-roboto font-semibold
								text-2 md:text-7 lg:text-14
								px-[4.22px] py-[2.11px] m-[2px] 
								box-border
								md:w-[1.68rem] md:h-[1.37rem]
								lg:w-[2.5rem] lg:h-[2rem]
							">
									{tasks.length}
								</div>
								<p className="
										column-header-desc
										flex items-center
										text-3 md:text-10 lg:text-16
										font-roboto font-bold
								">{type}</p>
						</div>
						<button onClick={() => handleNewCard(true)} ><IoAdd className={`${type.replace(/\s+/g, '').toLowerCase()}-add text-20`}/></button>
				</header>
				<div className=" w-full max-h-full 
						overflow-hidden overflow-y-scroll 
						p-0
						lg:h-full"
						style={{scrollbarWidth : "none"}}>
						{ tasks.map((task) => (<KanBanCard task={task} key={task.id}/>)) }
					
				</div>
    </div>
  )
}

export default KanbanColumn
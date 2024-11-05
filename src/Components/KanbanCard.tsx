import { AiFillMessage } from "react-icons/ai"
import { FaCheckCircle } from "react-icons/fa"
import ProgressBar from "./ProgressBar"


interface KanbanCardProps{
	priority: string
}

const KanBanCard = ({priority} : KanbanCardProps) => {
  return (
    <div className="
        flex flex-col
		w-[6.116rem] h-[4.004rem] m-0 p-[0.26375rem]
		md:w-[11.500625rem] md:h-[7.530625rem]
		justify-between
		bg-white
		rounded-[0.528125rem]
		mx-auto my-2
		">
			<span className={`
				flex
				font-jakarta 
				text-1 md:text-6
				px-[0.17625rem] py-[0.088125rem]
				w-fit justify-start rounded-full
				card-priority-${priority.toLowerCase()}
			`}>
				{priority}
			</span>
			<h2 className=" font-roboto font-bold 
				text-3 md:text-10"
			>
				Task 3</h2>
			<div className=" w-full font-jakarta	
					text-2 md:text-7
			 		flex flex-row	justify-between "
			>
				<span>Progress</span>
				<span>0%</span>
			</div>
        
			<ProgressBar progress={30}/>
			<footer className="flex flex-row
					h-[11px] 
					overflow-hidden
			"
			>
				<div className="w-1/2 relative flex">
					{Array(5).map((_, index) => (
            <img key={index} className="flex w-[11px] h-[11px] bg-black rounded-full"/>
          ))}
					
				</div>
				<div className="
					w-1/2 
					text-3 font-semibold font-roboto
					flex justify-between"
				>
					<span className="flex items-center"><AiFillMessage color="#94A3B8" />11</span>
					<span className="flex items-center"><FaCheckCircle color="#94A3B8" />187</span>
				</div>
			</footer>
    </div>
  )
}

export default KanBanCard
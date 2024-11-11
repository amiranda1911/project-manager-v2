import { AiFillMessage } from "react-icons/ai"
import { FaCheckCircle } from "react-icons/fa"
import ProgressBar from "./ProgressBar"
import cardimage from '../../public/Frame.png'

interface KanbanCardProps{
	priority: string
}

const KanBanImageCard = ({priority} : KanbanCardProps) => {
  return (
    <div className="
        flex flex-col box-border justify-between
		w-[6.116rem] min-h-[4.004rem] m-0 p-[0.45rem] lg:p-[0.95rem]
		md:w-[11.5rem] md:min-h-[7.53rem]
		lg:w-[17.38rem] lg:min-h-[11.38rem]
		bg-white
		rounded-[0.528125rem]
		mx-auto my-2
		
		">
			
			<span className={`
				flex
				font-jakarta 
				text-1 md:text-6 lg:text-12
				px-[0.17625rem] py-[0.088125rem]
				w-fit justify-start rounded-[1rem]
				lg:p-2
				card-priority-${priority.toLowerCase()}
			`}>
				{priority}
			</span>
			<h2 className=" font-roboto font-bold 
				text-3 md:text-10 lg:text-16"
			>
				Task 3</h2>
			<div className=" min-h w-full font-jakarta	
					text-2 md:text-7 lg:text-14
			 		flex flex-row	justify-between "
			>
				<span>Progress</span>
				<span>0%</span>
			</div>
        
			<ProgressBar progress={30}/>
			<footer className="flex flex-row
					lg:h-[2rem] 
					overflow-hidden
			">
				<div className="w-1/2 relative flex">
					{Array(5).map((_, index) => (
            <img key={index} className="flex w-[11px] h-[11px] bg-black rounded-full"/>
          ))}
					
				</div>
				<div className="
					w-1/2 
					text-3 lg:text-16 font-semibold font-roboto
					flex justify-between
					">
					<span className="flex items-center"><AiFillMessage color="#94A3B8" />11</span>
					<span className="flex items-center"><FaCheckCircle color="#94A3B8" />187</span>
				</div>
			</footer>
    </div>
  )
}

export default KanBanImageCard
import KanBanCard from "./KanbanCard"

interface KanbanColumnProps{
	type: string
}
const KanbanColumn = ({type} : KanbanColumnProps) => {
  return (
    <div className={`
			m-1 
			w-[6.881875rem] h-[12.29rem]
			overflow-hidden
			bg-slate-800
			rounded-[0.66rem]
			${type.replace(/\s+/g, '').toLowerCase()}-column
			`}>
				<header className="
					column-header
					flex
					content-between
					w-full h-4
					rounded-full
					">
						
						<div className="
							column-header-info
							flex font-roboto 
							font-bold 
							text-3 
						">
							<div className="
								column-header-tasks-count
								rounded-[27.145rem]
								text-2 text-white font-semibold
								px-[4.22px] py-[2.11px] m-[2px] box-border"
							>
									25
								</div>
								<p className="
										column-header-desc
										flex items-center
										text-3
										font-roboto font-bold
								">{type}</p>	
						</div>

				</header>
				<div className=" w-full max-h-full  overflow-y-scroll pb-4">
					<KanBanCard priority={"Low"}/>
					<KanBanCard priority={"Mid"}/>
					<KanBanCard priority={"High"}/>
				</div>
    </div>
  )
}

export default KanbanColumn
const KanBanCard = () => {
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
			<span className="font-jakarta 
			text-1 md:text-6"
			>
				Mid
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
        

			<footer className="flex flex-row
					h-[11px] 
					overflow-hidden
			"
			>
				<div className="w-1/2">
					<a className="w-[11px] h-[11px] 
						bg-black 
						overflow-hidden rounded-full"
					>
					t
					</a>
				</div>
				<div className="
					w-1/2 
					text-3 font-semibold font-roboto
					flex justify-between"
				>
					<span>11</span>
					<span>187</span>
				</div>
			</footer>
    </div>
  )
}

export default KanBanCard
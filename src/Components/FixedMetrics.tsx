import { BsPinFill } from 'react-icons/bs'
import FixedMetricUserCard from './FixedMetricUserCard'
import { useEffect, useState } from 'react';
import { User } from '../utils/User';
import axios from 'axios';
import { baseUrl } from '../constants';
import TimeConverter from './TimeConverter';

interface FixedMetricsProps {
  closeDispatch: React.Dispatch<React.SetStateAction<boolean>>
  owners: number[]
  totalTodo: number
  totalinProgress: number
  totalDone: number
  totaltime : number
}

const FixedMetrics = ({closeDispatch, owners, totalDone, totalTodo, totalinProgress, totaltime} : FixedMetricsProps) => {
  
	const [users, setUsers] = useState<User[]>([])


	useEffect(() => {
		const fetchUsers = async () => {
			try{
				const response = await axios.get(`${baseUrl}/users`)
				setUsers(response.data)
			} catch (err) {
				console.log(err)
			}
		}

		fetchUsers()
	}, [owners])
	
	return (
    <>
        <section className='
            flex flex-col
            w-[15.47rem]
            h-[27.94rem] 
            bg-[#6C7D96]
            lg:w-[18.63rem] xl:w-[18.63rem] 2xl:w-[18.63rem]
            lg:h-[33.63rem] xl:h-[33.63rem] 2xl:h-[33.63rem]
            
            p-4
						lg:pt-8
            rounded-[1.56rem]
            mx-auto
            my-auto
        '>
            <h2 className='
                flex justify-between items-center
                font-roboto font-bold
                text-white
                text-16'
            ><span>In This project</span> <button onClick={() => closeDispatch(false)}><BsPinFill /></button></h2>
							{users.slice(0,3).map((user) => (
								<FixedMetricUserCard key={user.id} user={user}/>
							))}
            <h2 className='
                font-roboto font-bold
                text-white
                text-16
								lg:pt-8'
            >Metrics</h2>
            <div className='flex '>
                <div className='w-3/5'>
                    <div className='flex 
                        flex-col 
                        bg-[#F6F6F6]
                        rounded-[0.78rem]
                        p-1 my-2
												lg:p-2
												lg:box-content
												h-[7.1rem]
												'
												>
                        <h3 className='
                        font-roboto font-bold
                        text-12
                        text-[#160A60]
                        '>Total tasks</h3>
                        <p className='text-12 text-[#160A60] font-bold font-roboto'><span className='text-17 font-bold text-violet-dark'>{totalTodo}</span> To do</p>
                        <p className='text-12 text-[#160A60] font-bold font-roboto'><span className='text-17 font-bold text-orange-dark'>{totalinProgress}</span> In Progress</p>
                        <p className='text-12 text-[#160A60] font-bold font-roboto'><span className='text-17 font-bold text-green-dark'>{totalDone}</span> Done</p>
                    </div>
                    <div className='flex 
                        flex-col 
                        bg-[#F6F6F6]
                        rounded-[0.78rem]
                        p-1 my-2'>
                        <h3 className='text-12 font-roboto font-bold'>Total time estimated</h3>
                        <time className='text-21 flex justify-center font-roboto font-bold'><TimeConverter seconds={totaltime}/></time>
                    </div>
                    
                </div>
                <div className='w-2/5 flex flex-col 
                        bg-[#F6F6F6]
                        rounded-[0.78rem]
                        p-3 ml-2 my-2'>
                    <h3 className='text-8 font roboto font-bold text-[#160A60] '>Most active</h3>
                    <p className='text-9 font-bold font-roboto text-[#4F46E5]'>last 30 days</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default FixedMetrics
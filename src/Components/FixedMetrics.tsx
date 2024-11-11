import { BsPinFill } from 'react-icons/bs'
import FixedMetricUserCard from './FixedMetricUserCard'
import { useEffect, useState } from 'react';
import { User } from '../utils/User';
import axios from 'axios';
import { baseUrl } from '../constants';
import TimeConverter from './TimeConverter';
import { Link } from 'react-router-dom';

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
            rounded-[1.56rem]
            mx-auto
            my-auto
            box-content
        '>
            <h2 className='
                flex justify-between items-center
                font-roboto font-bold
                text-white
                text-16
                lg:pt-2
                lg:pb-2'
            ><span>In This project</span> <button onClick={() => closeDispatch(false)}><BsPinFill /></button></h2>
                {users.slice(0,3).map((user) => (
                    <FixedMetricUserCard key={user.id} user={user}/>
                ))}
                <div className='w-full flex flex-row-reverse text-7 text-[#C7C3FF]'> <p className='m-1'><Link to={"#"}>(10) View All</Link></p></div>
            <h2 className='
                font-roboto font-bold
                text-white
                text-16
				lg:pt-6
                lg:pb-1'
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
												items-center
                        bg-[#F6F6F6]
                        rounded-[0.78rem]
                        p-1 my-2
												text-[#160A60]'>
                        <h3 className='text-12 font-roboto font-bold'>Total time estimated</h3>
                        <time className='text-21 flex justify-center font-roboto font-bold text-[#4F46E5]'><TimeConverter seconds={totaltime}/></time>
                    </div>
                    
                </div>
                <div className='w-2/5 flex flex-col 
                        bg-[#F6F6F6]
                        rounded-[0.78rem]
                        p-3 ml-2 my-2'>
                    <h3 className='text-8 font roboto font-bold text-[#160A60] '>Most active</h3>
                    <p className='text-9 font-bold font-roboto text-[#4F46E5]'>last 30 days</p>
                    {users.slice(0,3).map((user) => (
                        <div key={user.id} >
                            <Link to={`/profile/${user.id}`}>
                                <div  className="flex 
                                                w-full
                                                flex-row
                                                bg-white
                                                rounded-[0.78rem]
                                                my-1
                                                p-1
                                                font-roboto
                                                ">
                                    <img className="p-1 
                                        w-[1.49rem] lg:w-[1.75rem]
                                        h-[1.49rem] lg:h-[1.75rem]
                                        rounded-full" src={"https://images.unsplash.com/photo-1728887823143-d92d2ebbb53a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
                                    <div>
                                        <h2 className="text-7 font-bold">{user.firstName} {user.lastName}</h2>
                                        <h3 className="text-4 font-bold">{user.jobPosition}</h3>
                                    </div>
                                </div>
                                </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default FixedMetrics
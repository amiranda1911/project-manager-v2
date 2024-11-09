import { useEffect, useState } from 'react'
import FixedMetrics from '../../Components/FixedMetrics'
import KanbanColumn from '../../Components/KanbanColumn'
import kanbanCanvasBgImage from '/public/kanban-bg.png' 
import { BsPinFill } from 'react-icons/bs'
import CreationModal from '../../Components/CreationModal'
import axios from 'axios'
import { Task } from '../../utils/Task'
import { Status } from '../../utils/EnumStatus'
const Kanban = () => {
  
  const [showFixedMetric, setShowFixedMetric] = useState<boolean>(false)
  const [showCreationModal, setShowCreationModal] = useState<boolean>(false)
  const [tasks, setTasks] = useState<Task[]>([])

  const [inProgressTasks, setInprogressTasks] = useState<Task[]>([])
  const [todoTasks, setTodoTasks] = useState<Task[]>([])
  const [doneTasks, setDoneTasks] = useState<Task[]>([])

  useEffect(() => {
    const fetchData = async () =>{
      try{
        const response = await axios.get('http://localhost:3000/tasks')
        setTasks(response.data); 
        console.log()
      } catch (error) {
        console.log(error)
      }
    }

   fetchData()
  },[])

  useEffect(() => {
    const updateData = () => {
      setDoneTasks(tasks.filter(task => task.status == Status.Done ))
      setInprogressTasks(tasks.filter(task => task.status == Status.InProgress ))
      setTodoTasks(tasks.filter(task => task.status == Status.ToDo ))
    } 
    updateData()
  },[tasks])
  
  return (
    <>
    <div className={`flex flex-grow box-border w-full relative`}>
      {showCreationModal && <CreationModal closeDispatch={setShowCreationModal}/>}
      <div className={`
        m-4 w-full
        rounded-[1.875rem]
        items-center
        justify-center
        flex flex-grow flex-row
        ${showFixedMetric  ? 'lg:w-3/4': '' }
      `}
        style={{ backgroundImage: `url(${kanbanCanvasBgImage})` }}
      >
        <KanbanColumn tasks={todoTasks} type='To do'/>
        <KanbanColumn tasks={inProgressTasks} type='In progress'/>
        <KanbanColumn tasks={doneTasks} type='Done'/>
        
      </div>

      <div className={`
        ${showFixedMetric  ? 'lg:w-1/4': 'hidden' }
        m-4
        lg:static
        absolute
        right-0`}
      >
         {showFixedMetric && <FixedMetrics closeDispatch={setShowFixedMetric} />} 
      </div>
      {!showFixedMetric && 
      <>
        <button className='m-4 absolute w-[45px] h-[45px] bg-[#94A3B8] rounded-full top-0 right-0' onClick={() => setShowFixedMetric(true)}><BsPinFill className='text-white m-auto' /></button>
      </>
      }
    </div>
    </>
  )
}

export default Kanban
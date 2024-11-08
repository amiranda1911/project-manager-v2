import { useState } from 'react'
import FixedMetrics from '../../Components/FixedMetrics'
import KanbanColumn from '../../Components/KanbanColumn'
import kanbanCanvasBgImage from '/public/kanban-bg.png' 
import { BsPinFill } from 'react-icons/bs'
import CreationModal from '../../Components/CreationModal'
const Kanban = () => {
  const [showFixedMetric, setShowFixedMetric] = useState<boolean>(false)
  const [showCreationModal, setShowCreationModal] = useState<boolean>(false)
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
        <KanbanColumn type='To do'/>
        <KanbanColumn type='In progress'/>
        <KanbanColumn type='Done'/>
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
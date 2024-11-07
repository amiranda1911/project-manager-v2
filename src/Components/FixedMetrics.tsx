import { BsPinFill } from 'react-icons/bs'
import FixedMetricUserCard from './FixedMetricUserCard'

interface FixedMetricsProps {
    closeDispatch: React.Dispatch<React.SetStateAction<boolean>>;
  }

const FixedMetrics = ({closeDispatch} : FixedMetricsProps) => {
  return (
    <>
        <section className='
            flex flex-col
            w-[15.47rem]
            h-[27.94rem] 
            bg-[#6C7D96]
            lg:w-[18.63rem] xl:w-[18.63rem] 2xl:w-[18.63rem]
            p-4
            rounded-[1.56rem]
            mx-auto
        '>
            <h2 className='
                flex justify-between items-center
                font-roboto font-bold
                text-white
                text-16'
            ><span>In This project</span> <button onClick={() => closeDispatch(false)}><BsPinFill /></button></h2>
            <FixedMetricUserCard name="John Doe" role='ProjectManager'/>
            <FixedMetricUserCard name="Jane Doe" role='Analyst'/>
            <FixedMetricUserCard name="John Doe" role='ProjectManager'/>
            <h2 className='
                font-roboto font-bold
                text-white
                text-16'
            >Metrics</h2>
            <div className='flex '>
                <div className='w-3/5'>
                    <div className='flex 
                        flex-col 
                        bg-[#F6F6F6]
                        rounded-[0.78rem]
                        p-1 my-2'
                    >
                        <h3 className='
                        font-roboto font-bold
                        text-12
                        text-[#160A60]
                        '>Total tasks</h3>
                        <p className='text-12 text-[#160A60] font-bold font-roboto'><span className='text-17 font-bold text-violet-dark'>10</span> To do</p>
                        <p className='text-12 text-[#160A60] font-bold font-roboto'><span className='text-17 font-bold text-orange-dark'>15</span> In Progress</p>
                        <p className='text-12 text-[#160A60] font-bold font-roboto'><span className='text-17 font-bold text-green-dark'>11</span> Done</p>
                    </div>
                    <div className='flex 
                        flex-col 
                        bg-[#F6F6F6]
                        rounded-[0.78rem]
                        p-1 my-2'>
                        <h3 className='text-12 font-roboto font-bold'>Total time estimated</h3>
                        <time className='text-21 flex justify-center font-roboto font-bold'>00:00</time>
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
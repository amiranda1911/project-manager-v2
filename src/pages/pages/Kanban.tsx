import KanbanColumn from '../../Components/KanbanColumn'
import kanbanCanvasBgImage from '/public/kanban-bg.png' 
const Kanban = () => {
  return (
    <div className='flex flex-grow'>
      <section id='kanban-canvas' className="
          flex flex-grow flex-row
          w-full
          md:w-[54.25rem] md:h-[44rem] 
          m-2 
          items-center
          justify-center
          rounded-[1.875rem]
        "
        style={{ backgroundImage: `url(${kanbanCanvasBgImage})` }}
        >
        <KanbanColumn type='To do'/>
        <KanbanColumn type='In progress'/>
        <KanbanColumn type='Done'/>
      </section>
    </div>
  )
}

export default Kanban
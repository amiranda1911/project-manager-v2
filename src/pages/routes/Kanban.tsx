import KanbanColumn from '../../Components/KanbanColumn'

const Kanban = () => {
  return (
    <>
      <section className=' 
      flex flex-grow flex-row
          w-full m-1
          bg-slate-400
          align-middle
          justify-center
          '>
        <KanbanColumn type='To do'/>
        <KanbanColumn type='In progress'/>
        <KanbanColumn type='Done'/>
      </section>
    </>
  )
}

export default Kanban
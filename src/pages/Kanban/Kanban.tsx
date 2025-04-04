// Importa as bibliotecas e componentes necessários
import { useEffect, useState } from 'react'
import FixedMetrics from '../../Components/FixedMetrics' // Componente para métricas fixas no layout
import KanbanColumn from '../../Components/KanbanColumn' // Componente que representa uma coluna no Kanban
import kanbanCanvasBgImage from '/public/kanban-bg.png'  // Imagem de fundo para o Kanban
import { BsPinFill } from 'react-icons/bs' // Ícone de pin para fixação de elementos na tela
import CreationModal from '../../Components/CreationModal' // Componente modal para criação de tarefas
import axios from 'axios' // Biblioteca para fazer requisições HTTP
import { Task } from '../../utils/Task' // Definição do tipo de tarefa
import { Status } from '../../utils/EnumStatus' // Enumeração para os status das tarefas
import MainFooter from '../../Components/MainFooter'
import MainHeader from '../../Components/MainHeader'
import logo from '../../img/logo 1.png';

// Componente principal do Kanban
const Kanban = () => {

  // Define o estado para controlar atualizações, visibilidade de métricas fixas e do modal de criação
  const [update, setUpdate] = useState<boolean>(true)
  const [showFixedMetric, setShowFixedMetric] = useState<boolean>(false)
  const [showCreationModal, setShowCreationModal] = useState<boolean>(false)
  const [tasks, setTasks] = useState<Task[]>([]) // Estado que armazena as tarefas

  // Estados que armazenam as tarefas filtradas por status
  const [inProgressTasks, setInprogressTasks] = useState<Task[]>([])
  const [todoTasks, setTodoTasks] = useState<Task[]>([])
  const [doneTasks, setDoneTasks] = useState<Task[]>([])

  const [tasksOwners, setTaskOwners] = useState<number[]>([])
  const [totalTime, setTotalTime] = useState<number>(0)

  // Hook useEffect para buscar tarefas do backend
  useEffect(() => {
    const fetchData = async () =>{
      try {
        const response = await axios.get('http://localhost:3000/tasks') // Faz requisição para buscar tarefas
        setTasks(response.data);  // Atualiza o estado com as tarefas recebidas
      } catch (error) {
        console.log(error) // Exibe erro no console se a requisição falhar
      }
    }

    fetchData()
    setUpdate(true) // Marca a necessidade de uma nova atualização
  }, [update]) // Executa sempre que `update` for alterado

  // Hook useEffect para atualizar tarefas com base nos status
  useEffect(() => {
    const updateData = () => {
      setDoneTasks(tasks.filter(task => task.status == Status.Done)) // Filtra tarefas concluídas
      setInprogressTasks(tasks.filter(task => task.status == Status.InProgress)) // Filtra tarefas em progresso
      setTodoTasks(tasks.filter(task => task.status == Status.ToDo)) // Filtra tarefas a serem feitas
      setTotalTime(tasks.reduce((acc, task)=> acc + task.estimated_time, 0))
    } 
    updateData()
  }, [tasks]) // Executa sempre que `tasks` for alterado

  //useEffect para listar usuarios no projeto
  useEffect(() => {
    setTaskOwners(tasks.map(task => task.owner_id).filter((owner, index, array)=> array.indexOf(owner) === index))
  },[tasks])

  // Função para fechar o modal de criação de tarefa e atualizar o estado
  const handleCloseCreationModal = () => {
    setShowCreationModal(false)
    setUpdate(false) // Marca que uma atualização não é mais necessária
  }

  return (
    <>
      <MainHeader pageType={'page3'} />
      <div className={`flex flex-grow box-border w-full relative`}>
        {/* Renderiza o modal de criação se estiver habilitado */}
        {showCreationModal && <CreationModal closeDispatch={handleCloseCreationModal} />}
        
        {/* Container principal do Kanban */}
        <div className={`
          m-5 w-full
          rounded-[1.875rem]
          justify-center
          flex flex-grow flex-col
          ${showFixedMetric  ? 'lg:w-3/4' : '' }
        `}
          style={{ backgroundImage: `url(${kanbanCanvasBgImage})` }} // Define a imagem de fundo
        >
          <div className='
            justify-center
            flex flex-grow flex-row
            items-center
            py-40
            md:py-20
            lg:py-16
          '>
            <KanbanColumn handleNewCard={setShowCreationModal} tasks={todoTasks} type='To do' /> {/* Coluna de tarefas a serem feitas */}
            <KanbanColumn handleNewCard={setShowCreationModal} tasks={inProgressTasks} type='In progress' /> {/* Coluna de tarefas em progresso */}
            <KanbanColumn handleNewCard={setShowCreationModal} tasks={doneTasks} type='Done' /> {/* Coluna de tarefas concluídas */}
          </div>
          
          <div className='bg-black-opacity-50 rounded-[0.9rem] p-3 absolute bottom-0 left-0 right-0 m-6 lg:hidden'>
            <header className='flex items-center'>
              <img src={logo} alt="Logo" className="h-8 w-8 md:h-[50px] md:w-[50px] mr-3 " />
              <h2 className='text-white text-16 font-medium font-roboto'>Trabalhar no aplicativo</h2>
            </header>
            <p className='text-14 font-roboto font-regular text-white py-2'>Adicione ideias, notas e faça um plano de organização de onde estiver.</p>
            <div className='flex flex-row justify-between'>
              <button className='bg-white rounded-full px-5 py-2 text-14 font-medium font-roboto'>Agora não</button>
              <button className='bg-violet-dark text-white rounded-full px-4 py-2 text-43 font-medium font-roboto'>Usar o aplicativo</button>
            </div>
          </div>

        </div>

        {/* Container para métricas fixas, visível somente se showFixedMetric for verdadeiro */}
        <div className={`
          ${showFixedMetric  ? 'lg:w-1/4' : 'hidden' }
          m-4
          lg:static
          absolute
          right-0
          flex flex-col
          items-center
        `}>
          {showFixedMetric && <FixedMetrics closeDispatch={setShowFixedMetric} owners={tasksOwners} totalDone={doneTasks.length} totalTodo={todoTasks.length} totalinProgress={inProgressTasks.length} totaltime={totalTime} />}
        </div>

        {/* Botão para exibir métricas fixas quando ocultas */}
        {!showFixedMetric && 
          <button
            className='m-4 absolute w-[45px] h-[45px] bg-[#94A3B8] rounded-full top-0 right-0'
            onClick={() => setShowFixedMetric(true)}
          >
            <BsPinFill className='text-white m-auto' />
          </button>
        }
      </div>
      <MainFooter/>
    </>
  )
}

export default Kanban

import React, {useState} from 'react';
import retrato from '../img/RETRAT_1-removebg 1.png';
import frame1 from '../img/frame.png';
import frame2 from '../img/frame2.png';
import frame3 from '../img/frame3.png';
import frame4 from '../img/frame4.png';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import Modal from './Modal';
import { Link } from 'react-router-dom';


const HomePage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  // Função para validar e-mail
  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Função para validar nome
  const validateName = (name: string) => {
    const regex = /^[A-Za-z\s]+$/;
    return name.length >= 2 && regex.test(name);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    setNameError('');

    if (!email || !name) {
      if (!email) setEmailError('Email is required');
      if (!name) setNameError('Name is required');
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email address');
    } else if (!validateName(name)) {
      setNameError('Name must be at least 2 characters and contain no numbers');
    } else {
      setModalOpen(true);
    }
  };
  return (
    <div>
      <MainHeader pageType="page1" />
      <main>
      <section className=" bg-[url('https://images.unsplash.com/photo-1546984575-757f4f7c13cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-[700px] lg:h-[644px] ">
  {/* Div com o título, parágrafo e botão à esquerda */}
  <div className="lg:flex  justify-center lg:m-auto  font-roboto lg:w-[1064px] lg:h-[272px] lg:justify-between md:p-10 p-1 ">
    <div className="bg-black-opacity-50 text-center p-10 rounded-[30px] mx-4 mb-7 mt-10 md:mx-10 md:text-left lg:w-[660px] lg:h-[285px] lg:translate-x-[-220px] ">
      <h1 className="mb-4 whitespace-nowrap font-bold text-19  flex justify-center lg:justify-start md:text-25">
        <span className="text-white mr-2">Welcome to</span>
        <span className="text-blue-lightBlue">Project Manager</span>
      </h1>
      <p className="mb-4 text-white text-14 md:text-16 md:text-justify leading-loose lg:leading-[24px]  ">
        Get your projects and ideas in order, all in one place! Sign up now and <br/> discover a smarter way to manage your work with efficiency and <br/> teamwork.
      </p>
      <Link to="/register"><button  className="border border-white rounded-[30px] px-10 py-1 text-white md:self-start md:w-[240px] md:h-[48px] hover:border-blue-hoverloguin">
        Get Started
      </button>
      </Link>
    </div>

    <img src={retrato} alt="Retrato" className="hidden lg:block absolute top-6  bg-cover " />

    {/* Div com as estatísticas à direita */}
    <div className="flex flex-col md:flex-row md:justify-around md:items-center items-center lg:flex-col  lg:w-28 space-y-5 lg:mt-14    font-roboto ">
      <div className="bg-primary-dark text-white rounded-[15px] w-[179px] h-[80px] shadow-md p-4">
        <h2>2000+</h2>
        <h2>Satisfied clients</h2>
      </div>
      <div className="bg-primary-dark text-white rounded-[15px] w-[179px] h-[80px] shadow-md p-4 ">
        <h2>400+</h2>
        <h2>Managed Projects</h2>
      </div>
      <div className="bg-primary-dark text-white rounded-[15px] w-[179px] h-[80px] shadow-md p-4">
        <h2>500+</h2>
        <h2>Kanban boards</h2>
      </div>
    </div>
  </div>
</section>


        <section className="bg-primary-color-dark text-white lg:relative p-8 lg:p-16   lg:py-10 ">
          
            <div className="flex flex-col justify-center items-center p-5 font-roboto ">
              <div className="text-left lg:w-[1100px] lg:h-[192px ]">
                <h2 className="text-primary-yellow mb-4 text-left font-semibold text-19 md:text-25 lg:m-auto   ">The manager</h2>
                <p className="text-justify mb-4 text-14 md:text-16">
                  Project Manager is a tool designed to make organizing and tracking your daily tasks easier than ever. With a clean, intuitive interface and powerful features, you can plan, prioritize, and keep tabs on your projects - whether you’re working solo or with a team.
                </p>
                <button className="text-purple-purpleabyss bg-white rounded w-[205px] py-3 md:self-start text-15 font-bold md:text-16 md:[240px] md:h-[48px] md:text-center hover:bg-purple-lavander hover:text-white">
                  Learn More
                </button>
              </div>
            

            <ul className="flex space-x-8 overflow-x-auto  lg:overflow-x-hidden p-5 mt-7 font-roboto ">
              <li className="flex-shrink-0 text-center">
                <img src="https://images.unsplash.com/photo-1688646545293-2755ea04cd8e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="imagem notebook" className="w-96 h-96 object-cover rounded mb-4 md:w-[340px] md:[340px] " />
                <h3 className='text-15 md:text-16'>Manage Project</h3>
                <h4 className='text-17 md:text-20'>20+ projects</h4>
              </li>
              <li className="flex-shrink-0 text-center">
                <img src="https://plus.unsplash.com/premium_photo-1661964056895-df72cdd98e62?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hcGElMjBkYSUyMHZpYWdlbXxlbnwwfHwwfHx8MA%3D%3D" alt="imagem tasks" className="w-96 h-96  object-cover rounded mb-4 md:w-[340px] md:[340px]" />
                <h3 className='text-15 md:text-16'>Track Tasks</h3>
                <h4 className='text-17 md:text-20 '>50+ tasks</h4>
              </li>
              <li className="flex-shrink-0 text-center">
                <img src="https://plus.unsplash.com/premium_photo-1664478124560-260c7402fddc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="imagem reuniao" className="w-96 h-96  object-cover rounded mb-4 md:w-[340px] md:[340px]" />
                <h3  className='text-15 md:text-16'>Collaborate</h3>
                <h4 className='text-17 md:text-20'>10+ team members</h4>
              </li>
            </ul>
            </div>
        </section>

        <section className="flex flex-col items-center text-center bg-purple-lavander text-white pb-[59px] font-roboto p-8 lg:p-16">
          <div>
            <div className="m-12 space-y-6">
              <h2 className="text-20 font-bold md:text-25 text-primary-yellow ">Featured Tools</h2>
              <p className="mb-4 whitespace-nowrap text-14 md:text-16">Tools to enhance your project management</p>
              <button className="px-3 py-3 bg-white rounded-md text-purple-purpleabyss font-bold text-15 md:text-16 md:w-[240px] md:h[48px] hover:bg-primary-color-dark hover:text-white ">View All</button>
            </div>
            <div>
              <ul className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:flex lg:flex-row md:gap-24 p-10 ">
                <li className="flex flex-col items-center md:order-1">
                  <img src={frame1} alt="ferramenta" className="mb-2" />
                  <div>
                    <h3 className="font-semibold text-18 md:text-20">Task Scheduler</h3>
                    <p className='text-16'>Plan and schedule tasks</p>
                  </div>
                </li>
                <li className="flex flex-col items-center md:order-2">
                  <img src={frame2} alt="relogio" className="mb-2" />
                  <div>
                    <h3 className="font-semibold text-18 md:text-20">Deadline Tracker</h3>
                    <p className='text-16'>Keep track of project deadlines</p>
                  </div>
                </li>
                <li className="flex flex-col items-center md:order-4">
                  <img src={frame3} alt="balao" className="mb-2" />
                  <div>
                    <h3 className="font-semibold text-18 md:text-20">Communication Hub</h3>
                    <p className='text-16'>Centralized team communication</p>
                  </div>
                </li>
                <li className="flex flex-col items-center md:order-3 lg:order-4">
                  <img src={frame4} alt="presente" className="mb-2" />
                  <div>
                    <h3 className="font-semibold text-18 md:text-20">Progress Report</h3>
                    <p className='text-16'>Track project progress</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section> 

        <section className="flex flex-col lg:flex-row lg:justify-center items-center bg-white2 text-purple-purpleabyss font-robotoa md:pb-8 lg:p-16">
          <div className="text-center m-14 lg:translate-x-[-155px] lg:text-left">
            <h1 className="w-full text-20 font-bold mb-6 md:text-25">Subscribe to Updates</h1>
            <p className='text-14 md:text-16'>Stay informed with our latest updates</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-96 h-80 p-4 bg-white rounded-lg shadow-md flex flex-col justify-between items-center lg:items-start"
          >
            <div className="w-full mb-4">
              <label htmlFor="email" className="block text-14 md:text-16 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className={`p-2 w-full rounded-md border-2 ${emailError ? 'border-red-500' : 'border-black-opacity-50'}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
              <p className="mb-4 text-black-opacity-50">We promise not to spam</p>
            </div>
            <div className="w-full mb-4">
              <label htmlFor="name" className="block text-14 md:text-16 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className={`p-2 w-full rounded-md border-2 ${nameError ? 'border-red-500' : 'border-black-opacity-50'}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
            </div>
            <button type="submit" className="h-9 w-[142px] p-2 bg-primary-color-dark text-white rounded-md text-15 md:text-16 hover:bg-hoversubscribe">
              Subscribe
            </button>
          </form>
        </section>
        
        {/* Modal que será exibido após inscrição */}
        <Modal isOpen={modalOpen} closeModal={() => setModalOpen(false)} />
      </main>
      <MainFooter />
    </div>
  );
};

export default HomePage;

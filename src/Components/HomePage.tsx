import React from 'react';
import retrato from '../img/RETRAT_1-removebg 1.png';
import frame1 from '../img/frame.png'
import frame2 from '../img/frame2.png'
import frame3 from '../img/frame3.png'
import frame4 from '../img/frame4.png'
import MainHeader from './MainHeader';

const HomePage = () => {
  return (
    <div>
      <MainHeader pageType='page1' />
      <main>
        <section className="flex flex-col lg:flex-row items-center bg-[url('https://images.unsplash.com/photo-1546984575-757f4f7c13cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center  lg:h-[644px] ">
          {/* Seção de Apresentação */}
          <div className=' bg-black-opacity-50 text-center p-10 rounded-[30px] m-2 mb-7 mt-14 md:flex md:flex-col md:mx-10 lg:w-1/2 '>
  <h1 className='mb-4 text-[24px] whitespace-nowrap w-full'>
    <span className='text-white mr-4'>Welcome to</span>
    <span className='text-blue-lightBlue'>Project Manager</span>
  </h1>
  <p className='mb-4 w-full md:text-justify text-white'>
    Get your projects and ideas in order, all in one place! Sign up now and discover a smarter way to manage your work with efficiency and teamwork.
  </p>
  <button className='border border-white rounded-[30px] px-10 py-1 md:self-start text-white'>
    Get Started
  </button>
</div>
          {/* Imagem */}
          <img src={retrato} alt="Retrato" className="hidden lg:block lg:absolute  " />

          {/* Seção de Estatísticas */}
          <div className="flex flex-col md:flex-row items-center md:justify-center space-y-4 md:space-y-0 md:space-x-5 gap-5 lg:flex-col">
            <div className="bg-primary-dark text-white rounded-[15px] px-7 py-4 shadow-md ">
              <p>2000+</p>
              <p>Satisfied clients</p>
            </div>
            <div className="bg-primary-dark text-white rounded-[15px] px-6 py-3 shadow-md ">
              <p>400+</p>
              <p>Managed Projects</p>
            </div>
            <div className="bg-primary-dark text-white rounded-[15px] px-7 py-4 shadow-md ">
              <p>500+</p>
              <p>Kanban boards</p>
            </div>
          </div>
        </section>
    <section className='bg-primary-color-dark text-white lg:relative'>
      <div className='flex flex-col items-center p-5'>
      <div className='text-center md:text-left md:items-start'>
      <h2 className='text-primary-yellow mb-4 text-left'>The Manager</h2>
      <p className='text-justify mb-4'>
        Project Manager is a tool designed to make organizing and tracking your daily tasks easier than ever. With a clean, intuitive interface and powerful features, you can plan, prioritize, and keep tabs on your projects - whether you’re working solo or with a team.
      </p>
      <button className='text-purple-purpleabyss bg-white rounded px-3 py-3 md:self-start md:text-left'>Learn More</button>
    </div>
  </div>

  {/* Container para as imagens na horizontal */}
  <ul className='flex space-x-8 overflow-x-auto p-5'>
    <li className='flex-shrink-0 text-center'>
      <img
        src="https://images.unsplash.com/photo-1688646545293-2755ea04cd8e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="imagem notebook"
        className='w-64 h-40 object-cover rounded mb-4'
      />
      <h3>Manage Project</h3>
      <p>20+ projects</p>
    </li>

    <li className='flex-shrink-0 text-center'>
      <img
        src="https://plus.unsplash.com/premium_photo-1661964056895-df72cdd98e62?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hcGElMjBkYSUyMHZpYWdlbXxlbnwwfHwwfHx8MA%3D%3D"
        alt="imagem tasks"
        className='w-64 h-40 object-cover rounded mb-4'
      />
      <h3>Track Tasks</h3>
      <p>50+ tasks</p>
    </li>

        <li className='flex-shrink-0 text-center'>
        <img
        src="https://plus.unsplash.com/premium_photo-1664478124560-260c7402fddc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="imagem reuniao"
        className='w-64 h-40 object-cover rounded mb-4'
          />
            <h3>Collaborate</h3>
            <p>10+ team members</p>
        </li>
        </ul>
    </section>
    <section className="flex flex-col items-center text-center bg-purple-lavander text-white pb-[59px]">
      <div className="m-12 space-y-6">
        <h2 className="text-2xl font-bold text-primary-yellow">Featured Tools</h2>
        <p className="mb-4">Tools to enhance your project management</p>
        <button className="px-3 py-3 bg-white rounded-md text-purple-purpleabyss">View All</button>
      </div>
    <div>
      <ul className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-6"> 
        <li className="flex flex-col items-center md:order-1">
         <img src={frame1} alt="ferramenta" className="mb-2" />
          <div>
          <h3 className="font-semibold">Task Scheduler</h3>
          <p>Plan and schedule tasks</p>
        </div>
      </li>
      <li className="flex flex-col items-center md:order-2">
        <img src={frame2} alt="relogio" className="mb-2" />
        <div>
          <h3 className="font-semibold">Deadline Tracker</h3>
          <p>Keep track of project deadlines</p>
        </div>
      </li>
      <li className="flex flex-col items-center md:order-4">
        <img src={frame3} alt="balao" className="mb-2" />
        <div>
          <h3 className="font-semibold">Communication Hub</h3>
          <p>Centralized team communication</p>
        </div>
      </li>
      <li className="flex flex-col items-center md:order-3">
        <img src={frame4} alt="presente" className="mb-2" />
        <div>
          <h3 className="font-semibold">Progress Report</h3>
          <p>Track project progress</p>
        </div>
        </li>
      </ul>
   </div>
  </section>

  <section className="flex flex-col items-center bg-white2 text-purple-purpleabyss">
  <div className="text-center m-5 space-y-">
    <h1 className="w-full md:text-[40px]">Subscribe to Updates</h1>
    <p>Stay informed with our latest updates</p>
  </div>

  <form className="w-80 h-80 p-4 bg-white rounded-lg shadow-md flex flex-col justify-between items-center">
    <div className="w-full mb-4">
      <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        className="p-2 w-full rounded-md border-2 border-black-opacity-50"
      />
      <p className=" mb-4 text-black-opacity-50">We promise not to spam</p>
    </div>

    

    <div className="w-full mb-4">
      <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        className="p-2 w-full rounded-md border-2 border-black-opacity-50"
      />
    </div>

    <button className="w-full p-2 bg-primary-color-dark text-white rounded-md">Subscribe</button>
    </form>
  </section>
  </main>
  
    </div>
  );
};

export default HomePage;

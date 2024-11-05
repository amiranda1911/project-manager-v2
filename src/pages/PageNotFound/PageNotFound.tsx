

const PageNotFound = () => {
  return (
    <>
      {/*
        update template:
        <html class="h-full">
        <body class="h-full">
        flex justify-center w-full
      */}
      <header className="h-[5rem] bg-blue-950"> </header>

      <main className="flex flex-col h-screen items-center justify-center bg-white 
            md:flex-row md:w-[43.75rem] md:mx-auto lg:w-[59.75rem]">
        
        <div className="flex flex-col h-full justify-center gap-y-[3.75rem] flex-grow md:flex-row md:w-[43.938rem] md:mx-auto">
            
            <div className="flex items-center justify-center md:place-content-start">
                <img 
                src="src\assets\PostIt404.svg" 
                alt="404 Not Found" 
                className="w-[12.68rem] md:w-[20.912rem] lg:w-[28.438rem]"
                />
            </div>                        
            {/*<w-[12.68rem] h-[11.81rem]  justify-center justify-evenly>*/}

            <div className="flex flex-col items-center text-center w-[14.375rem] mx-auto md:place-content-center md:w-[20.22rem]">   
                <h1 className="font-roboto font-normal text-26 md:text-[6rem] md:w-[20.22rem] md:text-left lg:w-[27.5rem]">404</h1>
                <p className=" font-roboto font-normal text-black text-[1.125rem] leading-[2] md:text-19 md:text-left lg:w-[27.5rem]">
                Oops! Nothing to see here, just a lost kanban task.
                </p>
                <a href="/" className="pt-3 text-[#4f46e5] underline font-roboto font-bold text-15 md:text-18 lg:w-[24.813rem] lg:text-right lg:pr-6" >
                    Go back to home
                </a>            
            </div>
        </div>
      </main>

      <footer className="h-[12.875rem] bg-blue-900"> </footer>
    </>
  )
}

export default PageNotFound
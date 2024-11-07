import MainHeader from "../../Components/MainHeader"
import MainFooter from "../../Components/MainFooter"

const PageNotFound = () => {
  return (
    <>      
      <header>
        <MainHeader pageType='page2'/>
      </header>

      <main className="flex flex-col h-screen items-center bg-white 
            md:flex-row md:w-[43.75rem] md:mx-auto lg:w-[59.75rem]">
        
        <div className="flex flex-col h-full pt-9 flex-grow md:flex-row md:w-[43.938rem] md:mx-auto">
            
            <div className="flex items-center justify-center md:place-content-start">
                <img 
                src="src\assets\PostIt404.svg" 
                alt="404 Not Found" 
                className="w-[12.68rem] md:w-auto lg:w-[28.438rem]"
                />
            </div>                        
            
            <div className="flex flex-col items-center text-center w-[14.375rem] mx-auto md:place-content-center md:w-[20.22rem]">   
                <h1 className="font-roboto font-normal text-26 md:text-[6rem] md:w-[20.22rem] md:text-left lg:w-[27.5rem]">404</h1>
                <p className="font-roboto font-normal text-black-black text-[1.125rem] leading-[2] md:text-19 md:text-left lg:w-[27.5rem]">
                Oops! Nothing to see here, just a lost kanban task.
                </p>
                <a href="/login" className="pt-3 text-[#4f46e5] underline font-roboto font-bold text-15 md:text-18 lg:w-[24.813rem] lg:text-right lg:pr-6" >
                    Go back to home
                </a>            
            </div>
            
        </div>
      </main>

      <footer>
        <MainFooter />
      </footer>
    </>
  )
}

export default PageNotFound
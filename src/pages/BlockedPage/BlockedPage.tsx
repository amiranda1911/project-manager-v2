import MainHeader from "../../Components/MainHeader"
import MainFooter from "../../Components/MainFooter"

const BlockedPage = () => {
  return (
    <>
    <header>
        <MainHeader pageType='page2'/>
    </header>

    <main className="flex flex-col h-screen items-center justify-center bg-white 
            md:flex-row md:w-[43.75rem] md:mx-auto lg:w-[59.75rem]">
      
        <div className="flex flex-col h-full justify-center flex-grow md:flex-row md:w-[43.938rem] md:mx-auto">
          
            <div className="flex items-center justify-center md:place-content-start">
                <img 
                src="src\assets\Lock403.svg" 
                alt="403 Not Found" 
                className="w-[12.68rem] md:w-[22.912rem] lg:w-[28.438rem]"
                />
            </div>
                      
            <div className="flex flex-col items-center text-center w-[14.375rem] mx-auto md:place-content-center md:w-[20.22rem]  ">
                <h1 className="font-roboto font-normal text-26 md:text-[6rem] md:w-[20.22rem] md:text-left lg:w-[27.5rem]">403</h1>
                <p className="font-roboto font-normal text-black text-[1.125rem] leading-[2] md:text-19 md:text-left lg:w-[27.5rem]">
                    Nothing to see here... yet! To see this content, you need to 
                    <span> 
                        <a href="/LoginPage" className="text-[#4f46e5] underline font-roboto font-bold text-15 md:text-19"> log in</a>
                    </span>
                </p>                      
            </div>
            
        </div>
    </main>

    <footer>
        <MainFooter />
    </footer>
    </>
  );
}

export default BlockedPage


const BlockedPage = () => {
  return (
    <>
    <header className="h-[5rem] bg-blue-950"> </header>

    <main className="grid grid-cols-1 md:grid-cols-2 md:w-[43.75rem] h-screen items-center justify-center bg-white">
      
      <div className="flex flex-col md:flex-row flex-grow justify-between">
          
          <div className="flex items-center justify-center md:place-content-start">
              <img 
              src="src\assets\Lock403.svg" 
              alt="403 Not Found" 
              className="w-[12.68rem] h-[11.81rem]"
              />
          </div>
                      
          <div className="flex flex-col items-center justify-center  ">
                <h1 className="font-roboto font-normal text-26">403</h1>
                <p className="font-roboto font-normal text-black text-[1.125rem]">
                Nothing to see here... yet! To see this content, you need to  
                <span> 
                    <a href="/" className="text-[#4f46e5] underline font-roboto font-bold text-15"> log in</a>
                </span>
                </p>                      
          </div>
      </div>
    </main>

    <footer className="h-[12.875rem] bg-blue-900"> </footer>
    </>
  );
}

export default BlockedPage
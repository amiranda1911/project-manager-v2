import FormButtons from "./FormButtons"

const FormLogin = () => {
  return (
    <>
    <form className="flex flex-col gap-[1.5rem]">  {/*onSubmit={handleSubmit} */}                        
        <div className="flex flex-col w-[20.563rem] h-[3.75rem]">
            <label htmlFor="email" className="font-roboto font-medium text-left text-14 text-[#331436]">Last Name</label>                  
            <input type="email" id="email" placeholder="Enter your email" className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem]
            w-[20.563rem] h-[2.25rem] border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080] md:w-[32.5rem]"/>
        </div>
        <div className="flex flex-col w-[20.563rem] h-[3.75rem]">
            <label htmlFor="Password" className="font-roboto font-medium text-left text-14 text-[#331436]">Last Name</label>                  
            <input type="paswword" id="Password" placeholder="Enter your password" className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem]
            w-[20.563rem] h-[2.25rem] border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080] md:w-[32.5rem]"/>
        </div>
        <div className="mt-[2.938rem] mb-[2.5rem] md:mt-[2rem] md:mb-[1.938rem]">
        <FormButtons buttonText="Login" />
        </div>
    </form> 
    </>
  )
}

export default FormLogin
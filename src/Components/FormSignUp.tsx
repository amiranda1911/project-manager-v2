import FormButtons from "./FormButtons"

const FormSignUp = () => {
  return (
    <>
    <form className="flex flex-col gap-[1.5rem] md:mt-[1.938rem]">  {/*onSubmit={handleSubmit} */}
        
        <section className="md:flex md:flex-row md:gap-[1.125rem] md:max-w-[32.5rem]">
            <div className="flex flex-col w-[20.563rem] h-[3.75rem]">
                <label htmlFor="firstName" className="font-roboto font-medium text-left text-14 text-[#331436]">First Name</label>
                <input type="text" id="firstName" placeholder="Enter your first name" className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem] 
                w-auto h-[2.25rem] border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080]"
                    //value={name}
                    //onChange={(e) => setName(e.target.value)}
                />   
            </div>

            <div className="flex flex-col w-[20.563rem] h-[3.75rem]">
                <label htmlFor="lastName" className="font-roboto font-medium text-left text-14 text-[#331436]">Last Name</label>                  
                <input type="text" id="lastName" placeholder="Enter your last name" className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem]
                w-auto h-[2.25rem] border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080]"/>
            </div>
        </section>
        
        <div className="flex flex-col w-[20.563rem] h-[3.75rem]">
            <label htmlFor="email" className="font-roboto font-medium text-left text-14 text-[#331436]">Email</label>                  
            <input type="email" id="email" placeholder="Enter your email" className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem]
            w-auto h-[2.25rem] border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080] md:w-[32.5rem]"/>
        </div>

        <div className="flex flex-col w-[20.563rem] h-[3.75rem]">
            <label htmlFor="jobPosition" className="font-roboto font-medium text-left text-14 text-[#331436]">Job Position</label>                  
            <input type="text" id="jobPosition" placeholder="Enter your job position (example: Project Manager)" className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem]
            w-auto h-[2.25rem] truncate border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080] md:w-[32.5rem]"/>
        </div>

        <div className="flex flex-col w-[20.563rem] h-[3.75rem]">
            <label htmlFor="Password" className="font-roboto font-medium text-left text-14 text-[#331436]">Password</label>                  
            <input type="paswword" id="Password" placeholder="Enter your password" className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem]
            w-auto h-[2.25rem] border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080] md:w-[32.5rem]"/>
        </div>
        <div className=" mt-[1.413rem] mb-[1.313rem] md:mt-[2rem] md:mb-[1.938rem]">
        <FormButtons buttonText="Create an account" />
        </div>
    </form>    
    </>
  )
}

export default FormSignUp
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <>
    <main>
        <div className="lg:flex" >

            {/* Background image */}
            <div className="relative bg-cover bg-center h-screen lg:w-[39.125rem]" style={{ backgroundImage: `url('LoginImg.svg')` }}>
            </div>

            {/* Translucent background */}
            <div className="absolute inset-0 bg-white opacity-70 lg:hidden">
            </div> 
            
            {/*White Square */}    
            <div className="flex items-center justify-center w-[22.063rem] h-[39rem] bg-white absolute inset-0 m-auto rounded-[1.875rem] 
            md:w-[41rem] md:h-[39rem] lg:hidden">            
            </div>   

            {/*All the info in white space */}
            <div className="flex items-center justify-center w-[22.063rem] h-[39rem] absolute inset-0 m-auto 
            md:w-[41rem] md:h-[39rem] lg:w-auto lg:static "> 

                <div>
                    <section className="leading-[1.5] pb-[1.5rem]">
                        <h1 className="font-roboto font-bold text-center text-19 text-[#331436] pb-[1.5rem] md:text-left md:text-25">Login Information</h1>
                        <p className="font-roboto font-normal text-center text-15 text-[#331436] md:text-left md:text-16">Enter your credentials</p>
                        <p className="font-roboto font-normal text-center text-15 text-[#331436] md:text-left md:text-16">New here? Let´s take you to 
                            <span><a href="/login" className="text-[#4f46e5] font-roboto font-bold text-15 md:text-16 cursor-pointer"> sign up.</a></span>
                        </p>
                    </section>

                    <section className="flex flex-col">
                        <form className="flex flex-col gap-[1.5rem]">  {/*onSubmit={handleSubmit} */}                        
                            <div className="flex flex-col w-[20.563rem] h-[3.75rem]">
                                <label htmlFor="email" className="font-roboto font-medium text-left text-14 text-[#331436]">Email</label>                  
                                <input type="email" id="email" placeholder="Enter your email" className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem]
                                w-[20.563rem] h-[2.25rem] border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080] md:w-[32.5rem]"/>
                            </div>
                            <div className="flex flex-col w-[20.563rem] h-[3.75rem]">
                                <label htmlFor="Password" className="font-roboto font-medium text-left text-14 text-[#331436]">Password</label>                  
                                <input type="paswword" id="Password" placeholder="Enter your password" className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem]
                                w-[20.563rem] h-[2.25rem] border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080] md:w-[32.5rem]"/>
                            </div>
                        </form>

                        <button type="submit" className="mx-auto w-[20.563rem] h-[2.25rem] bg-[#1e293b] rounded-md text-white font-roboto font-medium text-15 mt-[2.938rem] mb-[2.5rem] 
                        cursor-pointer hover:shadow-lg hover:brightness-150 transition duration-200
                        md:w-[31.75rem] md:h-[3rem] md:text-16" > 
                            Login 
                        </button>

                        <h3 className="font-roboto font-normal text-center text-14 text-[#331436] mb-[0.563rem] md:text-16">or sign up with...</h3>
                        
                        <div className="flex flex-row items-center justify-center gap-[0.813rem]">
                            <a href="/" className="flex items-center justify-center border rounded-full border-[#3333334D] w-[6.875rem] h-[3.5rem] text-[#0C82EE] text-23 cursor-pointer hover:shadow-lg hover:brightness-125" > <FaFacebook /> </a>
                            <a href="/" className="flex items-center justify-center border rounded-full border-[#3333334D] w-[6.875rem] h-[3.5rem] text-23 cursor-pointer hover:shadow-lg hover:brightness-125"> <FcGoogle /> </a>
                        </div>
                    </section>    
                </div>

            </div>    
        </div>
    </main>
    </>
  )
}

export default LoginPage
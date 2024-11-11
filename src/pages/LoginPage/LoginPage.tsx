import MainHeader from "../../Components/MainHeader";
import MainFooter from "../../Components/MainFooter";
import FormLogin from "../../Components/FormLogin";
import BottomButtons from "../../Components/BottomButtons";

const LoginPage = () => {
  return (
    <>

    <header className="z-10">
        <MainHeader pageType='page2' />
    </header>

    <main className="min-h-[52rem] md:min-h-[58rem] lg:min-h-[50rem] h-screen">
        <div className=" lg:flex" >

            {/* Background image */}
            <div className="relative min-h-[52rem] md:min-h-[58rem] bg-cover bg-center h-screen lg:w-[39.125rem] lg:min-h-[50rem] lg:h-auto lg:order-2" style={{ backgroundImage: `url('LoginImg.svg')` }}>
            </div>

            {/* Translucent background */}
            <div className="absolute inset-0 bg-white opacity-70 h-screen min-h-[53rem] md:min-h-[60rem] mt-16 lg:hidden mt-">
            </div>                                                          
            
            {/*White Square */}    
            <div className="flex items-center justify-center w-[22.063rem] h-[36rem] bg-white absolute inset-0 m-auto mt-28 md:mt-36 rounded-[1.875rem] 
            md:w-[41rem] md:h-[39rem] lg:hidden">            
            </div>   

            {/*All the info in white space */}
            <div className="flex items-center justify-center w-[22.063rem] h-[44.125rem] absolute inset-0 m-auto mt-10
            md:w-[41rem] md:h-[44.125rem] lg:w-auto lg:static lg:mt-auto lg:order-1"> 
            
                <div>
                    <section className="leading-[1.5] pb-[1.5rem]">
                        <h1 className="font-roboto font-bold text-center text-19 text-[#331436] pb-[1.5rem] mt-0
                         md:text-left md:mt-36 md:text-25 lg:mt-0">Login Information</h1>
                        <p className="font-roboto font-normal text-center text-15 text-[#331436] md:text-left md:text-16">Enter your credentials</p>
                        <p className="font-roboto font-normal text-center text-15 text-[#331436] md:text-left md:text-16">New here? Let´s take you to 
                            <span><a href="/login" className="text-[#4f46e5] font-roboto font-bold text-15 md:text-16 cursor-pointer"> sign up.</a></span>
                        </p>
                    </section>

                <section className="flex flex-col">
                    <FormLogin />

                    <BottomButtons />
                </section>    
            </div>
        </div>    
    </div>
    </main>
    <footer className="z-20">
        <MainFooter />
    </footer>
    </>
  )
}

export default LoginPage
import FormSignUp from "../../Components/FormSignUp";
//import BottomButtons from "../../Components/BottomButtons";
import LoginButtons from "../../Components/BottomButtons";
import MainHeader from "../../Components/MainHeader";
import MainFooter from "../../Components/MainFooter";

const SignUpPage = () => {

  return (
    <>
    <header className="z-10">
        <MainHeader pageType='page2' />
    </header>

    <main className="min-h-[52rem] md:min-h-[58rem] lg:min-h-[50rem]">
        <div className="lg:flex">
    
            {/* Background image */}
            <div className="relative min-h-[52rem]  md:min-h-[58rem] bg-cover bg-center h-screen lg:hidden" style={{ backgroundImage: `url('SignUpImg.svg')` }}>
            </div>

            {/* Translucent background */}
            <div className="absolute inset-0 bg-white opacity-70 h-screen min-h-[52rem] md:min-h-[59rem] lg:min-h-[47rem] mt-[4.5rem] lg:hidden">
            </div> 
            
            {/*White Square */}    
            <div className="flex items-center justify-center w-[22.063rem] h-[48rem] bg-white absolute inset-0 m-auto mt-28 md:mt-40 rounded-[1.875rem] 
            md:w-[41rem] md:h-[48rem] lg:hidden">            
            </div>  
            
            {/*All the info in white space */}
            <div className="flex items-center justify-center w-[22.063rem] h-[44.125rem] absolute inset-0 m-auto mt-20
                md:w-[41rem] md:h-[44.125rem] lg:w-auto lg:static lg:mt-auto">
                        
                <div> 
                    <section className="leading-[1.5] pb-[0.75rem]">
                        <h1 className="font-roboto font-bold text-center text-19 text-[#331436] pb-4 pt-5 mt-24 md:text-left md:text-25 md:mt-44 lg:mt-0 lg:pt-0">Sign up Information</h1>
                        <p className="font-roboto font-normal text-center text-15 text-[#331436] md:text-left md:text-16">Already have an account? 
                            <span><a href="/login" className="text-[#4f46e5] font-roboto font-bold text-15 cursor-pointer md:text-16"> Log in.</a></span>
                        </p>
                    </section>

                    <section className="flex flex-col">
                        <FormSignUp />

                        <LoginButtons/>
                        {/*<BottomButtons />*/}

                    </section>   
                </div>
            </div>

            {/* Side image */}
            <div className="lg:bg-cover lg:w-[39.125rem] lg:min-h-[50rem] lg:h-screen" style={{ backgroundImage: `url('SignUpImg.svg')`}}>
            </div>
            
        </div>
    </main>
    
    <footer className="z-10">
        <MainFooter />
    </footer>
    </>
    
  )
}

export default SignUpPage
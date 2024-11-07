import FormSignUp from "../../Components/FormSignUp";
import BottomButtons from "../../Components/BottomButtons";
import MainHeader from "../../Components/MainHeader";
import MainFooter from "../../Components/MainFooter";

const SignUpPage = () => {

    {/*const Form = () => {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}`);
    }; */}

  return (
    <>
    <header className="z-10">
        <MainHeader pageType='page2' />
    </header>

    <main >
        <div className="lg:flex">
    
            {/* Background image */}
            <div className="relative bg-cover bg-center h-screen lg:hidden" style={{ backgroundImage: `url('SignUpImg.svg')` }}>
            </div>

            {/* Translucent background */}
            <div className="absolute inset-0 bg-white opacity-70 min-h-screen h-screen mt-16 lg:hidden">
            </div> 
            
            {/*White Square */}    
            <div className="flex items-center justify-center w-[22.063rem] h-[44.125rem] bg-white absolute inset-0 m-auto mt-20 rounded-[1.875rem] 
            md:w-[41rem] md:h-[45.813rem] lg:hidden">            
            </div>  
            
            {/*All the info in white space */}
            <div className="flex items-center justify-center w-[22.063rem] h-[44.125rem] absolute inset-0 m-auto mt-20
                md:w-[41rem] md:h-[44.125rem] lg:w-auto lg:static lg:mt-auto">
                        
                <div> 
                    <section className="leading-[1.5] pb-[0.75rem]">
                        <h1 className="font-roboto font-bold text-center text-19 text-[#331436] pb-[1rem] md:text-left md:text-25">Sign up Information</h1>
                        <p className="font-roboto font-normal text-center text-15 text-[#331436] md:text-left md:text-16">Already have an account? 
                            <span><a href="/login" className="text-[#4f46e5] font-roboto font-bold text-15 cursor-pointer md:text-16"> Log in.</a></span>
                        </p>
                    </section>

                    <section className="flex flex-col">
                        <FormSignUp />

                        <BottomButtons />

                    </section>   
                </div>
            </div>

            {/* Side image */}
            <div className="lg:bg-cover lg:w-[39.125rem] lg:min-h-screen lg:h-screen" style={{ backgroundImage: `url('SignUpImg.svg')`}}>
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
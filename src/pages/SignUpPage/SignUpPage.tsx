

const SignUpPage = () => {

    {/*const Form = () => {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}`);
    }; */}


  return (
    <>
    <main className="bg-cover bg-center h-screen" style={{ backgroundImage: `url('public/SignUpImg.svg')`}}>
    <div className="absolute inset-0 bg-white opacity-70"></div>
    <section className= "relative z-10">    
        <div>
            <h1>Sign up Information</h1>
            <p>Already have an account? 
                <span><a href="/LoginPage" className="text-[#4f46e5] underline font-roboto font-bold text-15"> Log in.</a></span>
            </p>
        </div>
            <form className="">  {/*onSubmit={handleSubmit} */}
                <section>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input 
                        type="text" 
                        id="firstName" 
                        placeholder="Enter your first name"
                        //value={name}
                        //onChange={(e) => setName(e.target.value)}
                        />                                       
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>                  
                        <input type="text" id="lastName" placeholder="Enter your last name"/>
                    </div>
                </section>

                    <div>
                        <label htmlFor="email">Last Name</label>                  
                        <input type="email" id="email" placeholder="Enter your email"/>
                    </div>
                    <div>
                        <label htmlFor="jobPosition">Last Name</label>                  
                        <input type="text" id="jobPosition" placeholder="Enter your job position (example: Project Manager)"/>
                    </div>
                    <div>
                        <label htmlFor="Password">Last Name</label>                  
                        <input type="paswword" id="Password" placeholder="Enter your password"/>
                    </div>

            </form>
            <button type="submit" className=""> Login </button>
            <h3>or sign up with...</h3>
            <div>
                <a href="/" className=""> fb</a>
                <a href="/" className=""> google</a>
            </div>
        </section>
        
    </main>
    
    </>
    
  )
}

export default SignUpPage
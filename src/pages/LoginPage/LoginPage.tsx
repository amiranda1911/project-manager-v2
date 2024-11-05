

const LoginPage = () => {
  return (
    <>
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url('public/LoginImg.svg')`}}>
    <div className="absolute inset-0 bg-white opacity-70"></div>
        <div>
            <h1>Login Information</h1>
            <p>Enter your credentials</p>
            <p>New here? Let´s take you to 
                <span><a href="/LoginPage" className="text-[#4f46e5] underline font-roboto font-bold text-15"> Sign up.</a></span>
            </p>
        </div>
            <form className="">  {/*onSubmit={handleSubmit} */}
                    
                    <div>
                        <label htmlFor="email">Last Name</label>                  
                        <input type="email" id="email" placeholder="Enter your email"/>
                    </div>
                    <div>
                        <label htmlFor="Password">Last Name</label>                  
                        <input type="paswword" id="Password" placeholder="Enter your password"/>
                    </div>

            </form>
            <button type="submit" className=""> Create an account </button>
            <h3>or sign up with...</h3>
            <div>
                <a href="/" className=""> fb</a>
                <a href="/" className=""> google</a>
            </div>
        
    </div>
    
    </>
  )
}

export default LoginPage
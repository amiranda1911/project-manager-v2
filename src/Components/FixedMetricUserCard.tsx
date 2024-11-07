const img = `https://images.unsplash.com/photo-1728887823143-d92d2ebbb53a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

interface User{
    name: string,
    role:string
}

const FixedMetricUserCard = ({name, role} : User) => {
  return (
    <div  className="flex 
                    flex-row
                    bg-[#F6F6F6]
                    rounded-[0.78rem]
                    my-1
                    p-1
                    ">
        <img className="p-1 w-[2.49rem] h-[2.49rem] rounded-full" src={img}/>
        <div>
            <h2 className="text-14 font-bold">{name}</h2>
            <h3 className="text-12 font-bold">{role}</h3>
        </div>
    </div>
  )
}

export default FixedMetricUserCard
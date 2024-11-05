export const SettingsProfile = () => {

    const img = `https://images.unsplash.com/photo-1728887823143-d92d2ebbb53a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`

  return (
    <div className="p-24 leading-9">
        <div className="my-5">
            <div className="flex items-center mb-9">
                <picture className="flex w-44 rounded mr-8">
                    <img src={img} alt="Imagem de perfil" className="w-full h-full rounded-full shadow-md" /> {/*shadow arrumar*/}
                </picture>
                <div>
                    <h1 className="text-5xl font-medium">John Doe</h1>
                    <p className="text-19 opacity-70">john.doe@example.com</p>
                </div>
            </div>
            <div>
                <h2 className="text-20 font-medium">Project profile</h2>
                <p className="opacity-50">Update your profile information in the sections below.</p>
            </div>
        </div>
        <hr />
        <div className="flex justify-between">
            <div className="w-1/4 min-w-96 mt-2">
                <h2 className="text-2xl font-medium">Basic information</h2>
                <p>Update your name and e-mail in this section. Note: this information will be public to all your project colleagues and can be changed anytime.</p>
            </div>
            <form action="" method="post" className="flex w-3/6 flex-wrap mx-11 mt-6 mb-10 leading-5 text-sm">
                <div className="flex flex-col w-1/2">
                    <label htmlFor="update-first-name" className="font-medium my-1.5">First name</label>
                    <input type="text" id="update-first-name" className="p-2 border border-gray-300 rounded-md mr-5" placeholder="New first name"/>
                </div>
                <div className="flex flex-col w-1/2">
                    <label htmlFor="update-last-name" className="font-medium my-1.5">Last name</label>
                    <input type="text" id="update-last-name" className="p-2 border border-gray-300 rounded-md" placeholder="New last name"/>
                </div>
                <div className="flex flex-col w-full mt-3.5">
                    <label htmlFor="update-email" className="font-medium my-1.5">E-mail</label>
                    <input type="email" id="update-email" className="p-2 border border-gray-300 rounded-md" placeholder="New e-mail"/>
                </div>
            </form>
        </div>
        <hr/>
        <div className="flex justify-between">
            <div className="w-1/4 min-w-96">
                <h2 className="text-2xl font-medium">Profile picture</h2>
                <p>Update your profile picture. Supported files are JPG, PNG, WebP and JPEG.</p>
            </div>
            <div  className="flex w-3/6 flex-wrap mx-11 my-6 leading-5 text-sm">
                <picture className="flex w-44 rounded mr-8">
                    <img src={img} alt="Imagem de perfil" className="w-full h-full rounded-full shadow-md" /> {/*shadow arrumar*/}
                </picture>
                <div>
                    <p>Add new profile picture</p>
                    <input type="file" />
                </div>
            </div>
        </div>
    </div>
  )
}

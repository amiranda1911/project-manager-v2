const SettingsProfile = () => {
  const img = `https://images.unsplash.com/photo-1728887823143-d92d2ebbb53a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

  return (
    <div className="p-5 text-sm/9 md:text-base/9 lg:p-24">
      <div className="my-5">
        <div className="flex items-center mb-9 w-full">
          <picture className="flex mr-4 md:mr-8">
            <img
              src={img}
              alt="Imagem de perfil"
              className="w-29 h-30 min-w-29 rounded-full shadow-md md:w-45 md:h-46"
            />{' '}
            {/*shadow arrumar*/}
          </picture>
          <div>
            <h1 className="text-21 font-medium md:text-5xl">John Doe</h1>
            <p className="text-xl opacity-70 md:text-19">
              john.doe@example.com
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-20 font-medium">Project profile</h2>
          <p className="text-black-opacity-50">
            Update your profile information in the sections below.
          </p>
        </div>
      </div>
      <hr className="my-4 lg:my-0" />
      <div className="flex flex-col  lg:flex-row lg:justify-between">
        <div className="w-1/4 min-w-96 mt-2">
          <h2 className="text-2xl font-medium">Basic information</h2>
          <p className="text-black-opacity-50">
            Update your name and e-mail in this section. Note: this information
            will be public to all your project colleagues and can be changed
            anytime.
          </p>
        </div>
        <form
          action=""
          method="post"
          className="flex flex-col flex-wrap  mt-6 mb-10 leading-5 text-sm md:w-10/12 md:flex-row lg:mx-11 lg:w-3/6"
        >
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="update-first-name" className="font-medium my-1.5 text-purple-850">
              First name
            </label>
            <input
              type="text"
              id="update-first-name"
              className="p-2 border border-gray-300 rounded-md md:mr-5"
              placeholder="New first name"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="update-last-name" className="font-medium my-1.5 text-purple-850">
              Last name
            </label>
            <input
              type="text"
              id="update-last-name"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="New last name"
            />
          </div>
          <div className="flex flex-col w-full mt-3.5">
            <label htmlFor="update-email" className="font-medium my-1.5 text-purple-850">
              E-mail
            </label>
            <input
              type="email"
              id="update-email"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="New e-mail"
            />
          </div>
        </form>
      </div>
      <hr className="my-4 lg:my-0"/>
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="w-1/4 min-w-96">
          <h2 className="text-2xl font-medium">Profile picture</h2>
          <p className="text-black-opacity-50">
            Update your profile picture. Supported files are JPG, PNG, WebP and
            JPEG.
          </p>
        </div>
        <div className="flex flex-col w-3/6 my-6 md:flex-row md:mx-11">
          <picture className="flex w-45 h-46 min-w-44 min-h-44 shadow-md rounded-full mr-8 items-center justify-center">
            <img
              src={img}
              alt="Imagem de perfil"
              className="w-full h-full rounded-full shadow-md"
            />{' '}
            {/*shadow arrumar*/}
          </picture>
          <div>
            <p>Add new profile picture</p>
            <input type="file" />
          </div>
        </div>
      </div>
      <hr className="my-4 lg:my-0"/>
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="w-1/4 min-w-96">
          <h2 className="text-2xl font-medium">Communication</h2>
          <p className="text-black-opacity-50">
            Update your e-mail communication preferences anytime. Choose to
            receive project notifications or disable them completely.
          </p>
        </div>
        <div className="flex flex-wrap my-6 text-gray-850 lg:mx-11 lg:w-3/6">
          <div>
            <label htmlFor="new-tasks" className="flex items-center">
              <input
                type="radio"
                id="new-tasks"
                name="notifications-update"
                className="radio-input-tasks"
              />
              <p>New tasks</p>
            </label>
            <p>
              Receive an e-mail alert each time a new task is assigned to me in
              a project.
            </p>
          </div>
          <div>
            <label htmlFor="new-team-members" className="flex items-center">
              <input
                type="radio"
                id="new-team-members"
                name="notifications-update"
                className="radio-input-tasks"
              />
              <p>New team members</p>
            </label>
            <p>
              Receive an e-mail alert each time a team members enters in a
              project I’m assigned to.
            </p>
          </div>

          <div>
            <label htmlFor="weekly-reports" className="flex items-center">
              <input
                type="radio"
                id="weekly-reports"
                name="notifications-update"
                className="radio-input-tasks"
              />
              <p>Weekly reports</p>
            </label>
            <p>
              Receive a weekly e-mail with a basic report, including estimated
              time and most active members.
            </p>
          </div>
        </div>
      </div>
      <hr className="my-4 lg:my-0" />
      <div className="flex-col lg:flex-row flex lg:justify-between">
        <div className="w-1/4 min-w-96">
          <h2 className="text-2xl font-medium ">Social information</h2>
          <p className="text-black-opacity-50">
            Update your e-mail communication preferences anytime. Choose to
            receive project notifications or disable them completely.
          </p>
        </div>
        <div className="w-3/6 my-6 lg:mx-10 lg:3/6">
          <span>Twitter/X</span>
          <div className="flex">
            <input
              type="text"
              placeholder="x.com/"
              className="w-52 h-12 border border-gray-300 rounded-md px-4"
            />
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4  ml-1.5 w-36 h-12"
            />
          </div>
          <span>Instagram</span>
          <div className="flex">
            <input
              type="text"
              placeholder="instagram.com/"
              className="w-52 h-12 border border-gray-300 rounded-md px-4"
            />
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 ml-1.5 w-36 h-12"
            />
          </div>
          <span>Linkedin</span>
          <div className="flex">
            <input
              type="text"
              placeholder="linkedin.com/in/"
              className="w-52 h-12 border border-gray-300 rounded-md px-4"
            />
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 ml-1.5 w-36 h-12"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center lg:mt-20">
        <button className="w-90 md:w-100 bg-primary-color-dark text-white rounded-lg h-12 ">Update information</button>
      </div>
      <div className="text-center my-4">
        <p className="text-sm ">Never mind, take me <a href="/" className="text-indigo-600 underline">back to my project.</a></p> {/* add link para pagina */}
      </div>
    </div>
  );
};

export default SettingsProfile;

import { useState } from "react"

export const UpdateInfos = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')


    const emaisIsValid = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }

    if(name.length <= 2 ) {
        console.log('Please, enter a name with more than 2 characters.' )
    } else if(lastName.length <= 2) {
        console.log('Please, enter a last name with more than 2 characters.' )
    } else if (!emaisIsValid()) {
        console.log("Enter a valid email!")
    } else {
        console.log('foi')
    }

  return (
    <form
          action=""
          method="post"
          className="flex flex-col flex-wrap  mt-6 mb-10 leading-5 text-sm md:w-10/12 md:flex-row lg:mx-11 lg:w-3/6"
        >
          <div className="flex flex-col w-full md:w-1/2">
            <label
              htmlFor="update-first-name"
              className="font-medium my-1.5 text-purple-850"
            >
              First name
            </label>
            <input
              type="text"
              id="update-first-name"
              className="p-2 border border-gray-300 rounded-md md:mr-5"
              placeholder="New first name"
              //pegar valor digitado pelo usuario
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label
              htmlFor="update-last-name"
              className="font-medium my-1.5 text-purple-850"
            >
              Last name
            </label>
            <input
              type="text"
              id="update-last-name"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="New last name"
              //pegar valor digitado pelo usuario
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full mt-3.5">
            <label
              htmlFor="update-email"
              className="font-medium my-1.5 text-purple-850"
            >
              E-mail
            </label>
            <input
              type="email"
              id="update-email"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="New e-mail"
              //pegar valor digitado pelo usuario
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </form>
  )
}

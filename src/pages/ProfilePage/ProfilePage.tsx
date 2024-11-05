const ProfilePage = () => {
  return (
    <div>
      <div className="w-20">CABECA</div>

      {/* PRINCIPAL  */}
      <div className="my-12 mx-4 mx-w-[363px] rounded-3xl bg-[#F6F6F6] opacity-90 py-14 px-8 md:flex md:flex-row md:content-center md:py-14 md:px-24 ">
        <div className="md:max-w-[620px] md:pr-6 md:w-[500px]">
          {/* div da imagem e o nome  */}
          <div className="flex gap-6">
            {/* div da imagem */}
            <div className="max-w-[126px] max-h-[130px]">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocIXSUajAyNe17Nh-lDnPbum7irqzJWRn9U45umN7gOZW5EwGpk=s576-c-no"
                alt=""
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            {/* div do nome  */}
            <div className="flex flex-col justify-center content-center">
              <h2 className="font-medium text-3xl md:text-5xl">John Doe</h2>
              <p className="text-2xl opacity-70 md:text-2xl">@johnDoe</p>
            </div>
          </div>
          {/* div profile data */}
          <div className="mt-[77px] border-b-2 pb-5 md:mt-6 md:max-w-lg">
            <h2 className="font-medium text-2xl md:text-[32px]">
              Profile data
            </h2>
            <p className="text-[16px] opacity-50">John Doe’s information</p>
          </div>
          {/* Div de contato  */}
          <div className="flex gap-4 flex-col mt-2 md:max-w-96">
            <h2 className="font-medium text-2xl">Contact</h2>
            <ul className="flex justify-center content-center flex-col gap-2">
              <li className="flex justify-between">
                <h3 className="font-bold text-[15px] opacity-50">E-mail</h3>
                <p className="opacity-50 text-[15px]">john.doe@example.com</p>
              </li>
              <li className="flex justify-between">
                <h3 className="font-bold text-[15px] opacity-50">Twitter/x</h3>
                <p className="opacity-50 text-[15px]">@theJohnDoe</p>
              </li>
              <li className="flex justify-between">
                <h3 className="font-bold text-[15px] opacity-50">Instagram</h3>
                <p className="opacity-50 text-[15px]">@theJohnDoe</p>
              </li>
              <li className="flex justify-between">
                <h3 className="font-bold text-[15px] opacity-50">Linkedin</h3>
                <p className="opacity-50 text-[15px]">@theJohnDoe</p>
              </li>
            </ul>
          </div>
          {/* div de Details */}
          <div className="mt-11 gap-4 border-b-2 pb-5 md:border-b-0 md:max-w-96">
            <h2 className="font-medium text-2xl">Details</h2>
            <ul className="flex flex-col gap-2">
              <li className="flex justify-between">
                <h3 className="font-bold text-[15px] opacity-50">User ID</h3>
                <p className="opacity-50 text-[15px]">000000000001</p>
              </li>
              <li className="flex justify-between">
                <h3 className="font-bold text-[15px] opacity-50">
                  Creation date
                </h3>
                <p className="opacity-50 text-[15px]">10/20/2024 09:00AM</p>
              </li>
              <li className="flex justify-between">
                <h3 className="font-bold text-[15px] opacity-50">Title</h3>
                <p className="opacity-50 text-[15px]">Project Manager</p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          {/* Latest activity div  */}
          <div className="md:flex md:flex-col md:pt-32  md:pl-4 md:border-l-2 max-h-[1100px]">
            <h2 className="font-medium text-2xl">Latest activity</h2>
            <p className="opacity-50 text-[15px]">
              John Doe’s last interactions
            </p>

            <div className="my-16 max-h-[545px] h-[545px] ">
              <ul className="flex gap-8 flex-col">
                <li className="flex flex-row gap-[6px] items-center ">
                  <div className="max-w-[25px] max-h-[50px] rounded-full md:max-h-[50px] md:max-w-[50px]">
                    <img
                      src="https://lh3.googleusercontent.com/a/ACg8ocIXSUajAyNe17Nh-lDnPbum7irqzJWRn9U45umN7gOZW5EwGpk=s576-c-no"
                      alt=""
                      className="max-w-[25px] max-h-[50px] rounded-full md:max-h-[50px] md:max-w-[50px]"
                    />
                  </div>
                  <p>John Doe marked a task as done on Set 25, 2024</p>
                </li>
                <li className="flex flex-row gap-[6px] items-center ">
                  <div className="max-w-[25px] max-h-[50px] rounded-full md:max-h-[50px] md:max-w-[50px]">
                    <img
                      src="https://lh3.googleusercontent.com/a/ACg8ocIXSUajAyNe17Nh-lDnPbum7irqzJWRn9U45umN7gOZW5EwGpk=s576-c-no"
                      alt=""
                      className="max-w-[25px] max-h-[50px] rounded-full md:max-h-[50px] md:max-w-[50px]"
                    />
                  </div>
                  <p>John Doe marked a task as done on Set 25, 2024</p>
                </li>
                <li className="flex flex-row gap-[6px] items-center ">
                  <div className="max-w-[25px] max-h-[50px] rounded-full md:max-h-[50px] md:max-w-[50px]">
                    <img
                      src="https://lh3.googleusercontent.com/a/ACg8ocIXSUajAyNe17Nh-lDnPbum7irqzJWRn9U45umN7gOZW5EwGpk=s576-c-no"
                      alt=""
                      className="max-w-[25px] max-h-[50px] rounded-full md:max-h-[50px] md:max-w-[50px]"
                    />
                  </div>
                  <p>John Doe marked a task as done on Set 25, 2024</p>
                </li>
                <li className="flex flex-row gap-[6px] items-center ">
                  <div className="max-w-[25px] max-h-[50px] rounded-full md:max-h-[50px] md:max-w-[50px]">
                    <img
                      src="https://lh3.googleusercontent.com/a/ACg8ocIXSUajAyNe17Nh-lDnPbum7irqzJWRn9U45umN7gOZW5EwGpk=s576-c-no"
                      alt=""
                      className="max-w-[25px] max-h-[50px] rounded-full md:max-h-[50px] md:max-w-[50px]"
                    />
                  </div>
                  <p>John Doe marked a task as done on Set 25, 2024</p>
                </li>
                <li className="flex flex-row gap-[6px] items-center ">
                  <div className="max-w-[25px] max-h-[50px] rounded-full md:max-h-[50px] md:max-w-[50px]">
                    <img
                      src="https://lh3.googleusercontent.com/a/ACg8ocIXSUajAyNe17Nh-lDnPbum7irqzJWRn9U45umN7gOZW5EwGpk=s576-c-no"
                      alt=""
                      className="max-w-[25px] max-h-[50px] rounded-full md:max-h-[50px] md:max-w-[50px]"
                    />
                  </div>
                  <p>John Doe marked a task as done on Set 25, 2024</p>
                </li>
                <li className="flex flex-row gap-[6px] items-center ">
                  <div className="max-w-[25px] max-h-[50px] rounded-full md:max-h-[50px] md:max-w-[50px]">
                    <img
                      src="https://lh3.googleusercontent.com/a/ACg8ocIXSUajAyNe17Nh-lDnPbum7irqzJWRn9U45umN7gOZW5EwGpk=s576-c-no"
                      alt=""
                      className="max-w-[25px] max-h-[50px] rounded-full md:max-h-[50px] md:max-w-[50px]"
                    />
                  </div>
                  <p>John Doe marked a task as done on Set 25, 2024</p>
                </li>
                <li className="flex flex-row gap-[6px] items-center ">
                  <div className="max-w-[25px] max-h-[50px] rounded-full md:max-h-[50px] md:max-w-[50px]">
                    <img
                      src="https://lh3.googleusercontent.com/a/ACg8ocIXSUajAyNe17Nh-lDnPbum7irqzJWRn9U45umN7gOZW5EwGpk=s576-c-no"
                      alt=""
                      className="max-w-[25px] max-h-[50px] rounded-full md:max-h-[50px] md:max-w-[50px]"
                    />
                  </div>
                  <p>John Doe marked a task as done on Set 25, 2024</p>
                </li>
              </ul>
            </div>
            {/* Weekly report div  */}
            <div>
              <h2 className="font-medium text-2xl">Weekly report</h2>
              <p className="opacity-50 text-[15px]">Tasks estimate</p>
              <div className="flex flex-col mt-9">
                <div className="flex flex-row gap-14">
                  <h2 className="font-medium text-base">
                    Total tasks assigned
                  </h2>
                  <span className="font-bold text-base text-[#4F46E5]">30</span>
                </div>
                <div className="flex flex-row gap-14">
                  <h2 className="font-medium text-base">Average work time</h2>
                  <span className="font-bold text-base text-[#4F46E5]">
                    15h 25min
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

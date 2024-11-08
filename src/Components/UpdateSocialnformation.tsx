export const UpdateSocialnformation = () => {
  return (
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
  );
};

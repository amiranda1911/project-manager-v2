import React from 'react'
  
interface FormButtonsProps {
    buttonText: string; //a prop do botão só recebe texto
}

const FormButtons: React.FC<FormButtonsProps> = ({buttonText}) => {
  return (
    <button type="submit" className="mx-auto w-[20.563rem] h-[2.25rem] bg-[#1e293b] rounded-md text-white font-roboto font-medium text-15 mt-[1.413rem] mb-[1.313rem] 
    cursor-pointer hover:shadow-lg hover:brightness-150 transition duration-200
    md:w-[31.75rem] md:h-[3rem] md:text-16 md:mt-[2rem] md:mb-[1.938rem]">
        {buttonText}
    </button>
  )
}

export default FormButtons
import React from 'react'
  
interface FormButtonsProps {
    buttonText: string; //a prop do botão só recebe texto
    loading: boolean;
}

const FormButtons: React.FC<FormButtonsProps> = ({ buttonText, loading }) => {
  return (
    <button type="submit" disabled={loading} className="mx-auto w-[20.563rem] h-[2.25rem] bg-[#1e293b] rounded-md text-white font-roboto font-medium text-15  
    cursor-pointer hover:bg-[#3b5174] transition duration-200
    md:w-[31.75rem] md:h-[3rem] md:text-16 ">
        {buttonText}
    </button>
  )
}

export default FormButtons

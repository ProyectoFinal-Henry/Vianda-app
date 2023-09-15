const FormResponsiveContainer = ({ children }) => {
  return (
    <>
      <div
        className=" 
      flex flex-col justify-center  items-center bg-base-100
      w-[90%] mx-[5%] md:w-[50%] md:mx-auto lg:w-[35%]  rounded-2xl
      border-2 border-neutral/30 drop-shadow-lg px-2 py-6 my-[5vh] "
      >
        {children}
      </div>
    </>
  )
}

export default FormResponsiveContainer

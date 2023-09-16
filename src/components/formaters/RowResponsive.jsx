const RowResponsive = ({ children }) => {
  return (
    <>
      <div
        className="
      flex flex-col justify-center  items-center 
      max-w-full  lg:max-w-6xl lg:mx-auto py-6 min-h-[90vh]  "
      >
        {children}
      </div>
    </>
  )
}

export default RowResponsive

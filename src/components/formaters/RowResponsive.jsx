const RowResponsive = ({ children }) => {
  return (
    <>
      <div
        className="
      flex flex-col justify-center  items-center 
      max-w-[94%] mx-[3%] lg:max-w-5xl lg:mx-auto "
      >
        {children}
      </div>
    </>
  )
}

export default RowResponsive
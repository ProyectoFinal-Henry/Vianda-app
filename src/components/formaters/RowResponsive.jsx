const RowResponsive = ({ children }) => {
    return (
      <>
        <div
          className=" 
        flex flex-col justify-center  items-center bg-base-100  
        mzx-w-[90%] overflow-scroll"
        >
          {children}
        </div>
      </>
    )
  }
  
  export default RowResponsive
  
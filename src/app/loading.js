import Image from "next/image"

const LoadingComponentApp = () => {
  return (
    <>
      <div className="fixed top-0 left-0 bg-accent-500/40 min-h-full  min-w-full   flex flex-col justify-center items-center">
        <Image
          className=" max-w-[200px] md:max-w-[20%]"
          src={"https://res.cloudinary.com/deezwetqk/image/upload/v1695171792/logogreen_msunlg.png"}
          width={200}
          height={200}
          alt="loading"
        />
        <span className="loading loading-infinity w-[6rem] md:w-[8rem] text-accent"></span>
      </div>
    </>
  )
}

export default LoadingComponentApp

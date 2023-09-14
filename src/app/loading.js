import Image from "next/image";

const LoadingComponentApp = () => {
  return (
    <>
      <div className="fixed top-0 left-0 bg-accent-500/40 min-h-full  min-w-full   flex flex-col justify-center items-center">
        <Image
          className=""
          width={"300"}
          height={"300"}
          src={"/images/corporate/logogreen.png"}
          alt="loading"
        ></Image>
        <span className="loading loading-infinity w-[10rem] text-accent"></span>
      </div>
    </>
  );
};

export default LoadingComponentApp;

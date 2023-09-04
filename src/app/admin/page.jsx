import React from "react"
import { FiAward } from "react-icons/fi"

const page = () => {
  return (
    <>
      <div
        class="w-full min-h-[85vh] hidden md:block   bg-contain bg-no-repeat overflow-scroll"
        style={{ backgroundImage: 'url("/demoToDelete/adminD.png")' }}
      >
        <div className="min-h-[1900px]"></div>
      </div>
      <div
        class="w-full min-h-[85vh]  md:hidden  bg-contain  bg-center bg-no-repeat overflow-scroll"
        style={{ backgroundImage: 'url("/demoToDelete/adminM.png")' }}
      >
        <div className="min-h-[1900px]"></div>
      </div>
    </>
  )
}

export default page

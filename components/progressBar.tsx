const progressBar = () => {
  return (
    <div className="bg-white w-[271px] h-[300px] mt-[40px]">
       <div className="ml-8 mt-6 justify-start">
          <p className="font-medium text-[16px]">progress Bar</p>

          <div className="mt-4">

          </div>

          <div className="mt-[110px]">
            <div className="flex">
              <div className="bg-[#57388E] w-3 h-3 mt-1 mr-2"></div>
              <p className="whitespace-nowrap text-[13px]">Completed courses</p>
            </div>

            <div className="flex">
              <div className="bg-[#4F8EF5] w-3 h-3 mt-1 mr-2"></div>
              <p className="whitespace-nowrap text-[13px]">Paused courses</p>
            </div>

            <div className="flex">
              <div className="bg-[#B3B3B3] w-3 h-3 mt-1 mr-2"></div>
              <p className="whitespace-nowrap text-[13px]">Unopened courses</p>
            </div>
          </div>
       </div>
    </div>
  )
}

export default progressBar
import React from "react";
import Image from "next/image";
import Weed from "../../../images/images/weed.png"
import Girl from "../../../images/images/stravGirl.png" 
import stravberry from "../../../images/images/stavbery.jpg"

const HomeSection4 = () => {

  return (
    <div className="container mx-auto mt-[80px] font-bold">
      <div className="flex justify-between">
        <h1 className="text-[36px]">Our blog.</h1>
        <button className="text-[#359740] text-[16px] font-bold border-[1px] pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg">Go to our blog</button>
      </div>
      <div className=" flex gap-[30px] mt-[40px]">
        <div className="w-[70%] flex-col ">
          <div className="p-[30px] border-[1px] rounded-[12px] mb-[30px] bg-[#EAF1EB] flex justify-between">
            <div>
              <h1 className="w-[362px] font-bold text-[24px] mb-[15px]">How to plant spinach correctly in winter</h1>
              <p className="w-[401px] mb-[15px]">In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
              <button className="text-[#359740] text-[16px] font-bold  pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg bg-[#fff]">Read</button>
            </div>
            <Image src={Weed} alt="Weed" width={250} height={150}/>
          </div>
          <div className="flex gap-[30px]">
            <div className="w-[50%] p-[20px] border-[1px] rounded-lg bg-[#EFF2F8]">
              <h1 className="w-[286px] font-bold text-[24px] mb-[15px]">How to plant spinach correctly in winter</h1>
              <button className="text-[#359740] text-[16px] font-bold  pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg bg-[#fff] mb-[15px]">Read</button>
              <Image className="rounded-[50%] w-[200px] h-[200px] ml-[55%]" src={stravberry} alt="Weed"/>
            </div>
            <div className="w-[50%] p-[20px] border-[1px] rounded-lg bg-[#EFF2F8]">
              <h1 className="w-[286px] font-bold text-[24px] mb-[15px]">How to plant spinach correctly in winter</h1>
              <button className="text-[#359740] text-[16px] font-bold  pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg bg-[#fff] mb-[15px]">Read</button>
              <Image className="rounded-[50%] w-[200px] h-[200px] ml-[55%]" src={stravberry} alt="Weed"/>
            </div>
          </div>
        </div>
        <div className="w-[30%] p-[20px] border-[1px] rounded-lg bg-[#EFF2F8]">
          <h1 className="w-[306px] font-bold text-[24px] mb-[15px]">How to plant spinach correctly in winter</h1>
          <p className="mb-[15px] w-[306px]">In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
          <button className="text-[#359740] text-[16px] font-bold  pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg bg-[#fff]">Read</button>
          <Image className=" ml-[45%] w-[440px] h-[340px] mt-[95px]" src={Girl} alt="Weed" />
        </div>
      </div>
    </div>
  );
};

export default HomeSection4;

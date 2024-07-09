import image from "../images/banners/AboutBanner.png"
import Image from 'next/image'
import Weed from "../images/images/weed.png"
import Girl from "../images/images/stravGirl.png"
import stravberry from "../images/images/stavbery.jpg"
import startvberry from "../images/images/stravberry.png"
import kaktusGirl from "../images/images/katusGirl.png"
import floverGirl from "../images/images/foverGirl.png"
import uzum from "../images/images/uzum.png"
import girlMaunting from "../images/images/girlMauntin.jpg"
 
const ourBlog = () => {
    return (
        <div className="container mx-auto">
            <div style={{ backgroundImage: `url(${image.src})`, backgroundSize: 'cover', borderRadius: '40px' }} className="container mx-auto items-center pt-[40px] h-[205px]">
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-[#0D0D0D] text-[48px]  font-bold text-center'>Who we are and what we do</h1>
                    <p className='text-[#70737C] text-[16px] w-[560px]  text-center'>Here you can find a lot of interesting and useful information that you need in gardening and creating a beautiful garden</p>
                </div>
            </div>
            <div className="flex justify-between mt-[40px]">

            </div>
            <div className=" flex gap-[30px] mt-[40px]">
                <div className="w-[70%] flex-col ">
                    <div className="p-[30px] border-[1px] rounded-[12px] mb-[30px] bg-[#EAF1EB] flex justify-between overflow-hidden">
                        <div>
                            <h1 className="w-[362px] font-bold text-[24px] mb-[15px]">How to plant spinach correctly in winter</h1>
                            <p className="w-[401px] mb-[15px]">In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                            <button className="text-[#359740] text-[16px] font-bold  pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg bg-[#fff]">Read</button>
                        </div>
                        <Image src={Weed} alt="Weed" width={250} height={150} />
                    </div>
                    <div className="flex gap-[30px] ">
                        <div className="w-[50%] p-[20px] border-[1px] rounded-lg bg-[#EFF2F8] overflow-hidden ">
                            <h1 className="w-[286px] font-bold text-[24px] mb-[15px]">How to plant spinach correctly in winter</h1>
                            <button className="text-[#359740] text-[16px] font-bold  pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg bg-[#fff] mb-[15px]">Read</button>
                            <Image className="rounded-[50%] w-[200px] h-[200px] ml-[55%] " src={stravberry} alt="Weed" />
                        </div>
                        <div className="w-[50%] p-[20px] border-[1px] rounded-lg bg-[#EFF2F8] overflow-hidden">
                            <h1 className="w-[286px] font-bold text-[24px] mb-[15px]">How to plant spinach correctly in winter</h1>
                            <button className="text-[#359740] text-[16px] font-bold  pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg bg-[#fff] mb-[15px]">Read</button>
                            <Image className="rounded-[50%] w-[200px] h-[200px] ml-[55%]" src={stravberry} alt="Weed" />
                        </div>
                    </div>
                </div>
                <div className="w-[33%] p-[20px] border-[1px] rounded-lg bg-[#EFF2F8] overflow-hidden">
                    <h1 className="w-[306px] font-bold text-[24px] mb-[15px]">How to plant spinach correctly in winter</h1>
                    <p className="mb-[15px] w-[306px]">In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                    <button className="text-[#359740] text-[16px] font-bold  pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg bg-[#fff]">Read</button>
                    <Image className=" ml-[45%] w-[440px] h-[340px] mt-[95px]" src={Girl} alt="Weed" />
                </div>
            </div>
            <div className="flex-col mt-[40px]">
                <div className="flex gap-[30px]">
                    <div className="w-[69%] p-[30px] border-[1px] rounded-[12px]  bg-[#EAF1EB] flex justify-between overflow-hidden">
                        <div>
                            <h1 className="w-[362px] font-bold text-[24px] mb-[15px]">How to plant spinach correctly in winter</h1>
                            <p className="w-[401px] mb-[15px]">In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                            <button className="text-[#359740] text-[16px] font-bold  pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg bg-[#fff]">Read</button>
                        </div>
                        <Image className="w-[300px] h-[260px] mt-[50px]" src={startvberry} alt="Weed"/>
                    </div>
                    <div className="w-[33%] p-[20px] border-[1px] rounded-lg bg-[#EFF2F8] overflow-hidden">
                        <h1 className="w-[286px] font-bold text-[24px] mb-[15px]">How to plant spinach correctly in winter</h1>
                        <button className="text-[#359740] text-[16px] font-bold  pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg bg-[#fff]">Read</button>
                        <Image className="rounded-[50%] w-[200px] h-[200px] ml-[55%]" src={girlMaunting} alt="Weed" />
                    </div>
                </div>
                <div className="flex gap-[30px] mt-[30px]">
                    <div className="w-[33%] p-[20px] border-[1px] rounded-lg bg-[#EFF2F8] overflow-hidden overflow-hidden">
                        <h1 className="w-[306px] font-bold text-[24px] mb-[15px]">How to plant spinach correctly in winter</h1>
                        <p className="mb-[15px] w-[306px]">In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                        <button className="text-[#359740] text-[16px] font-bold  pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg bg-[#fff]">Read</button>
                        <Image className=" ml-[30%] w-[440px] h-[340px] mt-[95px] " src={kaktusGirl} alt="Weed" />
                    </div>
                    <div className="w-[33%] p-[20px] border-[1px] rounded-lg bg-[#EFF2F8] overflow-hidden">
                        <h1 className="w-[306px] font-bold text-[24px] mb-[15px]">How to plant spinach correctly in winter</h1>
                        <p className="mb-[15px] w-[306px]">In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                        <button className="text-[#359740] text-[16px] font-bold  pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg bg-[#fff]">Read</button>
                        <Image className=" ml-[30%] w-[440px] h-[340px] mt-[95px]" src={uzum} alt="Weed" />
                    </div>
                    <div className="w-[33%] p-[20px] border-[1px] rounded-lg bg-[#EFF2F8] overflow-hidden">
                        <h1 className="w-[306px] font-bold text-[24px] mb-[15px]">How to plant spinach correctly in winter</h1>
                        <p className="mb-[15px] w-[306px]">In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                        <button className="text-[#359740] text-[16px] font-bold  pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg bg-[#fff]">Read</button>
                        <Image className=" ml-[35%] w-[440px] h-[340px] mt-[95px]" src={floverGirl} alt="Weed" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ourBlog;
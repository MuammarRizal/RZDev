import Image from "next/image";

export default function Home() {
  return (
    <div className="container container__home container-fluid flex items-center w-full h-screen justify-center">
      <div className="content-1">
        <div className="text-container w-[48vw]">
          <div className="title text-[2.778vw] font-bold">
            Unlock Your Potential <br /> with RzDev
          </div>
          <div className="description text-[1.111vw] text-gray-400">
          Welcome to Byway, where learning knows no bounds. We believe that <br /> education is the key to personal and professional growth, and we're here to <br />guide you on your journey to success. Whether you're a student, professional, <br /> or lifelong learner, our cutting-edge Learning Management System is <br /> designed to elevate your learning experience.
          </div>
        </div>
        <div className="w-[17vw] bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center">
        <button>
          Start your instructor Journey 
        </button>
        </div>
      </div>
      <div className="content-2">
        <div className="swiper">
          <div className="swiper-container">
            <Image 
              src={"/images/set.jpg"} 
              alt="Banner Hero" 
              width={600}
              height={400}/>
          </div>
        </div>
      </div>
    </div>
  );
}

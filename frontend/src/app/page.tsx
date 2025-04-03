import Image from "next/image";

export default function Home() {
  return (
    <div className="container__home container-fluid flex items-center w-full h-screen justify-center">
      <div className="content-1">
        <div className="text-container w-[48vw]">
          <div className="title text-[2.778vw] font-bold">
            Unlock Your Potential
          </div>
          <div className="description text-[1.111vw] text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam harum fuga repudiandae sequi! Labore eligendi necessitatibus facere similique, explicabo voluptate in sunt consequatur repudiandae aliquid ipsa iure rerum cum quam maiores mollitia incidunt? Minima saepe numquam, necessitatibus tenetur possimus quia provident voluptate architecto facilis officiis similique tempore rerum incidunt!
          </div>
        </div>
        <div className="btn btn-primary py-2 px-3 bg-blue-800 w-60">
          <button>Start your intructor journey</button>
        </div>
      </div>
      <div className="content-2">
        <div className="swiper">
          <div className="swiper-container">

          </div>
        </div>
      </div>
    </div>
  );
}

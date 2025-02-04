import Link from "next/link";
import React from "react";
import Image from "../components/Image";
import Feed from "../components/Feed";

const UserPage = () => {
  return (
    <div className="">
      {/* Profile Title */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href="/">
          <Image path="icons/back.svg" alt="" w={24} h={24} />
        </Link>
        <h1 className="font-bold text-lg">Mahesh</h1>
      </div>
      {/* Info */}
      <div className="p-2">
        {/* cover and avatar container */}
        <div className="relative w-full">
          {/* Cover */}
          <div className="w-full aspect-[3/1] relative">
            <Image path="general/cover.jpg" alt="" w={600} h={200} tr={true} />
          </div>

          {/* Avatar */}
          <div className="w-1/6 aspect-square absolute rounded-full overflow-hidden border-4 bg-gray-300 left-4 -translate-y-1/2">
            <Image path="general/cover.jpg" alt="" w={100} h={100} tr={true} />
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 p-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/more.svg" alt="" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/explore.svg" alt="" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/message.svg" alt="" w={20} h={20} />
          </div>
          <button className="py-2 px-4 bg-white text-black font-bold rounded-full">
            Follow
          </button>
        </div>

        {/* user details */}
        <div className="p-4 flex flex-col gap-2">
          {/* username and handle */}
          <div className="">
            <h1 className="text-2xl font-bold">Mahesh Aryal</h1>
            <span className="text-textGray text-sm">@10962</span>
          </div>
          <p className="">Mahesh other account links </p>
          {/* jobs location Dates */}
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2">
              <Image
                path="icons/userLocation.svg"
                alt="location"
                w={20}
                h={20}
              />
              <span className="">USA</span>
            </div>
            <div className="flex items-center gap-2">
              <Image path="icons/date.svg" alt="date" w={20} h={20} />
              <span className="">Joined feb 04</span>
            </div>
          </div>

          {/* following and followers */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">Following</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">1000</span>
              <span className="text-textGray text-[15px]">Followers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feed */}
      <Feed />
    </div>
  );
};

export default UserPage;

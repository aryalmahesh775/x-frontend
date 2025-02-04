import React from "react";
import Image from "./Image";
import PostInfo from "./PostInfo";
import PostIntraction from "./PostIntraction";
import { imagekit } from "@/utils";
import { Video } from "./Video";
import Link from "next/link";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: { sensitive: boolean };
}

const Post = async ({ type }: { type?: "status" | "comment" }) => {
  const getFieldDetails = async (
    fieldId: string
  ): Promise<FileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fieldId, function (error, result) {
        if (error) reject(error);
        else resolve(result as FileDetailsResponse);
      });
    });
  };

  const fileDetails = await getFieldDetails("67a0f346432c476416614b27");
  // const fileDetails = await getFieldDetails("67a19bff432c4764164f70fc");

  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* Posrt Type */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span className="">dev reposted</span>
      </div>
      {/* Post content */}
      {/* <div className="flex gap-4"> */}
      <div className={`flex gap-4 ${type === "status" && "flex-col"}`}>
        {/* Avatar */}
        <div
          className={` ${
            type === "status" && "hidden"
          } relative w-10 h-10 rounded-full overflow-hidden`}
        >
          <Image path="general/avatar.png" alt="" w={100} h={100} tr={true} />
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col gap-2">
          {/* top */}
          <div className="w-full flex justify-between">
            <Link href={`/mahesh`} className="flex gap-4">
              <div
                className={` ${
                  type !== "status" && "hidden"
                } relative w-10 h-10 rounded-full overflow-hidden`}
              >
                <Image
                  path="general/avatar.png"
                  alt=""
                  w={100}
                  h={100}
                  tr={true}
                />
              </div>
              <div
                className={`flex items-center gap-2 flex-wrap ${
                  type === "status" && "flex-col gap-0 !items-start"
                }`}
              >
                <h1 className="text-md font-bold">Mahesh Aryal</h1>
                <span
                  className={`text-textGray ${type === "status" && "text-sm"}`}
                >
                  @10962
                </span>
                {type !== "status" && (
                  <span className="text-textGray">1 days ago</span>
                )}
              </div>
            </Link>
            <PostInfo />
          </div>
          {/* Text and media */}
          <Link href={`/maheshAryal/status/1`}>
            <p className={`${type === "status" && "text-lg"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              fugit voluptatem eum similique eos magni porro, blanditiis cumque
              voluptas tenetur nulla vero rerum voluptatum saepe architecto
              dolor sapiente. Sunt, voluptates.
            </p>
          </Link>
          {/* <Image path="general/post.jpeg" alt="" w={600} h={600} /> */}
          {fileDetails && fileDetails.fileType === "image" ? (
            <Image
              path={fileDetails.filePath}
              alt=""
              w={fileDetails.width}
              h={fileDetails.height}
              // className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          ) : (
            <Video
              path={fileDetails.filePath}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          )}
          {type === "status" && (
            <span className="text-textGray">8:58 PM Feb 4, 2025</span>
          )}
          <PostIntraction />
        </div>
      </div>
    </div>
  );
};

export default Post;

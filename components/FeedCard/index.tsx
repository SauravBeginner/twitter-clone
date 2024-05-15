import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
// import { Tweet } from "@/gql/graphql";
import Link from "next/link";

// interface FeedCardProps {
//   data: Tweet;
// }

const FeedCard: React.FC = () => {
  //   const { data } = props;
  const imgSrc =
    "https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            className="rounded-full"
            src={imgSrc}
            alt="user-image"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11">
          <h5>
            <Link href={`/authorId`}>FirstName LastName</Link>
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius hic
            possimus, in aperiam consectetur minus consequuntur natus quam odit
            veniam non corporis! Molestiae non ipsam sapiente blanditiis at
            incidunt. Alias?
          </p>

          {/* <Image src={imgSrc} alt="image" width={400} height={400} /> */}

          <div className="flex justify-between mt-4 text-xl items-center px-2 w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;

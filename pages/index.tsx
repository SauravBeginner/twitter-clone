import Image from "next/image";
import { Inter } from "next/font/google";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import Link from "next/link";
import FeedCard from "@/components/FeedCard";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarbutton {
  title: string;
  icon: React.ReactNode;
  link: string;
}

const sidebarMenuItems: TwitterSidebarbutton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
    link: "/",
  },
  {
    title: "Explore",
    icon: <BiHash />,
    link: "/",
  },
  {
    title: "Notifications",
    icon: <BsBell />,
    link: "/",
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
    link: "/",
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
    link: "/",
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
    link: "/",
  },
  {
    title: "Profile",
    icon: <BiUser />,
    link: "/id",
  },
  {
    title: "More Options",
    icon: <SlOptions />,
    link: "/",
  },
];
export default function Home() {
  const imgSrc =
    "https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen sm:px-56">
        <div className="col-span-2 sm:col-span-3 pt-1 flex sm:justify-end pr-4 relative">
          <div>
            <div className="text-2xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
              <BsTwitter />
            </div>
            <div className="mt-1 text-xl pr-4">
              <ul>
                {sidebarMenuItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor-pointer mt-2"
                      href={item.link}
                    >
                      <span className=" text-3xl">{item.icon}</span>
                      <span className="hidden sm:inline">{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-5 px-3">
                <button className="hidden sm:block bg-[#1d9bf0] font-semibold text-lg py-2 px-4 rounded-full w-full">
                  Tweet
                </button>
                <button className="block sm:hidden bg-[#1d9bf0] font-semibold text-lg py-2 px-4 rounded-full w-full">
                  <BsTwitter />
                </button>
              </div>
            </div>
          </div>

          {/* <div className="absolute bottom-5 flex gap-2 items-center bg-slate-800 px-3 py-2 rounded-full">
            <Image
              className="rounded-full"
              src={imgSrc}
              alt="user-image"
              height={50}
              width={50}
            />

            <div className="hidden sm:block">
              <h3 className="text-xl">user.firstName user.lastName</h3>
            </div>
          </div> */}
        </div>
        <div className="col-span-10 sm:col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-y-scroll no-scrollbar  border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-0 sm:col-span-3 p-5">
          <div className="px-4 py-3 bg-slate-800 rounded-lg">
            <h1 className="my-2 text-2xl mb-5">Users you may know</h1>

            <div className="flex items-center gap-3 mt-2">
              <Image
                src={imgSrc}
                alt="user-image"
                className="rounded-full"
                width={60}
                height={60}
              />

              <div>
                <div className="text-lg">el?.firstName el?.lastName</div>
                <Link
                  href={`/id`}
                  className="bg-white text-black text-sm px-5 py-1 w-full rounded-lg"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

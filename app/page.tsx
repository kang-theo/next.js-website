import Posts from "./components/Posts";
import Link from "next/link";
import MyProfilePic from "./components/MyProfilePic";

// export const revalidate = 10 // for debug
export const revalidate = 86400 // for deploy

export default function Home() {
  return (
    <div className="mx-auto">
      <MyProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Theo</span>.
        </span>
      </p>
      <Posts />
      <Link className="text-white/50 hover:text-white" href="/todos">
        Go to Todos
      </Link>
    </div>
  );
}

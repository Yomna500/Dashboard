import Image from "next/image";
import Link from "next/link";
import bg from "@/Public/bg.jpg";

export default function page() {
  return (
    <main>
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={100}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 p-5 flex flex-col h-screen justify-center ">
        <h1 className="text-7xl text-primary-50 mb-10 tracking-tight font-bold">
          Welcome To Dashboard
        </h1>
        <button className="ml-4 text-xl bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 rounded w-fit">
          <Link href="/login">Go to Login Page →</Link>
        </button>
      </div>
    </main>
  );
}

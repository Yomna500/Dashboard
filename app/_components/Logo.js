import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex justify-center ">
      <Image
        src={logo}
        alt="The Wild Oasis Logo"
        quality={100}
        height="60"
        width="60"
      />
    </Link>
  );
}

export default Logo;

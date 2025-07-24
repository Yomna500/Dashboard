"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

export default function Navigation() {
  const user = useSelector((state) => state.user.user);
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        {user ? (
          []
        ) : (
          <li>
            <Link href="/login" className="text-xl font-semibold">
              Login
            </Link>
          </li>
        )}
        {user && (
          <>
            <li>
              <Link href="/table" className="text-xl font-semibold">
                Table
              </Link>
            </li>
            <li>
              <Link href="/charts" className="text-xl font-semibold">
                Charts
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

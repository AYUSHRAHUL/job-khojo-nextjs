import { getAuthSession } from "@/lib/auth";
import userRole from "@/utils/role";
import { Briefcase } from "lucide-react";
import Link from "next/link";

export default async function Navbar({ props }) {
  const role = await userRole();

  const navLinksConfig = {
    JOB_SEEKER: [
      { href: "/jobs", label: "Find Jobs" },
      { href: "/my-applications", label: "My Applications" },
      { href: "/settings", label: "Settings" },
    ],
    EMPLOYER: [
      { href: "/add-job", label: "Add Job" },
      { href: "/applications", label: "Submissions" },
      { href: "/settings", label: "For Employers" },
    ],
  };

  const linksToShow = navLinksConfig[role] || [];

  return (
    <header className="sticky top-0 z-50 px-6 h-16 flex items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
      <Link className="flex items-center justify-center gap-2 text-white font-bold text-lg" href="/">
        <Briefcase className="h-6 w-6 text-white drop-shadow-md" />
        <span>JOB-KHOJO</span>
      </Link>

      <nav className="ml-auto flex gap-6">
        {linksToShow.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="relative text-sm font-medium text-white transition duration-300 hover:text-yellow-300 hover:scale-110"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {!role && (
        <Link
          className="ml-6 px-4 py-2 rounded-full bg-white text-indigo-600 font-semibold text-sm shadow-md hover:bg-yellow-300 hover:text-indigo-900 transition duration-300"
          href="/sign-in"
        >
          Sign in
        </Link>
      )}
    </header>
  );
}

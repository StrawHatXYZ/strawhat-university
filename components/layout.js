import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./logo";
import {
  MdDashboard,
  MdFace,
  MdSettings,
  MdBook,
  MdAccountCircle,
  MdOutlineAccountCircle,
  MdAutoGraph,
  MdSupport,
  MdContactMail,
  MdInfo,
  MdLogout,
} from "react-icons/md";
import { useAuth } from "../contexts/UserAuthContexts";
import { useEffect } from "react";

export default function Layout({ children }) {
  const router = useRouter();
  const { user, logout } = useAuth();
  const logOutUser = async () => {
    await logout();
    await localStorage.clear();
    router.push("/login");
  };

  const menuItems = [
    {
      href: "/",
      title: "Dashboard",
      icon: <MdDashboard />,
    },
    {
      href: "/activity",
      title: "Activity",
      icon: <MdAutoGraph />,
    },
    {
      href: "/library",
      title: "Library",
      icon: <MdBook />,
    },
    {
      href: "/support",
      title: "Support",
      icon: <MdSupport />,
    },
    {
      href: "/profile",
      title: "Profile",
      icon: <MdOutlineAccountCircle />,
    },
    {
      href: "/about",
      title: "About",
      icon: <MdInfo />,
    },
    {
      href: "/settings",
      title: "Settings",
      icon: <MdSettings />,
    },
  ];
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  });

  return (
    <div className="flex">
      <aside className="h-screen sticky top-0 bg-white w-full md:w-72">
        <nav className="h-full">
          <ul className="h-full">
            <div className="flex flex-col justify-between h-full">
              <div>
                <Logo />
                {menuItems.map(({ href, title, icon }) => (
                  <li className="my-3" key={title}>
                    <Link href={href} legacyBehavior>
                      <a
                        className={`flex px-6 py-3 items-center rounded hover:text-secondary-700 hover:bg-primary-100 cursor-pointer ${
                          router.asPath === href
                            ? "text-black font-semibold border-r-4 border-primary-500"
                            : "text-secondary-600"
                        }`}
                      >
                        <i
                          className={`px-4 text-2xl ${
                            router.asPath === href &&
                            "text-primary-500  font-semibold"
                          }`}
                        >
                          {icon}
                        </i>
                        {title}
                      </a>
                    </Link>
                  </li>
                ))}
              </div>
              <div>
                <li className="my-3 border-t border-secondary-500" key="logout">
                  <Link
                    onClick={logOutUser}
                    href="/logout"
                    className={`flex px-6 py-4 items-center rounded  hover:bg-primary-100 hover:text-secondary-700 cursor-pointer text-secondary-600
                    }`}
                  >
                    <i className="px-4 text-2xl">
                      <MdLogout />
                    </i>
                    Logout
                  </Link>
                </li>
              </div>
            </div>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 ">{children}</main>
    </div>
  );
}

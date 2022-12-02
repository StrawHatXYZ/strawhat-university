import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './logo';
import {MdDashboard, MdFace, MdSettings, MdBook, MdAccountCircle, MdOutlineAccountCircle, MdAutoGraph, MdSupport, MdContactMail, MdInfo, MdLogout}  from 'react-icons/md';

export default function Layout({ children }) {
  const router = useRouter();

  const menuItems = [
    {
      href: '/',
      title: 'Dashboard',
      icon : <MdDashboard />
    },
    {
        href: '/activity',
        title: 'Activity',
        icon : <MdAutoGraph />
      },
    {
        href: '/library',
        title: 'Library',
        icon : <MdBook />
      },
      {
        href: '/support',
        title: 'Support',
        icon : <MdSupport />
      },
      {
        href: '/profile',
        title: 'Profile',
        icon : <MdOutlineAccountCircle />
      },
      {
        href: '/about',
        title: 'About',
        icon : <MdInfo />
      },
      {
        href: '/settings',
        title: 'Settings',
        icon : <MdSettings />
      },
  ];

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex flex-col md:flex-row flex-1'>
        <aside className='bg-white w-full md:w-1/5'>
          <nav >
            <ul>
            <Logo />
              {menuItems.map(({ href, title,icon }) => (
                <li className='my-3' key={title}>
                  <Link href={href} legacyBehavior>
                    <a
                      className={`flex px-6 py-3 items-center rounded  hover:bg-primary-100 cursor-pointer ${
                        router.asPath === href ? 'text-black font-semibold border-r-4 border-primary-500': 'text-secondary-600'
                      }`}
                    >
                      <i className={`px-4 text-2xl ${router.asPath === href && 'text-primary-500  font-semibold'}`}>{icon}</i> {title}
                    </a>
                  </Link>
                </li>
              ))}
            <div className='flex h-52 flex-col  justify-end'>
                <li className=''>
                    <Link href='/logout'  className="flex px-6 py-3 items-center rounded  hover:bg-primary-100 cursor-pointer text-secondary-600">
                        <i className='px-4 text-2xl'><MdLogout /></i> Logout
                    </Link>
                </li>
            </div>

            </ul>
          </nav>
        </aside>
        <main className='flex-1'>{children}</main>
      </div>
    </div>
  );
}
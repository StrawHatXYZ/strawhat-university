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
import { useEffect, useState } from "react";
import Protected from "./protectedroute";

export default function Layout({ children }) {
	const router = useRouter();
	const { user, logout } = useAuth();
	const [menuOpen, setmenuOpen] = useState(false);
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
			duration: 100,
		},
		{
			href: "/activity",
			title: "Activity",
			icon: <MdAutoGraph />,
			duration: 300,
		},
		{
			href: "/library",
			title: "Library",
			icon: <MdBook />,
			duration: 500,
		},
		{
			href: "/support",
			title: "Support",
			icon: <MdSupport />,
			duration: 700,
		},
		{
			href: "/profile",
			title: "Profile",
			icon: <MdOutlineAccountCircle />,
			duration: 900,
		},
		{
			href: "/about",
			title: "About",
			icon: <MdInfo />,
			duration: 1100,
		},
		{
			href: "/settings",
			title: "Settings",
			icon: <MdSettings />,
			duration: 1300,
		},
	];
	return (
		<Protected>
			<div className="flex flex-col md:flex-row ">
				<aside className="md:h-screen sticky top-0 bg-white/80 w-full  md:block md:w-72 z-50">
					<nav className="h-full ">
						<ul className="h-full">
							<div className="flex flex-col justify-between h-full z-50 backdrop-blur-sm">
								<div>
									<div className="flex flex-row md:justify-center justify-between md:items-center items-start pb-0 md:pb-8">
										<span className="md:pl-0 px-2  md:pr-6 py-3">
											{/* <svg
												width="55"
												height="55"
												viewBox="0 0 55 55"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect width="55" height="54" rx="10" fill="#4318FF" />
												<path
													d="M27.5005 9.44995C20.3505 9.44995 13.9287 13.61 11.082 20.045C10.9496 20.37 11.082 20.76 11.413 20.89C11.744 21.02 12.1412 20.89 12.2736 20.565C13.7301 17.315 16.1797 14.65 19.1588 12.96C18.232 13.87 17.4375 14.975 16.8417 16.145C16.5769 16.665 16.6431 17.315 17.0403 17.705C17.6361 18.355 18.7616 18.03 19.0926 17.705C19.3574 17.445 19.2912 17.12 19.0926 16.795C18.7616 16.275 18.0334 16.795 18.0334 16.795C18.0334 16.795 19.225 13.35 23.7931 11.14C24.5875 10.945 25.3158 10.88 26.1102 10.815C25.4482 11.465 24.7199 12.05 23.8593 12.57C23.8593 12.57 20.8139 14.39 20.3505 14.78C20.0857 15.04 20.0857 15.365 20.2843 15.69C20.6153 16.145 21.0787 15.885 21.2111 15.755C21.6746 15.43 24.5875 13.675 24.5875 13.675C26.3088 12.96 28.0963 10.815 28.0963 10.815C31.0755 10.945 33.856 11.79 36.2394 13.285L34.5843 14.91C33.5912 15.885 32.7306 16.535 31.8699 16.99C29.6852 18.225 27.9639 20.045 26.8385 22.255C26.5736 22.775 26.6398 23.425 27.0371 23.815C27.6991 24.4 28.7584 24.14 29.0894 23.815L30.2148 22.71C30.4797 22.45 30.4797 22.06 30.2148 21.8C29.95 21.54 29.5528 21.54 29.288 21.8L28.0301 22.905C28.0301 22.905 29.0894 19.915 32.532 18.095C33.525 17.575 34.4519 16.795 35.5111 15.755L37.3648 13.935C37.6959 14.195 38.0269 14.455 38.3579 14.715L36.3056 16.73C35.5111 17.445 34.7829 18.095 33.9222 18.615L32.0023 19.72C31.6713 19.915 31.5389 20.305 31.7375 20.63C32.0023 21.085 32.532 20.955 32.6644 20.89L34.5843 19.785C35.5773 19.2 36.438 18.485 37.2324 17.705L39.351 15.625C39.8144 16.08 40.2116 16.535 40.6088 16.99L34.7829 22.71C33.3264 24.14 32.201 25.7649 31.4727 27.52C30.6783 29.34 29.619 31.0949 28.2287 32.7199C27.9639 32.9799 28.0301 33.37 28.2949 33.63C28.626 33.955 29.0894 33.695 29.2218 33.5649C30.6783 31.8749 31.8037 29.99 32.6644 28.0399C33.3264 26.4149 34.3195 24.985 35.7097 23.62L41.4033 18.03C42.1977 19.2 42.7935 20.435 43.257 21.735L40.2778 24.725C39.0199 25.7 37.8945 28.0399 37.8945 28.0399C37.0338 29.4699 35.7759 30.705 34.3195 31.5499C32.7306 32.525 31.2079 33.6299 29.95 34.865L28.0963 36.685C27.8315 36.945 27.4343 36.945 27.1695 36.685C27.0371 36.555 26.8385 36.1649 27.1695 35.775C27.4343 35.5149 27.4343 35.1249 27.1695 34.865C26.9047 34.6049 26.4412 34.6049 26.2426 34.865C25.1172 36.1649 25.8454 37.205 26.2426 37.5949C27.3019 38.6349 28.6259 37.9849 29.0232 37.5949L30.8769 35.775C32.0685 34.6049 33.4588 33.4999 34.9815 32.5899C36.6366 31.615 37.9607 30.25 38.9537 28.6899C38.9537 28.6899 40.013 26.545 41.2047 25.635L43.6542 23.165C43.919 24.4 44.0514 25.7 44.0514 27C44.0514 34.7349 38.4903 41.235 31.1417 42.86C31.4727 42.6 31.8037 42.4049 32.1347 42.2099C32.4658 42.0149 32.532 41.625 32.3334 41.2999C32.1347 40.975 31.7375 40.91 31.4065 41.1049C30.1486 41.755 28.626 43.25 28.626 43.25C28.2287 43.25 27.0371 43.3149 26.8385 43.25L27.7653 42.34C28.626 41.4949 29.3542 40.9749 30.1486 40.5199L32.0685 39.4149C33.1278 38.8299 33.9885 38.115 34.7167 37.335C34.7167 37.335 35.9084 36.165 35.9746 36.2299C35.9746 36.2299 34.7167 38.375 33.9222 39.2199C33.6574 39.4799 33.6574 39.87 33.9222 40.13C34.1871 40.3899 34.5843 40.3899 34.8491 40.13C35.7759 39.155 36.5704 38.115 37.1662 36.88C37.431 36.36 37.2986 35.7099 36.9676 35.32C36.2394 34.7349 35.2463 34.9949 34.9153 35.32L33.7898 36.4249C33.1278 37.1399 32.3334 37.7249 31.4065 38.2449L29.4866 39.35C28.5597 39.8699 27.7653 40.52 26.8385 41.43L25.1172 43.055C22.138 42.665 19.4236 41.43 17.1727 39.6749L19.0926 37.7899C20.0857 36.8149 20.9463 36.165 21.807 35.71C23.9917 34.475 25.713 32.6549 26.8385 30.445C27.1033 29.9249 27.1033 29.275 26.5736 28.82C26.3088 28.5599 25.1834 28.2349 24.5875 28.82L23.4621 29.9249C22.8 30.6399 22.0056 31.225 21.0787 31.7449L19.1588 32.85C18.0996 33.4349 17.2389 34.15 16.5107 34.93L14.4584 36.945C14.1273 36.49 13.7963 36.0999 13.5315 35.6449L19.225 30.055C20.7477 28.495 21.807 26.87 22.5352 25.18C23.5283 22.775 25.051 20.565 27.0371 18.615L27.7653 17.9C28.1625 17.51 28.6922 16.08 27.7653 15.17C26.9709 14.39 25.7792 14.39 24.9847 15.17L23.131 16.99C21.9394 18.16 20.5491 19.265 19.0264 20.175C17.3051 21.215 15.981 22.515 15.0542 24.075C15.0542 24.075 13.8625 26.545 12.8695 27.13L11.2144 28.755C11.0158 28.235 10.9496 27.65 10.9496 27C10.9496 26.61 10.6847 26.35 10.2875 26.35C9.8903 26.35 9.62549 26.61 9.62549 27C9.62549 36.6849 17.6361 44.5499 27.5005 44.5499C37.3648 44.5499 45.3755 36.6849 45.3755 27C45.3755 17.315 37.3648 9.44995 27.5005 9.44995ZM11.3468 30.445L13.6639 28.17C15.0542 27.065 16.1135 24.855 16.1135 24.855C16.9741 23.425 18.1658 22.255 19.6885 21.345C21.2773 20.37 22.8 19.265 24.0579 18.03L25.9116 16.21C26.1764 15.95 26.5074 15.95 26.8385 16.21C27.2357 16.535 26.9709 16.99 26.8385 17.12L26.1102 17.835C23.9917 19.915 22.4028 22.255 21.3435 24.79C20.6815 26.35 19.6885 27.8449 18.2982 29.275L12.8695 34.6049C12.1412 33.24 11.6116 31.875 11.3468 30.445ZM15.319 37.985L17.4375 35.905C18.0996 35.19 18.894 34.605 19.8209 34.085L21.7408 32.9799C22.8 32.395 23.6607 31.68 24.3889 30.9C24.3889 30.9 25.5806 29.795 25.6468 29.795C25.6468 29.795 23.0648 33.565 21.1449 34.6049C20.1519 35.125 19.225 35.9049 18.1658 36.945L16.1797 38.8949C15.9148 38.57 15.5838 38.31 15.319 37.985Z"
													fill="white"
												/>
												<path
													d="M9.8265 22.9024C9.7627 23.1044 9.69889 23.3467 9.63509 23.589C9.57128 23.791 9.8265 24.0333 10.1455 24.0737C10.2093 24.0737 10.7836 24.1141 10.9112 23.7506C10.975 23.5487 11.0388 23.3467 11.1026 23.1448C11.1664 22.9428 10.975 22.7005 10.656 22.6601C10.2731 22.5389 9.89031 22.6601 9.8265 22.9024Z"
													fill="white"
												/>
											</svg> */}
											<img src="logo.jpg" width="90" height="100" />
										</span>
										<div className="flex h-full md:flex-col justify-center items-center py-6 pr-2">
											<h1 className="md:text-2xl text-lg font-bold text-primary-600">
												STRAW HAT
											</h1>
											<h1 className="md:text-2xl text-lg font-bold text-primary-600 md:ml-0 ml-2">
												UNIVERSITY
											</h1>
										</div>
										<button
											onClick={() => setmenuOpen(!menuOpen)}
											className="md:hidden p-2 m-4 border rounded border-secondary-500 transition-all duration-500 hover:bg-primary-600 hover:text-white"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												class="w-6 h-6"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
												/>
											</svg>
										</button>
									</div>
									{menuItems.map(({ href, title, icon, duration }) => (
										<li
											className={`my-3 ${
												menuOpen ? "block navbarin" : "hidden"
											} md:block transition-all `}
											key={title}
										>
											<Link href={href} legacyBehavior>
												<a
													className={`flex px-6 py-3  items-center rounded hover:text-secondary-700 hover:bg-primary-100 cursor-pointer ${
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
									<li
										className={`my-3 border-t md:visible border-secondary-500  ${
											menuOpen ? "block" : "hidden"
										} md:block
                  }`}
										key="logout"
									>
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
		</Protected>
	);
}

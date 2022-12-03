import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Logged from "../components/logged";
import { useAuth } from "../contexts/UserAuthContexts";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Signin() {
	const [data, setData] = useState({ email: "", password: "" });
	const { login, user } = useAuth();
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	const router = useRouter();
	useEffect(() => {
		if (user) router.push("/");
	}, [user]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (data.email == "" || data.password == "") {
			setError("All the fields are required");
		} else {
			if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
				try {
					await login(data.email, data.password).then(() => {
						setSuccess("Login successful");
						setTimeout(() => {
							router.push("/");
						}),
							3000;
					});
				} catch (e) {
					switch (e.code) {
						case "auth/user-not-found":
							setError("User doesn't exist");
							break;
						case "auth/wrong-password":
							setError("Invalid Credentials");
							break;
						case "auth/invalid-email":
							setError("Invalid Credentials");
							break;
						case "auth/user-disabled":
							setError("User disabled");
							break;
						case "auth/too-many-requests":
							setError(
								"Account blocked due to too many attempts. Please try again later"
							);
							break;
						case "auth/network-request-failed":
							setError("Network request failed");
							break;
						default:
							setError("Something went wrong");
					}
				}
			} else {
				setError("Invalid email");
			}
		}
	};

	return (
		<div className="flex flex-col justify-center items-center h-screen bg-white">
			<div>
				<h1 className="text-4xl pb-16 font-extrabold text-black font-bold">
					Straw Hat University
				</h1>
			</div>
			<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-200 dark:border-gray-700">
				<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
					<h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
						Login
					</h1>
					{error && (
						<div
							className="bg-red-100 border-2 rounded-md text-center border-red-300 text-red-700 p-3"
							role="alert"
						>
							<p>{error}</p>
						</div>
					)}
					{success && (
						<div
							className="bg-green-100 border-2 rounded-md text-center border-green-300 text-green-700 p-3"
							role="alert"
						>
							<p>{success}</p>
						</div>
					)}
					<form className="space-y-4 md:space-y-6" action="#">
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
							>
								Your Email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
								placeholder="hello@gmail.com"
								onChange={(e) => setData({ ...data, email: e.target.value })}
								required=""
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
							>
								Password
							</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="••••••••"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
								onChange={(e) => setData({ ...data, password: e.target.value })}
								required=""
							/>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-start">
								<div className="flex items-center h-5">
									<input
										id="remember"
										aria-describedby="remember"
										type="checkbox"
										className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary dark:ring-offset-gray-800"
										required=""
									/>
								</div>
								<div className="ml-3 text-sm">
									<label
										htmlFor="remember"
										className="text-gray-500 dark:text-gray-600"
									>
										Remember me
									</label>
								</div>
							</div>
							<a
								href="#"
								className="text-sm font-medium text-primary text-black hover:underline dark:text-primary"
							>
								Forgot password?
							</a>
						</div>
						<button
							type="submit"
							onClick={handleSubmit}
							className="w-full text-white bg-primary hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
						>
							Sign in
						</button>
						<p className="text-sm font-light text-gray-500 dark:text-gray-600">
							Don’t have an account yet?{" "}
							<Link
								href="/signup"
								className="font-medium text-primary hover:underline dark:text-indigo-500 dark:text-primary"
							>
								Sign up
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}

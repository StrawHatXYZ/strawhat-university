import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../contexts/UserAuthContexts";
import { getAuth, updateProfile } from "firebase/auth";
import { useRouter } from "next/router";
import { db, auth } from "../config/firebase.config";
import Logged from "../components/logged";
import { doc, setDoc } from "firebase/firestore";

export default function Signup() {
	const { signup } = useAuth();
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [lname, setLname] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [Confpassword, setConfPassword] = useState("");
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (
			email == "" ||
			password == "" ||
			Confpassword == "" ||
			name == "" ||
			lname == "" ||
			phone == ""
		) {
			setError("All the fields are required");
		} else if (password != Confpassword) {
			setError("Passwords do not match");
		} else {
			if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
				try {
					await signup(email, password)
						.then((e) => {
							console.log(e);
							updateProfile(e.user, {
								displayName: name + " " + lname,
							})
								.then(() => {
									// console.log("success");
								})
								.catch((error) => {
									// console.log("error");
								});
							setDoc(
								doc(
									db,
									"university",
									"users",
									"Account creation",
									e.user.email
								),
								{
									First_name: name,
									Last_name: lname,
									Phone: phone,
									Email: email,
									Creation_time: e.user.metadata.creationTime,
								}
							);

							setSuccess("Account created successfully");
							setTimeout(() => {
								router.push("/login");
							}),
								3000;
						})
						.catch((e) => {
							switch (e.code) {
								case "auth/email-already-in-use":
									setError("Email already in use");
									break;
								case "auth/invalid-email":
									setError("Invalid email");
									break;
								case "auth/weak-password":
									setError("Password is too weak.");
									break;
								case "auth/network-request-failed":
									setError("Network request failed");
									break;
								default:
							}
						});
				} catch {
					setError("Network request failed");
				}
			} else {
				setError("Invalid email");
			}
		}
	};

	return (
		<Logged>
			<div className="flex flex-col justify-center items-center h-screen bg-white">
				<div className="mt-20">
					<h1 className="text-4xl pb-7 text-black font-extrabold">
						Straw Hat University
					</h1>
				</div>
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-200 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
							Create Account
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
							<div className="flex ">
								{/* <label
									htmlFor="text"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Name
								</label> */}
								<input
									type="text"
									name="name"
									id="name"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
									placeholder="Name"
									onChange={(e) => setName(e.target.value)}
									required=""
								/>
								{/* <label
									htmlFor="text"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									 Last Name
								</label> */}
								<input
									type="text"
									name="lastname"
									id="lastname"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary ml-2 focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
									placeholder="Last name"
									onChange={(e) => setLname(e.target.value)}
									required=""
								/>
							</div>
							<div>
								<label
									htmlFor="tel"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
								>
									Phone Number
								</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
									placeholder="+91"
									onChange={(e) => setPhone(e.target.value)}
									required=""
								/>
							</div>
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
									onChange={(e) => setEmail(e.target.value)}
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
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-bluine-500 dark:focus:border-indigo-500"
									onChange={(e) => setPassword(e.target.value)}
									required=""
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
								>
									Confirm Password
								</label>
								<input
									type="password"
									name="confpassword"
									id="confpassword"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
									onChange={(e) => setConfPassword(e.target.value)}
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
							</div>
							<button
								type="submit"
								onClick={handleSubmit}
								className="w-full text-white bg-primary hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
							>
								Sign Up
							</button>
							<p className="text-sm font-light text-gray-500 dark:text-gray-600">
								Already have an account?{" "}
								<Link
									href="/"
									className="font-medium text-primary hover:underline dark:text-indigo-500"
								>
									Login
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</Logged>
	);
}

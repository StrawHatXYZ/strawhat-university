import Protected from "../components/protectedroute";

export default function Logout() {
	return (
		<Protected>
			<div className="flex h-full flex-col justify-center items-center bg-secondary-400">
				<h1 className="text-4xl mb-5 font-bold">Logout</h1>
				<span className="text-7xl">✌️</span>
			</div>
		</Protected>
	);
}

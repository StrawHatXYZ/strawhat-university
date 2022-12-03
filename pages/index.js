import Protected from "../components/protectedroute";
export default function Home() {

	return (
		<Protected>
			<div className="flex h-full flex-col justify-center items-center bg-secondary-400">
				<h1 className="text-4xl mb-5 font-bold">Home</h1>
				<span className="text-7xl">🏡</span>
			</div>
		</Protected>
	);
}

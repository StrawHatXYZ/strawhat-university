import Protected from "../components/protectedroute";
import Welcome from "../components/welcome";
export default function Home() {

	return (
		<Protected>
			<div className="flex h-full flex-col  bg-secondary-400">
				<Welcome />
			</div>
		</Protected>
	);
}

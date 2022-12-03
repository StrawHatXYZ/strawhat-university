import { useRouter } from "next/router";
import { useAuth } from "../contexts/UserAuthContexts";

export default function Logged({ children }) {
	const { user } = useAuth();
	const router = useRouter();
	if (user) {
		router.push("/");
	} else {
		return children;
	}
}
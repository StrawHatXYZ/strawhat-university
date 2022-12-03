import { useAuth } from "../contexts/UserAuthContexts";
import { useRouter } from "next/router";

export default function Protected({ children }) {
	const { user } = useAuth();
	const router = useRouter();

	if (user) {
		return children;
	} else {
		router.push("/login");
	}
}

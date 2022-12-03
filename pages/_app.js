import Layout from "../components/layout";
import Head from "next/head";
import "../styles/globals.css";
import { UserAuthContextProvider } from "../contexts/UserAuthContexts";

function MyApp({ Component, pageProps, ...appProps }) {
	const getContent = () => {
		if (["/login"].includes(appProps.router.pathname)) {
			return (
				<>
					<UserAuthContextProvider>
						<Component {...pageProps} />
					</UserAuthContextProvider>
				</>
			);
		}
		if (["/signup"].includes(appProps.router.pathname)) {
			return (
				<>
					<UserAuthContextProvider>
						<Component {...pageProps} />
					</UserAuthContextProvider>
				</>
			);
		}
		return (
			<UserAuthContextProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</UserAuthContextProvider>
		);
	};
	return (
		<>
			<Head>
				<title>Straw Hat University</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			{getContent()}
		</>
	);
}

export default MyApp;

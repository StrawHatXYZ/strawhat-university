import Avatar from "boring-avatars";
import { userAgent } from "next/server";
import Layout from "../components/layout";
import Protected from "../components/protectedroute";
import { useAuth } from "../contexts/UserAuthContexts";
export default function Profile() {
  const { user } = useAuth();
  return (
    <Layout>
      <div className="flex h-full flex-col justify-center items-center bg-secondary-400">
        <h1 className="text-4xl mb-5 font-bold">Profile</h1>
        <span className="text-7xl">👨</span>
      </div>
    </Layout>
  );
}

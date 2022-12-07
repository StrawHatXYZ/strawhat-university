import Avatar from "boring-avatars";
import { userAgent } from "next/server";
import Layout from "../components/layout";
import Protected from "../components/protectedroute";
import { useAuth } from "../contexts/UserAuthContexts";
export default function Profile() {
  const { user } = useAuth();
  return (
    <Protected>
      <Layout>
        <div className="flex h-full flex-col justify-center items-center bg-secondary-400">
          <h1 className="text-4xl mb-5 font-bold">Profile - {user.name}</h1>
          <Avatar
            size={100}
            name={user.name}
            variant="beam"
            colors={["#7551FF", "#292441", "#A2C6FF", "#2200B7", "#7A90CB"]}
          />
        </div>
      </Layout>
    </Protected>
  );
}

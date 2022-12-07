import { useAuth } from "../contexts/UserAuthContexts";
import Avatar from "boring-avatars";

export default function Welcome() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="flex flex-col md:flex-row md:justify-between  md:mt-12 ">
      <div className="flex ">
        <p className="md:text-4xl text-3xl mb-10 mr-6 font-medium">
          Welcome, <span className="text-primary-500">{user.name}</span>
        </p>
        <Avatar
          c
          size={40}
          name={user.name}
          variant="beam"
          colors={["#7551FF", "#292441", "#A2C6FF", "#2200B7", "#7A90CB"]}
        />
      </div>
      <div>
        <div className="flex flex-col items-center ">
          <div className="relative text-gray-400 w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
            <input
              type="text"
              name="search"
              className="py-3.5 w-full px-20  text-sm text-white rounded-lg pl-10 focus:outline-none bg-white focus:text-secondary-800"
              placeholder="Search..."
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

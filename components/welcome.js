import { useAuth } from "../contexts/UserAuthContexts";
export default function Welcome() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="flex justify-between mx-10 mt-20 ">
      <p className="text-4xl mb-5 font-medium">
        Welcome, <span className="text-primary-500">{user.name}</span>
      </p>
      <div>
        <div className="flex flex-col items-center">
          <div className="relative text-gray-400">
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
              className="py-3.5 px-20 text-sm text-white rounded-lg pl-10 focus:outline-none bg-white focus:text-secondary-800"
              placeholder="Search..."
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

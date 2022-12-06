import Protected from "../components/protectedroute";
import Welcome from "../components/welcome";
import Card from "../components/courseCard";
import Layout from "../components/layout";
export default function Home() {
  return (
    <Layout>
      <div className="flex h-full flex-col p-10 bg-secondary-400">
        <Welcome />
        <h1 className="text-4xl my-10 font-medium">Available Courses</h1>
        <div className="flex flex-col items-center justify-center">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Layout>
  );
}

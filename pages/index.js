import Protected from "../components/protectedroute";
import Welcome from "../components/welcome";
import Card from "../components/courseCard";
import Layout from "../components/layout";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase.config";
import Link from "next/link";

export async function getServerSideProps() {
  const data = [];
  const res = await getDocs(collection(db, "courses"));
  res.forEach((e) => data.push({ ...e.data(), id: e.id }));

  return {
    props: { data },
  };
}

export default function Home({ data }) {
  return (
    <Layout>
      <div className="flex h-full flex-col p-10 bg-secondary-400">
        <Welcome />
        <h1 className="text-4xl my-10 font-medium">Available Courses</h1>
        <div className="flex flex-col items-center justify-center">
          {data.map((e) => (
            <Link
              className="flex items-center justify-center"
              key={e.id}
              href={`/courses/${e.url}`}
            >
              <Card title={e.name} key={e} description={"SG"} imgUrl={"D"} />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

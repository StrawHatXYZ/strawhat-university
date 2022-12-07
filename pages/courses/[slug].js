import { useRouter } from "next/router";
import Accordion from "../../components/Accordion";
import Layout from "../../components/layout";

import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase.config";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "blockchain-development" } },
      { params: { slug: "web-development-with-nextjs" } },
      { params: { slug: "mobile-development-with-flutter" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}
export async function getStaticProps({ params }) {
  const { slug } = params;
  const dt = await getDocs(collection(db, "courses"));
  var data = {};
  dt.forEach((e) => {
    if (e.data().url.trim() === slug.trim()) data = e.data();
  });
  return {
    props: { slug: data },
  };
}
export default function Course({ slug }) {
  const router = useRouter();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full">
        <h1> {slug.name}</h1>
        <ul>
          {slug.modules?.modules.map((e, i) => (
            <Accordion key={i} title={e.name} content={e.submodules} />
          ))}
        </ul>
      </div>
    </Layout>
  );
}

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
      <div className="md:mt-8 md:p-10 p-4">
        <h1 className="text-3xl font-semibold text-primary-600 text-center md:text-left my-5 md:ml-12">
          {slug.name}
        </h1>
        <div className="flex flex-col items-center justify-center w-full md:mt-10 ">
          <ul className="w-11/12">
            <div className="p-4 bg-white rounded-md divide-y-2">
              {slug.modules?.modules.map((e, i) => (
                <Accordion
                  key={i}
                  id={i}
                  title={e.name}
                  content={e.submodules}
                />
              ))}
            </div>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

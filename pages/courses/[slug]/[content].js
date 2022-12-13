import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../config/firebase.config";

export async function getStaticPaths() {
  const dt = await getDocs(collection(db, "courses"));
  var paths = [];
  dt.forEach((e) => {
    const content = e.data().url.trim();
    e.data().modules.modules.forEach((sub) =>
      sub.submodules.map((f) => {
        paths.push({
          params: {
            slug: content,
            content: f.name.toLowerCase().split(" ").join("-"),
          },
        });
      })
    );
  });
  paths = paths.length === 0 ? [{}] : paths;
  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}
export async function getStaticProps({ params }) {
  const { content, slug } = params;
  var data = {};
  return {
    props: { slug: data },
  };
}
export default function Course({ slug }) {
  const router = useRouter();

  return (
    <Layout>
      <div className="md:mt-8 h-screen md:p-10 p-4">
        <h1>{router.query.content}</h1>
        <iframe
          className="h-full w-full"
          src="https://docs.google.com/presentation/d/1DcAVyyMgbGwlKfNvKbEeBKnZKN635o0kRC1mTBcNR-k/embed?start=false&amp;loop=false&amp;delayms=3000"
          allow="autoplay"
        ></iframe>
      </div>
    </Layout>
  );
}

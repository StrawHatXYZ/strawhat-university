import Image from "next/image";

export default function Card() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-white p-2 mt-6 rounded-lg  md:w-3/5">
      <div className="flex flex-col p-10 md:w-1/2 justify-start items-start">
        <h1 className="text-3xl font-bold">Blockchain Basics</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem,
          doloremque temporibus. Rerum consequatur aut obcaecati corrupti quod
          eos accusantium illum? Nobis, dolores. Repellat voluptatem quia,
          tempore a dolor ipsam totam.
        </p>

        <div className="flex mt-4">
          <button className="bg-primary-500 md:px-10 px-5 py-2.5 my-4 text-white rounded-3xl">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex flex-col md:ml-28 p-4 order-first md:order-last ">
        <Image src="/on-chain.jpg" width={300} height={300} alt="Blockchain" />
      </div>
    </div>
  );
}

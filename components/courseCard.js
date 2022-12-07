import Image from "next/image";

export default function Card({ title, description, imgUrl }) {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-white  mt-6 rounded-lg  md:w-4/5 hover:shadow hover:border border-primary-500/75  hover:scale-105 transform transition duration-500 ease-in-out">
      <div className="flex flex-col py-8 pl-8 md:w-1/2 justify-start items-start">
        <h1 className="text-3xl font-bold py-4">{title}</h1>
        <p className="text-gray-500 text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem,
          doloremque temporibus. Rerum consequatur aut obcaecati.
        </p>

        <div className="flex items-center justify-center mt-4">
          <button className="bg-primary-500 md:px-10 px-5 py-2.5 my-4 text-white rounded-3xl">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex flex-col md:ml-8 p-4 order-first md:order-last ">
        <Image src="/on-chain.jpg" width={300} height={300} alt="Blockchain" />
      </div>
    </div>
  );
}

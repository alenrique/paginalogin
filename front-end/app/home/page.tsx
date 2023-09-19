import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full bg-backgrondColor flex flex-col items-center justify-center gap-28">
      <div className="px-28 py-14 flex items-center justify-evenly bg-zinc-800 bg-opacity-20 rounded-[59px] backdrop-blur-[80px] max-md:flex-col max-md:w-full">
        <div className="text-zinc-100 text-4xl font-semibold">
          Você entrou no sistema
        </div>
      </div>
    </div>
  );
}

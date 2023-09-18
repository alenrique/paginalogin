import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full bg-backgrondColor flex flex-col items-center justify-center gap-28">
      <div className="text-zinc-100 text-4xl font-semibold">Bem-vindo</div>
      <div className="w-[1199px] h-[202px] flex items-center justify-evenly bg-zinc-800 bg-opacity-20 rounded-[59px] backdrop-blur-[80px] max-md:flex-col max-md:w-full">
        <Link href={"/login"} className="w-80 h-14 flex items-center justify-center bg-gradient-to-r from-purple-600 to-red-500 rounded-[15px] transition-opacity duration-300 hover:opacity-50">
          <p className="text-white text-lg font-medium">Login</p>
        </Link>
        <Link href={"/register"} className="w-80 h-14 flex items-center justify-center bg-gradient-to-r from-purple-600 to-red-500 rounded-[15px] transition-opacity duration-300 hover:opacity-50">
          <p className="text-white text-lg font-medium">Sign up</p>
        </Link>
      </div>
    </div>
  );
}

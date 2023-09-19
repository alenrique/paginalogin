'use client'

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Obj = {
  id: number;
  name: string;
  email: string;
  password: string
}

export default function Home() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter()

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const users = await axios.get('http://localhost:8080/api/user')
      const user = users.data.find((obj: Obj)  => obj.name == name)
      if(user){
        if(user.password == password){
          router.push('/home')
        }
        else{
          alert('Senha incorreta!')
        }
      }
      else{
        alert('Esse nome de usuário não existe!')
      }
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <div className="w-full h-full flex items-center justify-center gap-36 max-md:flex-col max-md:gap-0">
      <Image
        src="/illustration.png"
        alt="menino lendo"
        width={400}
        height={50}
      />
      <div className="w-[450px] h-[550px] flex flex-col items-center justify-center bg-zinc-800 bg-opacity-20 rounded-[59px] backdrop-blur-[80px] gap-6 max-md:w-full">
        <h1 className="text-zinc-100 text-3xl font-semibold">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col text-white gap-2">
          <label htmlFor="username">Nome de usuário</label>
          <input
            placeholder="Digite seu nome de usuário"
            className="w-80 h-14 rounded-[15px] bg-zinc-700 p-6"
            id="username"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="password">Senha</label>
          <input
            placeholder="********"
            className="w-80 h-14 rounded-[15px] bg-zinc-700 p-6"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-80 h-14 flex items-center justify-center bg-gradient-to-r from-purple-600 to-red-500 rounded-[15px] text-white mt-4 transition-opacity duration-300 hover:opacity-50">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

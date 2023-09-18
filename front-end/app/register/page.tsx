'use client'

import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";

export default function Home() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const data = {
        name: name,
        email: email,
        password: password
      }

      await axios.post('http://localhost:8080/api/user', data).then((res) => {
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })

      console.log(name)
      console.log(email)
      console.log(password)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full h-full flex items-center justify-center gap-36 max-md:flex-col max-md:gap-0">
      <div className="w-[450px] h-[550px] flex flex-col items-center justify-center bg-zinc-800 bg-opacity-20 rounded-[59px] backdrop-blur-[80px] gap-6 max-md:w-full">
        <h1 className="text-zinc-100 text-3xl font-semibold">Criar nova conta</h1>
        <form onSubmit={handleSubmit} className="flex flex-col text-white gap-2">
        <label htmlFor="email">Email</label>
          <input
            placeholder="Digite seu email"
            className="w-80 h-14 rounded-[15px] bg-zinc-700 p-6"
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="username">Nome de usuário</label>
          <input
            placeholder="Digite seu nome de usuário"
            className="w-80 h-14 rounded-[15px] bg-zinc-700 p-6"
            id="username"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="password">Senha</label>
          <input
            placeholder="********"
            className="w-80 h-14 rounded-[15px] bg-zinc-700 p-6"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="w-80 h-14 flex items-center justify-center bg-gradient-to-r from-purple-600 to-red-500 rounded-[15px] text-white mt-4 transition-opacity duration-300 hover:opacity-50">
            Criar
          </button>
        </form>
      </div>
      <Image
        src="/illustration2.png"
        alt="menino mexendo no celular"
        width={350}
        height={50}
      />
    </div>
  );
}

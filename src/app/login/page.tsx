"use client";

import Link from "next/link";

export default function Login(){
    return(
        <main>
          <div className="flex pb-60 items-center justify-center h-screen  bg-gray-700">
              <form 
                  className="container flex flex-col items-center space-y-6 p-8 max-w-md rounded-xl bg-gray-300 shadow-xl"
              >
                  <div className="flex items-center gap-2 max-w-md">
                    <span className='text-emerald-500 text-3xl font-bold'>Logo</span>
                    <h1 className='uppercase text-slate-600 font-bold text-xl'>App Money</h1>
                  </div>

                  <input type='email' placeholder='Digite seu email' className=" w-full p-3 font-bold text-md rounded-md"  />
                  <input type='password' placeholder='Digite sua senha' className="w-full p-3 font-bold text-md rounded-md"/>
                    
                  <div className="flex max-w-md gap-12">
                    <button className='w-32 bg-emerald-500 font-bold p-3 rounded-md text-white'>
                      <Link href="/dashboard"> Entrar </Link>
                    </button>
                    <button className='w-32 bg-cyan-500 font-bold p-3 rounded-md text-white'>
                    <Link href="/user-register" > Cadastrar </Link>  
                    </button> 
                  </div>
              </form>
          </div>
        </main>
    )
}
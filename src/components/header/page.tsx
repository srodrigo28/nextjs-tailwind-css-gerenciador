import Link from "next/link";

export default function Header(){
    return(
        <div className="container flex items-center pr-14 pl-14 mb-3 justify-between shadow-xl h-20 rounded-xl bg-zinc-900">
                <div className=" conatainer flex items-center">
                    <span className='text-emerald-500 mr-4 text-3xl font-bold'>Logo</span>
                    <h1 className="uppercase  font-bold text-3xl text-slate-100" >Money Manager</h1>
                </div>
                <button className="text-red-600 font-bold text-2xl">
                    <Link href="/">Sair</Link>
                </button>
        </div>
    )
}
import Link from "next/link";

export default function DashboardLayout( {children} : {children: React.ReactNode}){
    return(
        <div className="flex pb-60 items-center h-screen bg-zinc-700">
        <div className="container m-auto h-screen flex items-center justify-center flex-col">
            <div className="container flex items-center pr-14 pl-14 justify-between shadow-xl h-20 rounded-xl bg-zinc-900">
                <div className=" conatainer flex items-center">
                    <span className='text-red-500 mr-4 text-2xl font-bold'>Logo</span>
                    <h1 className="uppercase  font-bold text-3xl text-slate-100" >Money Manager</h1>
                </div>
                <button className="text-red-600 font-bold text-2xl">
                    <Link href="/">Sair</Link>
                </button>
            </div>
                
            <div className="container h-screen items-center mt-2 rounded-xl shadow-md bg-slate-300">
                {children}
            </div>
        </div>
        </div>
    )
}
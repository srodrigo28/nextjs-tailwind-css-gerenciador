export default function DashboardTable(){
    return(
        <div className=" w-full pr-24 pl-24 ">
            <table className=" w-full m-auto border-separate border-spacing-1 ">
                <thead className="bg-zinc-900 rounded-lg font-bold uppercase text-slate-50 text-center">
                    <tr className="font-bold">
                        <th className="w-36 rounded-md p-3">Data</th>
                        <th className="w-auto rounded-md p-3">Descrição</th>
                        <th className="w-32 rounded-md p-3">Valor</th>
                        <th className="w-32 rounded-md p-3">Operações</th>
                        <th className="w-32 text-center rounded-md p-3">Ações</th>
                    </tr>
                </thead>
                <tbody className="bg-slate-50 text-slate-600">
                <tr>
                        <td className="text-center rounded-md p-2">10/10/2024</td>
                        <td className="rounded-md p-2 pl-3">pagamento conta de luz</td>
                        <td className="rounded-md p-2 pl-3 text-center">R$ 210,00</td>
                        <td className="rounded-md p-2 text-center">expense</td>
                        <td className="text-center flex justify-center gap-1 pt-2 pb-2 rounded-md ">
                            <button className="w-8 h-8 rounded bg-green-500 font-light text-slate-100">x</button>
                            <button className="w-8 h-8 rounded bg-red-500 font-light text-slate-100">-</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center rounded-md p-2">10/10/2024</td>
                        <td className="rounded-md p-2 pl-3">pagamento conta de luz</td>
                        <td className="rounded-md p-2 pl-3 text-center">R$ 210,00</td>
                        <td className="rounded-md p-2 text-center">expense</td>
                        <td className="text-center flex justify-center gap-1 pt-2 pb-2 rounded-md">
                            <button className="w-8 h-8 rounded bg-green-500 font-light text-slate-100">x</button>
                            <button className="w-8 h-8 rounded bg-red-500 font-light text-slate-100">-</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center rounded-md p-2">10/10/2024</td>
                        <td className="rounded-md p-2 pl-3">pagamento conta de luz</td>
                        <td className="rounded-md p-2 pl-3 text-center">R$ 210,00</td>
                        <td className="rounded-md p-2 text-center">expense</td>
                        <td className="text-center flex justify-center gap-1 pt-2 pb-2 rounded-md">
                            <button className="w-8 h-8 rounded bg-green-500 font-light text-slate-100">x</button>
                            <button className="w-8 h-8 rounded bg-red-500 font-light text-slate-100">-</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center rounded-md p-2">10/10/2024</td>
                        <td className="rounded-md p-2 pl-3">pagamento conta de luz</td>
                        <td className="rounded-md p-2 pl-3 text-center">R$ 210,00</td>
                        <td className="rounded-md p-2 text-center">expense</td>
                        <td className="text-center flex justify-center gap-1 pt-2 pb-2 rounded-md">
                            <button className="w-8 h-8 rounded bg-green-500 font-light text-slate-100">x</button>
                            <button className="w-8 h-8 rounded bg-red-500 font-light text-slate-100">-</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
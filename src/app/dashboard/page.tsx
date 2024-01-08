import Header from "@/components/header/page";

export default function Dashboard(){

    return(
          <div className="flex items-center flex-col justify-center h-screen  bg-gray-700">
              <Header />
              <div className="container flex-col h-screen flex items-start pr-14 pl-14 pt-4 shadow-xl rounded-xl bg-zinc-300">
                <h1 className="">Hey, Manoel</h1>

                <div className="form w-full">
                  <form className=" flex flex-row gap-2  mt-4 mb-10">
                    <input type="date" className="outline-none block w-56 rounded-md p-3 text-center  placeholder:text-gray-600" />
                    <input type="text" className="outline-none block w-full rounded-md p-3  placeholder:text-gray-600" placeholder="Insira a descrição da atividade"  />
                    <input type="text" className="outline-none block w-32 rounded-md p-3  placeholder:text-gray-600" placeholder="R$ 0,00" />
                    
                    <select className="outline-none block w-34 rounded-md p-2 me-2  placeholder:text-gray-400">
                        <option value="type p-6" className="">Selecione um</option>
                        <option value="expense" className="text-center">Entrada</option>
                        <option value="payment" className="text-center">Saída</option>
                    </select>

                    <button type="submit" className="bg-blue-900 w-36 pl-5 pr-5 text-slate-50 font-bold rounded">Inserir</button>

                  </form>
                </div>
                
                <div className="w-full ">
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
                        </tbody>
                    </table>
                </div>

              </div>
          </div>
    )
}
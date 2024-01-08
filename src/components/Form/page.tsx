export default function DashboardForm(){
    return(
        <div className=" w-full pr-24 pl-24">
            <form className=" flex flex-row gap-2  mt-10 mb-10">
                
                <input type="date" className="outline-none block w-72 rounded-md p-3 text-center  placeholder:text-gray-600" placeholder="Insira o valor" />
                <input type="text" className="outline-none block w-full rounded-md p-3  placeholder:text-gray-600" placeholder="Insira a descrição da atividade"  />
                <input type="text" className="outline-none block w-auto rounded-md p-3  placeholder:text-gray-600" placeholder="Insira o valor" />
                
                <select className="outline-none block w- rounded-md p-2 me-2  placeholder:text-gray-400">
                    <option value="type p-6" className="">Selecione um</option>
                    <option value="expense" className="text-center">Entrada</option>
                    <option value="payment" className="text-center">Saída</option>
                </select>    
                <button className="bg-blue-900 pl-5 pr-5 text-slate-50 font-bold rounded">Inserir</button>
            </form>
        </div>
    )
}
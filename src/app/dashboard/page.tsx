"use client"

import Header from "@/components/Header/page";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./dashboard.css"
import { useState } from "react";
import { NumericFormat } from 'react-number-format'

export default function Dashboard(){
    const [value, setValue] = useState('')

    const [dataText, setDataText] = useState('')
    const [descricao, setDescricao] = useState('')
    const [category, setCategory] = useState('')

    const formataMoeda = (value: any) => {
        return  new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value)
    }

    const validarCampos = () => {
        if(dataText === '' ){
            alert('Preencha o campo Data')
            return false
        }else if(descricao === '' || descricao.length < 1 ){
            alert('Preencha o campo descricao')
            return false
        }else if(value === '' || value.length < 1 ){
            alert('Preencha o campo Valor')
            return false
        }else if(category === '' || category.length < 1 ){
            alert('Preencha o campo Data')
            return false
        }
    }

    const cadastrar = (e: any) => {
        e.preventDefault();
        validarCampos();
        console.log(formataMoeda(value));
        console.log(
            "\n Data: " + dataText +
            "\n Descrição:  " + descricao +
            "\n Valor:  " + value +
            "\n Categoria:  " + category
        )
    }
    // console.log(formataMoeda(100))

    return(
          <div className="flex items-center flex-col justify-center h-screen  bg-gray-700">
              <Header />
              <div className="container flex-col h-screen flex items-start pr-14 pl-14 pt-4 shadow-xl rounded-xl bg-zinc-300">
                <h1 className="">Hey, Manoel</h1>

                <div className="form w-full">
                  <form onSubmit={cadastrar} className=" flex flex-row gap-2  mt-4 mb-10">
                    <input 
                        type="date"
                        value={dataText}
                        onChange={ e => setDataText(e.target.value)}
                        className="outline-none block w-56 rounded-md p-2 text-center  placeholder:text-gray-600" 
                    />
                    <input type="text" 
                        value={descricao}
                        onChange={ e => setDescricao(e.target.value)}
                        placeholder="Insira a descrição da atividade"
                        className="outline-none block w-full rounded-md p-2  placeholder:text-gray-600" 
                    />
                    <NumericFormat type="text" 
                        value={value} 
                        onValueChange={ (values) => {setValue(values.value)}}
                        className="outline-none block w-32 rounded-md p-2  placeholder:text-gray-600" placeholder="R$ 0,00"

                        allowLeadingZeros={false}
                        decimalScale={2}
                        fixedDecimalScale={true}
                        decimalSeparator=','
                        allowedDecimalSeparators={['.', ';', ',']}
                        prefix='R$ '
                        thousandSeparator='.'
                    />
                    <select value={category} onChange={ e => setCategory(e.target.value)}
                        className="outline-none block w-34 rounded-md p-2 me-2  placeholder:text-gray-400" >
                        <option value="selecionar" aria-readonly className="">Selecione um</option>
                        <option value="expense" className="text-center">Entrada</option>
                        <option value="payment" className="text-center">Saída</option>
                    </select>

                    <button type="submit" className="btn-animate-hover bg-blue-900 w-36 pl-5 pr-5 text-slate-50 font-bold rounded">Inserir</button>

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
                                <td className="td-animate text-center rounded-md p-2">10/10/2024</td>
                                <td className="td-animate rounded-md p-2 pl-3">pagamento conta de luz</td>
                                <td className="td-animate rounded-md p-2 pl-3 text-center">R$ 210,00</td>
                                <td className="td-animate rounded-md p-2 text-center">expense</td>
                                <td className="td-animate text-center flex justify-center gap-1 pt-2 pb-2 rounded-md">
                                    <button className="btn-animate flex items-center justify-center w-10 h-10 rounded bg-green-500 text-slate-100">
                                        <FaEdit className="btn-animate" />
                                    </button>
                                    <button className="btn-animate flex items-center justify-center w-10 h-10 rounded bg-red-500 text-slate-100">
                                        <FaTrash className="btn-animate" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="td-animate text-center rounded-md p-2">10/10/2024</td>
                                <td className="td-animate rounded-md p-2 pl-3">pagamento conta de Escola</td>
                                <td className="td-animate rounded-md p-2 pl-3 text-center">R$ 210,00</td>
                                <td className="td-animate rounded-md p-2 text-center">expense</td>
                                <td className="td-animate text-center flex justify-center gap-1 pt-2 pb-2 rounded-md">
                                    <button className="btn-animate flex items-center justify-center w-10 h-10 rounded bg-green-500 text-slate-100">
                                        <FaEdit className="btn-animate" />
                                    </button>
                                    <button className="btn-animate flex items-center justify-center w-10 h-10 rounded bg-red-500 text-slate-100">
                                        <FaTrash className="btn-animate" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="td-animate text-center rounded-md p-2">10/10/2024</td>
                                <td className="td-animate rounded-md p-2 pl-3">pagamento conta de luz</td>
                                <td className="td-animate rounded-md p-2 pl-3 text-center">R$ 210,00</td>
                                <td className="td-animate rounded-md p-2 text-center">expense</td>
                                <td className="td-animate text-center flex justify-center gap-1 pt-2 pb-2 rounded-md">
                                    <button className="btn-animate flex items-center justify-center w-10 h-10 rounded bg-green-500 text-slate-100">
                                        <FaEdit className="btn-animate" />
                                    </button>
                                    <button className="btn-animate flex items-center justify-center w-10 h-10 rounded bg-red-500 text-slate-100">
                                        <FaTrash className="btn-animate" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

              </div>
          </div>
    )
}
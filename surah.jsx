import React from 'react'
import { useNavigate } from 'react-router-dom'

const Surah = ({ data }) => {
    const navigate = useNavigate()
    const openSurah = (id) => {
        navigate("/surah/" + id, {})
    }

    return (
        <div className='p-5 bg-slate-800 rounded-md w-[75vw] flex flex-col hover:cursor-pointer hover:bg-slate-700' onClick={() => openSurah(data.nomor)}>
            <span className='text-lg font-bold'>{data.namaLatin} - {data.nama}</span>
            <span className='text-sm'>{data.arti} | {data.jumlahAyat} Ayat</span>
        </div>
    )
}

export default Surah
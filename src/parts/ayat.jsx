import React from 'react'

const Ayat = ({ ayat }) => {
    return (
        <div className='p-3 bg-slate-800 rounded-md w-[75vw] flex flex-row  align-middle'>
            <span className='w-12'>
                {ayat.nomorAyat}
            </span>
            <div className="flex flex-col w-full gap-3">
                <span className='w-full text-right font-bold text-xl'>
                    {ayat.teksArab}
                </span>
                <p className='text-right text-sm text-slate-500'>
                    {ayat.teksLatin}
                </p>
                <p className='text-sm text-slate-500 '>
                    {ayat.teksIndonesia}
                </p>
            </div>
        </div>
    )
}

export default Ayat
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import Ayat from '../components/ayat'

const Detail = () => {
    let { id } = useParams()
    const [nomor, setNomor] = useState()
    const [detail, setDetail] = useState({})
    const [ayat, setAyat] = useState([])
    const navigate = useNavigate()

    const navigateTo = (id) => {
        setNomor(id)
    }

    const getDetailSurah = async () => {
        await axios.get("https://equran.id/api/v2/surat/" + id)
            .then((result) => {
                setDetail(result.data.data)
                setAyat(result.data.data.ayat)
            }).catch((err) => {
                toast.error(err)
            });
    }

    useEffect(() => {
        setNomor(id)

        return () => {

        }
    }, [id])

    useEffect(() => {
        getDetailSurah()
    }, [nomor])

    return (
        <div className='h-full w-full overflow-auto flex justify-center p-10'>
            {detail &&
                (<div className="flex flex-col align-middle">
                    <div className="flex justify-between">
                        <div>
                            {
                                detail.suratSebelumnya && (
                                    <button className='p-5 ' onClick={() => navigateTo(detail.suratSebelumnya.nomor)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                        </svg>
                                    </button>
                                )
                            }
                        </div>
                        <div className="flex flex-col mb-5">
                            <span className='text-3xl font-bold text-center'>
                                {detail.namaLatin} - {detail.nama}
                            </span>
                            <span className='text-center font-semibold text-slate-600'>
                                {detail.arti} | {detail.jumlahAyat} Ayat
                            </span>
                        </div>
                        <div>
                            {
                                detail.suratSelanjutnya && (
                                    <button className='p-5 ' onClick={() => navigateTo(detail.suratSelanjutnya.nomor)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>
                                )
                            }
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        {ayat.map(a => (<><Ayat key={a.nomorAyat} ayat={a} /></>))}
                    </div>

                </div>)
            }
        </div>
    )
}

export default Detail
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Surah from '../components/surah';

const Home = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        await axios.get("https://equran.id/api/v2/surat")
            .then((result) => {
                setData(result.data.data)
            }).catch((err) => {
                toast.error(err)
            });
    }

    useEffect(() => {
        return () => {
            getData()
        }
    }, [])

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <div className='h-full w-full overflow-auto flex justify-center pb-10'>
            <div className="flex flex-col gap-3 ">
                <input type="text" className='mb-5 mt-10' />
                {data.map(d => (
                    <>
                        <Surah key={d.nomor} data={d} />
                    </>
                ))}
            </div>
            {/* <div className="container flex flex-col "> */}

            {/* </div> */}

        </div>
    )
}

export default Home
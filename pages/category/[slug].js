import { getCategories } from "../api/categories";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Category(props) {
    const router = useRouter();
    const slug = router.query.slug
    const [category, setCategory] = useState(slug)
    const [loadState, setLoadState] = useState(true);
    const [entries, setEntries] = useState([])

    useEffect(() => {
        const movieData = async () => {
            const list = await fetch('/api/movies');
            const listData = await list.json()
            setEntries(listData.data.results)
            console.log(entries);
            setLoadState(false);
        }

        movieData();

        return () => {

        }
    }, [])

    return (
        <div className="body-page min-h-screen">
            <div className="container">
                <h1 className="text-4xl capitalize font-bold mb-10">{category}</h1>
                {loadState || entries == [] ? <h3 className="">Loading...</h3> : 
                <div className="w-full">
                    <div className="grid grid-cols-4 gap-10 pb-10">
                        {entries.map((item, key) => (
                            <div key={key} className="category-box">
                                <Image
                                    src={'https://image.tmdb.org/t/p/w185' + item.poster_path}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>}
            </div>
        </div>
    )
}


import { getCategories } from "../api/categories";
import { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'

export default function Category({data}) {
    const [categories, updateCategories] = useState(data);
    console.log(categories);

    return (
        <div className="body-page min-h-screen pb-10">
            <div className="container">
                <h1 className="text-4xl font-bold mb-10">Categories</h1>
                <div className="w-full grid grid-cols-4 gap-20">
                    {categories.map((item, key) => (
                        <Link key={key} href={"/category/" + item[1].toLowerCase()} className="category-box">
                            <Image 
                                src={item[2]}
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="w-full absolute px-5 py-10 bottom-0 left-0 bg-black bg-opacity-25">
                                <h2 className="font-semibold text-2xl">{item[1]}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
export async function getServerSideProps() {
    // Fetch data from external API
    const data = await getCategories();
  
    // Pass data to the page via props
    return { props: { data } }
}
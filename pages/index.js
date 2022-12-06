import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { getCategories } from './api/categories';

export default function Home({data}) {
  const [categories, updateCategories] = useState(data);
  console.log(categories);

  return (
    <div className="body-page h-screen">
      <video
        autoPlay
        playsInline
        muted
        loop
        className={`absolute top-0 object-cover w-screen h-screen  pointer-events-none`}>
          <source src="/bg3.mp4" type="video/mp4" />
      </video>
      <div className="w-screen h-screen absolute top-0 bg-[transparent] left-0">
        <div className="container flex  items-center justify-center">
          <div className="row row-flex h-full">
              <div className="mb-20 text-center cursor-default">
                <h1 className="font-bold text-5xl">THE BEST SITE</h1>
                <h1 className="font-bold text-3xl my-3 italic">FOR THE</h1>
                <h1 className="font-bold text-6xl text-[red]">WORST MOVIES</h1>
              </div>
              <div className=" flex flex-wrap max-w-[80%] md:max-w-[600px] mx-auto gap-3 items-center transition-all hover:scale-105 rounded-md bg-black bg-opacity-30 p-5">
                <h3 className="font-medium text-xl cursor-default">Discover:</h3>
                {categories.slice(0, 8).map((item, key) => (
                  <Link key={key} href={"/category/" + item[1].toLowerCase()} className="home-button">{item[1]}</Link>
                ))}
                <Link href="/category" className="home-button">More</Link>
              </div>
              
          </div>
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
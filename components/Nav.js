import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react";

export default function Nav() {
    let currentPage = useRouter().pathname

    return (
        <div className="w-screen fixed top-0 left-0 py-5 z-[100]">
            <div className="container flex flex-row items-center">
                <div className="grow">
                    <Link className="text-3xl font-black" href="/">
                        bad_movie.ai
                    </Link>
                </div>
                <div className="flex row gap-5 items-center">
                    <Link className="col" href="/about">About</Link>
                    {currentPage == '/' ? '' : <Link className={`col ${currentPage == '/category' ? 'underline' : ''}`} href="/category">Categories</Link>}
                    <Link className="col bg-[red] rounded-md font-bold px-3 py-2" href="/category/random">RANDOM MOVIE</Link>
                </div>
            </div>
        </div>
    )
}
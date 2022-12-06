import Link from "next/link"

export default function Footer() {
    return (
        <div className="w-screen bg-[red] py-10">
            <div className="container flex flex-row items-center">
                <div className="grow">
                    <Link className="text-3xl font-black" href="/">
                        bad_movie.ai
                    </Link>
                </div>
                <div className="flex row gap-5 items-center">
                    <Link className="col" href="/about">About</Link>
                    <Link className="col" href="/romcoms">Categories</Link>
                </div>
            </div>
        </div>
    )
}
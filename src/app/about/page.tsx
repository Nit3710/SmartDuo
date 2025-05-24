import Link from "next/link";


 const About=()=>{
    // throw new Error("this is a error while loading page")
    return (
        <>
        <div className="text-red-300">Hello we are on about page</div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, enim.</p>
        <div className="flex gap-3 border bg-black text-white w-42">

        <Link href="/">Go to home page</Link>
        <Link href="/about/status">Go to status page</Link>
        </div>
        </>
    )
}

export default About;
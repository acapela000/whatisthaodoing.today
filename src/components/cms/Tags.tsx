import Link from 'next/link';


export function Tags({ tags }: { tags: string[] }) {
    return (
        <div className='mt-10'>
            {
                tags.map((tag) => {
                    return (
                        <span key={tag} className={`text-md font-medium mr-2 px-2.5 py-0.5 rounded-full  text-blue-300 hover:text-blue-400 transition-all duration-500 cursor-pointer`}>
                                <Link href={`/tags/${tag}`}>
                                    <samp className='text-blue-300'>#</samp>{tag}
                                </Link>
                        </span>
                    )
                })
            }
        </div>
    )
}
import { supabase } from "@/lib/supabase"
import { geologica, alegreyna } from "@/lib/fonts"

export const revalidate = 300

const renderContent = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g
    return text.split('\n').map((line, i) => {
        const parts = line.split(urlRegex)
        return (
            <span key={i}>
                {parts.map((part, j) =>
                    urlRegex.test(part) ? (
                        <a
                            key={j}
                            href={part}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline hover:text-blue-400 break-all"
                        >
                            {part}
                        </a>
                    ) : (
                        <span key={j}>{part}</span>
                    )
                )
                }
                <br />
            </span >
        )
    })
}

const Content = async ({ id }: { id: string }) => {

    const { data: blog, error } = await supabase
        .from('blogs')
        .select('title, content')
        .eq('id', id)
        .single()

    if (error || !blog) return <div>Blog not found.</div>

    return (
        <div className='flex flex-col gap-4'>
            <h1 className={`${geologica.className} text-4xl font-bold dark:text-white`}>
                {blog.title}
            </h1>

            <div className={`${alegreyna.className} text-gray-700 dark:text-gray-300 text-2xl leading-relaxed`}>
                {renderContent(blog.content)}
            </div>
        </div>
    )
}

export default Content
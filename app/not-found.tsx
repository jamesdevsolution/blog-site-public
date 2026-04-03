export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#f0f2f4] dark:bg-[#151718] flex items-center justify-center px-10">
            <div className="flex flex-col items-center gap-4 text-center">
                <h1 className="text-8xl font-bold text-black dark:text-white">404</h1>
                <p className="text-gray-400 text-sm">This page doesn't exist.</p>
                <a
                    href="/"
                    className="mt-2 text-sm font-medium text-black dark:text-white underline underline-offset-4 hover:opacity-60 transition-opacity"
                >
                    Go home
                </a>
            </div>
        </div >
    )
}
import { createUser } from "@/Actions"

export default function Form() {
    return (
        <form action={createUser} className="flex flex-col sm:flex-row gap-3">
            <input 
                name="name" 
                placeholder="Enter username (e.g. don)" 
                className="grow px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-650 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 text-sm"
            />
            <button 
                type="submit"
                className="px-6 py-3 rounded-xl bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 font-medium text-sm transition-colors duration-200 cursor-pointer whitespace-nowrap shadow-sm border border-zinc-900 dark:border-zinc-100"
            >
                Create user
            </button>
        </form>
    )
}
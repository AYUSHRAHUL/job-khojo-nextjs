"use client"

import { useRouter } from "next/navigation"
import { useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const LandingSearch = () => {
    const router = useRouter();
    const queryRef = useRef();
    const handleSearchLandingPage = async (e) => {
        e.preventDefault();
        router.push(`/jobs?q=${queryRef.current.value}`)
    }
    return (
        <form onSubmit={handleSearchLandingPage} className="flex space-x-2">
            <Input ref={queryRef} className="max-w-lg flex-1 bg-white"
 placeholder="Search jobs..." type="text" />
            <Button type="submit"         className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-2 font-medium shadow-md hover:scale-105 hover:shadow-lg transition flex items-center gap-2"
>
                <Search className="mr-2 h-4 w-4" />
                Search
            </Button>
        </form>
    )
}

export default LandingSearch
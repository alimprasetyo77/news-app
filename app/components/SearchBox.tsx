"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchBox = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    router.push(`/search?q=${input}`);
  };
  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl mx-auto flex justify-between items-center px-5 mt-10 rounded-md border relative overflow-hidden"
    >
      <input
        value={input}
        onChange={(event: any) => setInput(event.target.value)}
        type="text"
        placeholder="Search keywords..."
        className="flex-1 w-full h-16 rounded-md placeholder:text-gray-500 dark:text-white dark:placeholder:text-slate-100 text-gray-500 outline-none bg-transparent px-4"
      />
      <button
        type="submit"
        disabled={!input}
        className="bg-teal-500 dark:bg-zinc-500 h-16 px-4 text-white disabled:text-slate-200 absolute right-0"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;

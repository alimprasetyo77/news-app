import fetchNews from "@/lib/fetchNews";
import SectionSearch from "../section/SectionCat";

type Props = {
  searchParams?: { q: string };
};

const page = async ({ searchParams }: Props) => {
  const data: data = await fetchNews("general", searchParams?.q);
  return (
    <div>
      <h1 className="text-2xl font-semibold mt-8 dark:text-white text-teal-500">
        Result Search for : {searchParams?.q}
      </h1>
      <SectionSearch data={data} />
    </div>
  );
};

export default page;

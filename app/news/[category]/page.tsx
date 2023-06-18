import SectionCat from "@/app/section/SectionCat";
import fetchNews from "@/lib/fetchNews";

type Props = {
  params: { category: Category };
};

const page = async ({ params: { category } }: Props) => {
  const data: data = await fetchNews(category);
  return (
    <div>
      <h1 className="md:text-2xl font-semibold mt-8 dark:text-white text-teal-500 px-8 md:px-0 text-xl">
        Category by : {category}
      </h1>

      <SectionCat data={data} />
    </div>
  );
};

export default page;

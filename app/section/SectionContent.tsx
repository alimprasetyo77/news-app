/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import fetchNews from "@/lib/fetchNews";
import Link from "next/link";

const SectionContent = async () => {
  const news: data = await fetchNews();
  return (
    <div
      className={`w-full sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 py-16 sm:px-8 px-0`}
    >
      {news.articles &&
        news.articles.map((data, index) => (
          <div className="Card" key={index}>
            <Link href={`${data.url}`} target={"_blank"}>
              <img
                src={`${data.urlToImage && data.urlToImage}`}
                alt={`${data.title}`}
                className="w-full object-cover h-48"
              />
            </Link>
            <div className="flex-1 flex flex-col">
              <div className="flex-1 flex flex-col py-2 px-5">
                <h1 className={`text-base font-bold`}>{data.title}</h1>
                <section className="mt-2 flex-1">
                  <p className="text-xs">{data.description}</p>
                </section>
                <footer className="text-xs text-right space-x-1 italic text-gray-400 pt-4 flex ml-auto">
                  <p>{data.source.name}</p>
                  <p>{new Date(data.publishedAt).toLocaleDateString()}</p>
                </footer>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SectionContent;

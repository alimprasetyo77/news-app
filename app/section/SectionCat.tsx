/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

/* eslint-disable react/jsx-key */
type Props = {
  data: any;
};

const sectionCategory = ({ data }: Props) => {
  return (
    <div>
      <div className="w-full sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 py-16 sm:px-8 px-0">
        {data.articles.map((d: any, index: number) => (
          <div className="Card" key={index}>
            <Link href={`${d.url}`} target={"_blank"}>
              <img
                src={`${d.urlToImage}`}
                alt={`${d.title}`}
                className="w-full object-cover h-48 "
              />
            </Link>
            <div className="flex-1 flex flex-col">
              <div className="flex-1 flex flex-col py-2 px-5">
                <h1 className="text-base font-bold font-serif">{d.title}</h1>
                <section className="mt-2 flex-1">
                  <p className="text-xs ">{d.description}</p>
                </section>
                <footer className="text-xs text-right space-x-1 italic text-gray-400 pt-4 flex ml-auto">
                  <p>{d.source.name}</p>
                  <p>{new Date(d.publishedAt).toLocaleDateString()}</p>
                </footer>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default sectionCategory;

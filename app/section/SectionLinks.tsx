import Link from "next/link";

interface Props {
  category: string;
  isActive: boolean;
}

const SectionLinks = ({ category, isActive }: Props) => {
  return (
    <Link
      href={`/news/${category}`}
      className={`NavLink ${
        isActive &&
        "underline decoration-teal-700 underline-offset-4 font-bold text-lg"
      }`}
    >
      {category}
    </Link>
  );
};

export default SectionLinks;

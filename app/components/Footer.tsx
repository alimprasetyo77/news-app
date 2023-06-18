const Footer = () => {
  return (
    <div>
      <footer className="mt-20 px-10 py-8 bg-slate-200 dark:bg-zinc-700 ">
        <div className="max-w-5xl mx-auto text-slate-700 text-center dark:text-white">
          © 2023
          <a href="/" className="font-medium">
            Vredeburg
          </a>
          . Made by <a href="https://github.com/daflh">Dafiul Haq</a> using
          <a href="https://www.11ty.dev">Eleventy</a>
          and{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          .
        </div>
      </footer>
    </div>
  );
};

export default Footer;

export default function Home() {
  return (
    <div className="min-h-screen lg:flex text-lg">
      {/* left side */}
      <div className="lg:w-1/2 relative z-10 flex flex-col justify-center px-10 lg:px-20 py-20 lg:py-0 text-left">
        <h1 className="inter text-4xl mb-6 font-bold text-purple-800"><span className="block text-purple-700 text-2xl font-normal">👋 I'm </span><a href="https://twitter.com/MrAhmadAwais/">Ahmad Awais</a></h1>
        <h2 className="inter text-2xl mb-3 font-bold text-purple-800">
   
          <span className="block text-purple-700 text-2xl font-normal">
            I help businesses understand developers. Award-winning Google Developers Expert DevRel.
          </span>
        </h2>

        <div className="sm:flex">
          <a
            href="https://twitter.com/MrAhmadAwais/"
            className="block py-2 px-5 rounded shadow bg-purple-900 text-gray-100"
          >
            Follow on Twitter
          </a>
        </div>
      </div>

      {/* right side */}
      <div className="lg:w-1/2 relative">
        <svg
          className="hidden lg:block text-white fill-current absolute h-full transform -translate-x-1/2 w-48 z-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100"></polygon>
        </svg>

        <img
          src="https://res.cloudinary.com/demo/image/fetch/q_auto/https://on.awais.dev/qGuNeD5B"
          alt="Ahmad Awais"
          className="lg:absolute object-cover lg:inset-y-0 lg:right-0 lg:h-full lg:w-full"
        />
      </div>
    </div>
  );
}

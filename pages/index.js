export default function Home() {
  return (
    <div className="min-h-screen lg:flex text-lg">
      {/* left side */}
      <div className="lg:w-1/2 relative z-10 flex flex-col justify-center px-10 lg:px-20 py-20 lg:py-0 text-left">
        <h1 className="inter text-4xl mb-6 font-bold text-purple-800">👋{" "}<a href="https://twitter.com/MrAhmadAwais/">@MrAhmadAwais</a> →</h1>
        <h2 className="inter text-2xl mb-3 font-bold text-gray-800">
          Nice to meet you.
          <span className="block text-blue-500 text-2xl font-normal">
            I help businesses understand developers.
          </span>
        </h2>

        <p className="text-gray-700 mb-6">
          Award-winning Google Developers Expert DevRel.
        </p>

        <div className="sm:flex">
          <a
            href="https://AhmadAwais.com/"
            className="block py-2 px-5 rounded shadow bg-gray-500 text-gray-100 sm:mr-2 mb-2 sm:mb-0"
          >
            Awais.dev Blog
          </a>
          <a
            href="https://twitter.com/MrAhmadAwais/"
            className="block py-2 px-5 rounded shadow bg-blue-500 text-blue-100"
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

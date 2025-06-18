import myPhoto from '../assets/IMG_20240101_222430_332.jpg';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-12 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-purple-100 rounded-full opacity-30 blur-2xl pointer-events-none" />

      {/* Profile Section */}
      <div className="flex-shrink-0 relative z-10">
        <div className="relative group">
          <img
            src={myPhoto}
            alt="Sayan"
            className="rounded-2xl object-cover w-64 h-80 shadow-xl border-4 border-white transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 px-4 py-2 rounded-full shadow text-blue-700 font-semibold text-lg backdrop-blur">
            Sayan
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 relative z-10">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-800 drop-shadow-lg">
          About <span className="text-purple-600">TechMan</span>
        </h1>
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            <span className="font-semibold text-blue-700">Hi, I am Sayan.</span>
          </p>
          <p>
            Founder &amp; only member of <span className="font-bold text-purple-600">TechMan</span>.
          </p>
          <p>
            BSc student from a third-tier college, passionate about web development.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg shadow-inner">
            <p>
              <span className="font-semibold text-blue-600">My journey:</span> Learning web development was not easy. I faced many challenges and doubts, but I never gave up.
            </p>
            <p>
              Every project, every line of code, I do with all my heart.
            </p>
          </div>
          <p>
            My journey is tough, but my passion is stronger.
          </p>
          <p>
            <span className="italic text-purple-700">I promise to give you my best effort and honest service.</span>
          </p>
          <div className="flex items-center gap-2 mt-4">
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-lg font-medium text-gray-800">Thank you for visiting. Your support means everything to me.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

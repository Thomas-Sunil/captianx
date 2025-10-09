import { useState } from "react";

const SolutionsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const solutions = [
    {
      id: "federations",
      title: "Federations & Academies",
      description:
        "Raise the standard, unlock talent, and manage operations with precision at every level.",
      bigText: "Federations",
    },
    {
      id: "organisers",
      title: "Organisers",
      description:
        "Streamline every match, tournament, and league with tech that keeps the game moving.",
      bigText: "Organisers",
    },
    {
      id: "players",
      title: "Players",
      description:
        "Track progress, showcase skills, and stay one step ahead of the competition.",
      bigText: "Players",
    },
  ];

  return (
    <section className="bg-purple-50 py-20 min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-20">
        <span
          className="text-purple-600 text-lg font-medium mb-4 block"
          style={{ fontFamily: "Fustat, sans-serif" }}
        >
          Solutions
        </span>
        <h2
          className="text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900"
          style={{
            fontFamily: "Fustat, sans-serif",
            fontSize: "56px",
            lineHeight: "65px",
            letterSpacing: "-0.58px",
            fontWeight: "400",
          }}
        >
          Built for the ones who
          <br /> play to win.
        </h2>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className="relative h-[400px] md:h-[500px] flex items-center justify-center"
              onMouseEnter={() => setHoveredCard(solution.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Big Background Text */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
                style={{
                  fontFamily: "serif",
                  fontSize: "80px",
                  fontWeight: "400",
                  fontStyle: "italic",
                  color: "rgba(0, 0, 0, 0.05)",
                  whiteSpace: "nowrap",
                  transition: "all 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
                  transform:
                    hoveredCard === solution.id
                      ? index === 0
                        ? "translateX(-100%) scale(0.9)"
                        : index === 1
                        ? "translateY(-100%) scale(0.9)"
                        : "translateX(100%) scale(0.9)"
                      : "translateX(0) scale(1)",
                  opacity: hoveredCard === solution.id ? 0 : 1,
                }}
              >
                {solution.bigText}
              </div>

              {/* Card */}
              <div
                className="relative w-[90%] h-[85%] rounded-3xl transition-all duration-700 ease-out shadow-2xl flex flex-col justify-between p-8"
                style={{
                  background: "#151227",
                  transformOrigin: "center",
                  transform:
                    hoveredCard === solution.id
                      ? "translateY(0) scale(1)"
                      : "translateY(8px) scale(0.95)",
                  opacity: hoveredCard === solution.id ? 1 : 0,
                }}
              >
                <div>
                  <h3
                    className="text-white mb-6"
                    style={{
                      fontFamily: "Fustat, sans-serif",
                      fontSize: "34px",
                      lineHeight: "39px",
                      letterSpacing: "-0.58px",
                      fontWeight: "400",
                    }}
                  >
                    {solution.title}
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{
                      fontFamily: "Fustat, sans-serif",
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    {solution.description}
                  </p>
                </div>

                <button className="mt-8 px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors w-fit">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fustat:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
};

export default SolutionsSection;
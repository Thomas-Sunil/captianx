import  { useState } from 'react';

const SolutionsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const solutions = [
    {
      id: 'federations',
      title: 'Federations & Academies',
      description: 'Raise the standard, unlock talent, and manage operations with precision at every level.',
      bigText: 'Federations',
    },
    {
      id: 'organisers',
      title: 'Organisers',
      description: 'Streamline every match, tournament, and league with tech that keeps the game moving.',
      bigText: 'Organisers',
    },
    {
      id: 'players',
      title: 'Players',
      description: 'Track progress, showcase skills, and stay one step ahead of the competition.',
      bigText: 'Players',
    },
  ];

  return (
    <section className="bg-purple-50 py-20 min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-20">
        <span 
          className="text-purple-600 text-lg font-medium mb-4 block"
          style={{ fontFamily: 'Fustat, sans-serif' }}
        >
          Solutions
        </span>
        <h2 
          className="text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900"
          style={{
            fontFamily: 'Fustat, sans-serif',
            fontSize: '56px',
            lineHeight: '65px',
            letterSpacing: '-0.58px',
            fontWeight: '400',
          }}
        >
          Built for the ones who<br />play to win.
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
                  fontFamily: 'Denton Italic Variable Test, serif',
                  fontSize: '50px',
                  lineHeight: '64px',
                  fontWeight: '400',
                  color: 'rgba(0, 0, 0, 0.05)',
                  whiteSpace: 'nowrap',
                }}
              >
                <div
                  className="transition-all duration-700 ease-out"
                  style={{
                    transform: hoveredCard === solution.id
                      ? index === 0
                        ? 'translateX(-150%)'
                        : index === 1
                        ? 'scale(0)'
                        : 'translateX(150%)'
                      : 'translateX(0)',
                    opacity: hoveredCard === solution.id ? 0 : 1,
                  }}
                >
                  {solution.bigText}
                </div>
              </div>

              {/* Card */}
              <div
                className="relative w-full h-full transition-all duration-700 ease-out"
                style={{
                  transform: hoveredCard === solution.id
                    ? index === 1
                      ? 'rotateY(0deg)'
                      : 'translateY(0) scale(1)'
                    : index === 1
                    ? 'rotateY(90deg)'
                    : 'translateY(100%) scale(0.8)',
                  opacity: hoveredCard === solution.id ? 1 : index === 1 ? 0 : 0,
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                <div
                  className="w-full h-full rounded-3xl p-8 flex flex-col justify-between shadow-2xl"
                  style={{
                    background: '#151227',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <div>
                    <h3
                      className="text-white mb-6"
                      style={{
                        fontFamily: 'Fustat, sans-serif',
                        fontSize: '34px',
                        lineHeight: '39px',
                        letterSpacing: '-0.58px',
                        fontWeight: '400',
                      }}
                    >
                      {solution.title}
                    </h3>
                    <p
                      className="text-gray-300"
                      style={{
                        fontFamily: 'Fustat, sans-serif',
                        fontSize: '16px',
                        lineHeight: '24px',
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

              {/* Special "P" animation for Players card */}
              {index === 2 && (
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  style={{
                    fontFamily: 'Denton Italic Variable Test, serif',
                    fontSize: '120px',
                    fontWeight: '400',
                    color: 'rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <div
                    className="transition-all duration-700 ease-out"
                    style={{
                      transform: hoveredCard === solution.id
                        ? 'translateX(-200%) translateY(-50%) scale(0.5)'
                        : 'translateX(0) translateY(0) scale(1)',
                      opacity: hoveredCard === solution.id ? 0 : 1,
                    }}
                  >
                    P
                  </div>
                </div>
              )}
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
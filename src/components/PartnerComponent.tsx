const PartnerComponent = () => {
  const handlePartnerClick = () => {
    // Replace with your navigation logic
    console.log('Navigate to news-insights');
  };

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundColor: '#151227',
      }}
    >
      {/* White radial gradient blur - centered on the handshake area */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 65%)',
          filter: 'blur(150px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      ></div>

      {/* Content wrapper for text and logos */}
      <div className="relative z-10 flex flex-col items-center justify-start w-full px-4 pt-20 pb-8">
        <p className="text-gray-400 text-sm md:text-base mb-2">Partners & Clients</p>
        <h1
          className="text-white text-4xl md:text-6xl text-center leading-tight tracking-tight"
          style={{
            fontSize: '56px',
            lineHeight: '64px',
            fontWeight: '400',
          }}
        >
          Transforming Sports,
          <br />
          Side by Side
        </h1>

        <button
          onClick={handlePartnerClick}
          className="mt-8 px-8 py-3 bg-white text-[#151227] rounded-full text-lg font-medium hover:bg-gray-200 transition-colors duration-300"
        >
          Partner With Us
        </button>

        {/* Logos Section */}
        <div className="pt-12 flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 max-w-4xl">
          <img src="src\assets\Container.png" alt="iHeartMEDIA" className="h-10 opacity-75 hover:opacity-100 transition-opacity" />
          
        </div>
      </div>

      {/* Handshake Image Container */}
      <div className="relative z-0 w-full mt-16">
        <img
          src="src\assets\1000215297.png"
          alt="Human and robot hand shaking"
          className="w-full h-auto max-h-[590px] object-cover"
        />
      </div>
    </section>
  );
};

export default PartnerComponent;
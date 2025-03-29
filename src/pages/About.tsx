const About: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
        About NSU Coin
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Discover the story behind NSU Coin, a cryptocurrency designed to
        redefine the digital economy with innovation, transparency, and
        inclusivity.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600">
          At NSU Coin, our mission is to create a decentralized financial system
          that empowers individuals and businesses alike. We aim to eliminate
          barriers, reduce costs, and provide a secure platform for wealth
          creation.
        </p>
        <p className="text-gray-600 mt-4">
          Founded in 2025, NSU Coin was born out of a desire to address the
          limitations of traditional finance. Our team of blockchain experts,
          economists, and developers work tirelessly to ensure NSU Coin remains
          at the forefront of the crypto revolution.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-900">Innovation</h3>
          <p className="text-gray-600 mt-2">
            We utilize the latest advancements in blockchain technology to
            deliver a fast, secure, and scalable network. Our proof-of-stake
            consensus ensures energy efficiency and high transaction throughput.
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-900">Transparency</h3>
          <p className="text-gray-600 mt-2">
            Every transaction on the NSU Coin network is recorded on a public
            ledger, ensuring full transparency and trust. We believe in open
            governance and community involvement.
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-900">Inclusivity</h3>
          <p className="text-gray-600 mt-2">
            NSU Coin is for everyone. Whether you’re in a developed nation or an
            emerging market, our platform is designed to be accessible,
            affordable, and easy to use.
          </p>
        </div>
      </div>
      <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Our Vision
        </h2>
        <p className="text-gray-600">
          We envision a world where financial freedom is a reality for all. By
          leveraging blockchain technology, NSU Coin aims to bridge the gap
          between traditional finance and the digital future, offering a
          currency that’s secure, reliable, and universally accepted.
        </p>
        <p className="text-gray-600 mt-4">
          From micropayments to large-scale investments, NSU Coin is built to
          handle it all. Our roadmap includes partnerships with major
          industries, integration with payment systems, and continuous
          improvements to our ecosystem.
        </p>
      </div>
      <div className="mt-10 bg-gradient-to-r from-blue-900 to-indigo-800 text-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold">Meet the Team</h3>
        <p className="mt-4">
          Our team consists of passionate individuals with decades of combined
          experience in blockchain, finance, and technology. Together, we’re
          committed to making NSU Coin a global success.
        </p>
        <button className="mt-6 bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default About;

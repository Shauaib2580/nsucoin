import myPicture from '../assets/Shauaib.jpg'; // Your profile image path
import coin from '../assets/coin.png'; // Coin image
import dollar from '../assets/Mycurrency.png'; // Dollar image

const Developer: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
        Meet the NSU Coin (নসু কয়েন) Developer
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Learn about the brilliant mind behind NSU Coin, driving innovation in
        decentralized finance.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img
          src={coin}
          className="h-[200px] w-[200px] mx-auto mb-4"
          alt="NSU Coin Logo"
        />
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Lead Developer: Shauaib Siddique Shawon
        </h2>
        <img
          src={myPicture}
          alt="Shauaib Siddique Shawon"
          className="w-[400px] h-[400px] border-amber-400 border-4 rounded-full mx-auto mb-4 object-cover shadow-md"
        />
        <p className="text-gray-600 max-w-2xl mx-auto">
          I’m the creator of NSU Coin (নসু কয়েন), passionate about blockchain
          technology and building a decentralized future. With expertise in
          software engineering and cryptography, I’ve dedicated myself to making
          NSU Coin a secure, scalable, and community-driven cryptocurrency.
        </p>
        <p className="mt-5 text-2xl font-semibold text-blue-800 mb-4">
          Founder of Shallar (Shauaib's Dollar) <br />
        </p>
        <img
          src={dollar}
          className="w-full sm:w-3/4 md:w-1/2 lg:max-w-2xl border-amber-400 border-4 mx-auto mt-10"
          alt="Shallar Currency"
        />
        <div className="flex justify-center space-x-1 mt-6">
          <a
            href="https://www.linkedin.com/in/shauaib-siddique-shawon/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/shauaibsiddique/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Facebook
          </a>
          <a
            href="https://github.com/Shauaib2580"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-900">About Me</h3>
          <p className="text-gray-600 mt-2">
            I’ve been coding since [year], with a focus on blockchain since
            [year]. My journey includes [notable achievements]. NSU Coin is my
            vision to empower individuals through decentralized finance.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600">
            <li>Expertise: [e.g., TypeScript, React, Blockchain]</li>
            <li>Education: [e.g., BS in Computer Science, XYZ University]</li>
            <li>Hobbies: [e.g., coding, gaming, hiking]</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-900">
            My Role in NSU Coin
          </h3>
          <p className="text-gray-600 mt-2">
            As the lead developer, I designed the NSU Coin architecture, from
            the consensus algorithm to the wallet system. I oversee development,
            security audits, and community collaboration to ensure NSU Coin
            thrives.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600">
            <li>Notable Work: [e.g., NSU Coin Whitepaper]</li>
            <li>Focus: Security, scalability, user experience</li>
            <li>Goal: Global adoption of NSU Coin</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Development Philosophy
        </h2>
        <p className="text-gray-600">
          I believe in transparent, reliable, and community-driven tech. NSU
          Coin’s code is open-source, rigorously tested, and built with user
          feedback in mind. My aim is to create a cryptocurrency that’s
          accessible to all.
        </p>
        <p className="text-gray-600 mt-4">
          From ideation to deployment, I’ve prioritized security and innovation,
          ensuring NSU Coin stands out in the crowded crypto space.
        </p>
      </div>

      <div className="mt-10 bg-gradient-to-r from-blue-900 to-indigo-800 text-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold">Connect with Me</h3>
        <p className="mt-4">
          Want to collaborate or learn more? Reach out via social media or check
          out my work on GitHub. I’m excited to grow NSU Coin with the
          community!
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Developer;

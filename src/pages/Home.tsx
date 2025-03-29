import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import coin from '../assets/coin.png'; // Adjust the path to your image
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Home: React.FC = () => {
  const [chartData, setChartData] = useState({
    labels: Array(20)
      .fill('')
      .map((_, i) => `Mar ${i + 1}`),
    datasets: [
      {
        label: 'NSU Coin Value',
        data: Array(20).fill(0),
        borderColor: '#FFD700',
        fill: false,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => ({
        ...prev,
        datasets: [
          {
            ...prev.datasets[0],
            data: prev.datasets[0].data.map(v => v + Math.random() * 10),
          },
        ],
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
        Welcome to NSU Coin{' '}
        <img
          src={coin}
          className="h-[80px] w-[80px] mx-auto mt-4" // Centered with mx-auto
          alt="NSU Coin Logo"
        />
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        The future of decentralized finance is here. NSU Coin is your gateway to
        financial freedom, offering unparalleled security, scalability, and
        growth potential.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          NSU Coin Growth (Fake Data)
        </h2>
        <Line
          data={chartData}
          options={{ responsive: true, scales: { y: { beginAtZero: true } } }}
        />
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-900">Why NSU Coin?</h3>
          <p className="text-gray-600 mt-2">
            NSU Coin leverages cutting-edge blockchain technology to ensure
            fast, secure, and transparent transactions. Whether you're an
            investor, trader, or enthusiast, NSU Coin offers a robust ecosystem
            designed for growth.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600">
            <li>Decentralized and secure</li>
            <li>Low transaction fees</li>
            <li>Scalable network</li>
            <li>Community-driven development</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-900">
            Join the Revolution
          </h3>
          <p className="text-gray-600 mt-2">
            With NSU Coin, you're not just investing in a cryptocurrency—you're
            joining a movement. Our vision is to empower individuals worldwide
            by providing a reliable, accessible, and innovative financial tool.
          </p>
          <p className="text-gray-600 mt-4">
            Start today and explore the endless possibilities with NSU Coin.
            From staking rewards to exclusive partnerships, we’re building a
            future where you’re in control.
          </p>
        </div>
      </div>
      <div className="mt-10 bg-gradient-to-r from-blue-900 to-indigo-800 text-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold">Get Started with NSU Coin</h3>
        <p className="mt-4">
          Ready to dive in? Create your wallet, join our community, and start
          trading NSU Coin today. The value is only going up—don’t miss out!
        </p>
        <button className="mt-6 bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;

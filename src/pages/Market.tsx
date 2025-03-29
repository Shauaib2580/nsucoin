const Market: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
        NSU Coin Market
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Explore the latest trends, tokenomics, and market insights for NSU Coin.
        (All data is fictional for demonstration purposes.)
      </p>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Price Trends
        </h2>
        <p className="text-gray-600">
          NSU Coin has seen incredible growth since its launch. Starting at
          $0.10, it’s now trading at an impressive $15.73, with a market cap of
          $1.5 billion.
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-600">
          <li>24h Change: +7.2%</li>
          <li>7d Change: +23.5%</li>
          <li>30d Change: +89.1%</li>
          <li>All-Time High: $18.42</li>
        </ul>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-900">Tokenomics</h3>
          <p className="text-gray-600 mt-2">
            NSU Coin operates on a carefully designed economic model to ensure
            stability and growth:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600">
            <li>Total Supply: 100 million NSU</li>
            <li>Circulating Supply: 65 million NSU</li>
            <li>Staking Rewards: 5% APY</li>
            <li>Burn Rate: 1% of transactions</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-900">
            Market Highlights
          </h3>
          <p className="text-gray-600 mt-2">
            NSU Coin is making waves in the crypto world with its unique
            features and growing adoption:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600">
            <li>Listed on 15+ exchanges</li>
            <li>Daily Volume: $45 million</li>
            <li>Active Wallets: 250,000+</li>
            <li>Partnerships: 10+ major firms</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Investment Opportunities
        </h2>
        <p className="text-gray-600">
          NSU Coin offers multiple ways to grow your wealth. Stake your coins
          for passive income, trade on our partner exchanges, or hold long-term
          as the value continues to rise.
        </p>
        <p className="text-gray-600 mt-4">
          Our deflationary model ensures that as adoption increases, the value
          of NSU Coin grows. With a limited supply and increasing demand, now is
          the perfect time to invest.
        </p>
      </div>
      <div className="mt-10 bg-gradient-to-r from-blue-900 to-indigo-800 text-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold">Trade NSU Coin</h3>
        <p className="mt-4">
          Ready to jump into the market? Sign up on one of our partner exchanges
          and start trading NSU Coin today. The future is bright, and the
          profits are waiting!
        </p>
        <button className="mt-6 bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500">
          Start Trading
        </button>
      </div>
    </div>
  );
};

export default Market;

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
        Contact NSU Coin
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Have questions or want to get involved? Reach out to us—we’d love to
        hear from you!
      </p>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600">
          Our team is available to assist with inquiries, partnerships, or
          support. Here’s how you can reach us:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-600">
          <li>Email: support@nsucoin.com</li>
          <li>Phone: +1 (555) 123-4567</li>
          <li>Address: 123 Blockchain Ave, Crypto City, CC 90210</li>
          <li>Hours: Mon-Fri, 9 AM - 5 PM (UTC)</li>
        </ul>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-900">Social Media</h3>
          <p className="text-gray-600 mt-2">
            Stay connected with NSU Coin on your favorite platforms:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600">
            <li>Twitter: @NSUCoinOfficial</li>
            <li>Discord: discord.gg/nsucoin</li>
            <li>Telegram: t.me/nsucoin</li>
            <li>Reddit: r/NSUCoin</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-900">
            Community Support
          </h3>
          <p className="text-gray-600 mt-2">
            Join our vibrant community for real-time assistance and updates:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600">
            <li>Forum: forum.nsucoin.com</li>
            <li>FAQ: nsucoin.com/faq</li>
            <li>Support Tickets: support.nsucoin.com</li>
            <li>Live Chat: Available 24/7</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Partnerships
        </h2>
        <p className="text-gray-600">
          Interested in collaborating with NSU Coin? We’re always looking for
          innovative partners to expand our ecosystem. Contact our business
          development team at partnerships@nsucoin.com.
        </p>
        <p className="text-gray-600 mt-4">
          From tech integrations to marketing campaigns, we’re open to exploring
          opportunities that drive mutual growth.
        </p>
      </div>
      <div className="mt-10 bg-gradient-to-r from-blue-900 to-indigo-800 text-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold">Send Us a Message</h3>
        <p className="mt-4">
          Have a specific question or idea? Drop us a line, and we’ll get back
          to you as soon as possible.
        </p>
        <button className="mt-6 bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500">
          Contact Form
        </button>
      </div>
    </div>
  );
};

export default Contact;

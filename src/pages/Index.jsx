function Index() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to CryptoApp</h1>
        <p className="text-lg mb-6">Your gateway to the world of cryptocurrency.</p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">Get Started</button>
          <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg">Learn More</button>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-3xl font-semibold mb-4">Features</h2>
        <ul className="list-disc list-inside">
          <li>Real-time market data</li>
          <li>Secure transactions</li>
          <li>Portfolio management</li>
          <li>24/7 customer support</li>
        </ul>
      </div>
    </main>
  );
}

export default Index;
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 text-gray-800">
      <section className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-4">Find My City</h1>
        <p className="text-xl mb-8 text-gray-600">
          Discover the perfect place to live based on your lifestyle, values, and vibes.
          Whether you want affordability, walkability, creative energy, or a quiet escape,
          we help you find the city that feels like home.
        </p>

        <div className="grid gap-4 sm:grid-cols-3 mt-10">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">🌆 City Matching</h3>
            <p className="text-gray-600 text-sm">Smart scoring based on lifestyle, cost, safety, and more.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">🧭 Personalized Quiz</h3>
            <p className="text-gray-600 text-sm">Answer a few questions and get your top recommended cities instantly.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">📊 Real Data + Vibes</h3>
            <p className="text-gray-600 text-sm">We blend objective data with subjective community sentiment.</p>
          </div>
        </div>

        <button className="mt-12 px-8 py-4 text-lg font-semibold bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition-all">
          Start the Quiz
        </button>
      </section>
    </main>
  );
}
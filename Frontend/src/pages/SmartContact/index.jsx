import React, { useState, useEffect } from "react";
import Header2 from "component/HomeComponent/Header2";

const MatchCards = () => {
  const [matches, setMatches] = useState([]);

  // Fetch matches from the API
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch("/api/matches"); // Adjust API endpoint
        const data = await response.json();
        setMatches(data);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <>
      <Header2 className="flex items-center justify-center md:px-5 w-full" />
      <div className="max-w-6xl mx-auto mt-10 p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Matches
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.length > 0 ? (
            matches.map((match, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {match.wasteDescription}
                </h2>
                <p className="text-gray-600">
                  <strong>Seller ID:</strong> {match.sellerId}
                </p>
                <p className="text-gray-600">
                  <strong>Buyer ID:</strong> {match.buyerId}
                </p>
                <p className="text-gray-600">
                  <strong>Price:</strong> ₹{match.price}
                </p>
                <p className="text-gray-600">
                  <strong>Quantity:</strong> {match.quantity} kg
                </p>
                <p className="text-gray-600">
                  <strong>Buyer Contact:</strong> {match.contactNumberBuyer}
                </p>
                <p className="text-gray-600">
                  <strong>Seller Contact:</strong> {match.contactNumberSeller}
                </p>
                <p className="text-gray-600">
                  <strong>Status:</strong>{" "}
                  <span
                    className={`${
                      match.status === "accepted"
                        ? "text-green-600"
                        : match.status === "rejected"
                        ? "text-red-600"
                        : "text-yellow-600"
                    } font-semibold`}
                  >
                    {match.status}
                  </span>
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-full">
              No matches found.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default MatchCards;

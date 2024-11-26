  import React, { useState, useEffect } from "react";
  import Header2 from "component/HomeComponent/Header2";

  const MatchCards = () => {
    // Sample match data
    const [matches, setMatches] = useState([
      {
        id: 1,
        sellerId: "64fcd87d928e59",
        buyerId: "78bcd98h221e67",
        price: 1500,
        quantity: 25,
        contactNumberBuyer: "9876543210",
        contactNumberSeller: "9123456789",
        status: "pending",
        wasteDescription: "Plastic Waste",
      },
      {
        id: 2,
        sellerId: "DumpingCenter",
        buyerId: "None",
        price: 0,
        quantity: 50,
        contactNumberBuyer: "9988776655",
        contactNumberSeller: "9988776655",
        status: "pending",
        wasteDescription: "Dumping Center: XYZ Waste Solutions",
      },
    ]);

    // Handle Accept or Reject action
    const handleStatusChange = (id, newStatus) => {
      setMatches((prevMatches) =>
        prevMatches.map((match) =>
          match.id === id ? { ...match, status: newStatus } : match
        )
      );
    };

    return (
      <>
        <Header2 className="flex items-center justify-center md:px-5 w-full" />
        <div className="max-w-6xl mx-auto mt-10 p-6">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Matches
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.length > 0 ? (
              matches.map((match) => (
                <div
                  key={match.id}
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
                  {match.price > 0 && (
                    <p className="text-gray-600">
                      <strong>Price:</strong> ₹{match.price}
                    </p>
                  )}
                  <p className="text-gray-600">
                    <strong>Quantity:</strong> {match.quantity} kg
                  </p>
                  {match.contactNumberBuyer !== "None" && (
                    <p className="text-gray-600">
                      <strong>Buyer Contact:</strong> {match.contactNumberBuyer}
                    </p>
                  )}
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
                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={() => handleStatusChange(match.id, "accepted")}
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                      disabled={match.status !== "pending"}
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleStatusChange(match.id, "rejected")}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                      disabled={match.status !== "pending"}
                    >
                      Reject
                    </button>
                  </div>
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

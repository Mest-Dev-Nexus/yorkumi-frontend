import React, { useState } from "react";

const Checkout = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(4999); // in kobo/pesewas (₦49.99 or GHS49.99)

  const payWithPaystack = (e) => {
    e.preventDefault();

    const handler = window.PaystackPop && window.PaystackPop.setup({
      key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
      email,
      amount: amount * 100, // amount in kobo/pesewas
      currency: "GHS", // or "NGN" if you're in Nigeria
      ref: `YORKUMI-${Date.now()}`,
      callback: function (response) {
        alert("Payment successful! Reference: " + response.reference);
        // You can send this reference to your backend to verify the transaction
      },
      onClose: function () {
        alert("Transaction cancelled");
      }
    });

    handler.openIframe();
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      <form onSubmit={payWithPaystack} className="space-y-4">
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded mt-1"
          />
        </div>

        <div>
          <label className="block text-gray-700">Amount (GHS)</label>
          <input
            type="number"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded mt-1"
          />
        </div>

        <button
          type="submit"
          className="w-50 bg-center bg-amber-700 text-white py-2 rounded hover:bg-amber-800"
        >
          Pay 
        </button>
      </form>
    </div>
  );
};

export default Checkout;

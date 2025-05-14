const AboutUs = () => {
  return (
    <div className="bg-amber-50 min-h-screen pt-20 pb-12 text-gray-800">
      {/* Hero Section */}
      <section className="bg-amber-100 py-12 shadow-sm">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">
            About Yorkumi Shea
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            Empowering communities through natural, ethically sourced skincare.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="/images/mission.jpg"
            alt="Our Mission"
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At Yorkumi Shea, our mission is to create high-quality, handmade
              skincare products using natural shea butter and oils sourced
              directly from women cooperatives in Ghana. We are committed to
              sustainability, fair trade, and community empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl font-bold text-amber-800 mb-4">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Founded with a deep respect for tradition and community, Yorkumi Shea began
            with a vision to share the healing power of African shea butter with the world.
            What started as a small project has grown into a purpose-driven brand that supports
            local economies, preserves traditional knowledge, and offers skincare that's
            kind to both people and planet.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-amber-800 text-center mb-10">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-amber-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-amber-800 mb-2">Ethical Sourcing</h3>
            <p className="text-gray-700 text-sm">
              Partnering with women-led cooperatives to ensure fair wages and sustainable practices.
            </p>
          </div>
          <div className="bg-amber-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-amber-800 mb-2">Handmade Quality</h3>
            <p className="text-gray-700 text-sm">
              Each product is carefully handcrafted with love, tradition, and care.
            </p>
          </div>
          <div className="bg-amber-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-amber-800 mb-2">Sustainability</h3>
            <p className="text-gray-700 text-sm">
              We prioritize natural ingredients, eco-friendly packaging, and zero-waste methods.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section (optional) */}
      {/* Add later if Yorkumi has public team info or founders */}
    </div>
  );
};

export default AboutUs;

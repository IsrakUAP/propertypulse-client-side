

const GoalDedicationSection = () => {
    return (
        <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Goal & Dedication
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            At PropertyPulse, our mission is to redefine the real estate experience for our clients.
            We are dedicated to providing personalized, transparent, and innovative solutions that
            meet the unique needs of each individual. Our commitment is rooted in a customer-centric
            approach, ensuring satisfaction and success in every property journey.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2">Customer-Centric Approach</h3>
              <p className="text-gray-600">
                We prioritize your needs and preferences, delivering a tailored experience with
                utmost care and attention.
              </p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2">Expert Real Estate Advice</h3>
              <p className="text-gray-600">
                Our team of experienced professionals is here to provide expert advice, helping you
                make informed decisions in your property journey.
              </p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2">Innovative Solutions</h3>
              <p className="text-gray-600">
                Embracing innovation, we offer creative solutions and cutting-edge technologies to
                simplify and enhance your real estate experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default GoalDedicationSection;
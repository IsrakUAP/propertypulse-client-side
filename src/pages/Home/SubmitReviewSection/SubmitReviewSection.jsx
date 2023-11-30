

const SubmitReviewSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Share Your Experience
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Your feedback is important to us. Share your experience with PropertyPlus.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <form className="grid grid-cols-1 gap-6" action="#" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                  Your Comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows="4"
                  className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Submit Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitReviewSection;

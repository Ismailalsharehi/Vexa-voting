

export default function CreateVote() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 sm:p-8 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8 drop-shadow-xl">
        🗳️ Create a New Vote
      </h2>

      <form className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-xl w-full max-w-lg space-y-6 border border-gray-300 dark:border-gray-700 transition-colors duration-300">
        <div>
          <label htmlFor="title" className="block text-lg font-semibold text-gray-900 dark:text-white mb-2">Vote Title:</label>
          <input type="text" id="title" name="title" required className="w-full p-3 border border-gray-400 dark:border-gray-600 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition-colors duration-300"/>
        </div>

        <div>
          <label htmlFor="description" className="block text-lg font-semibold text-gray-900 dark:text-white mb-2">Description:</label>
          <input type="text" id="description" name="description" required className="w-full p-3 border border-gray-400 dark:border-gray-600 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition-colors duration-300"/>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="start" className="block text-lg font-semibold text-gray-900 dark:text-white mb-2">Start at:</label>
            <input type="date" id="start" name="start" required className="w-full p-3 border border-gray-400 dark:border-gray-600 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition-colors duration-300"/>
          </div>
          <div>
            <label htmlFor="end" className="block text-lg font-semibold text-gray-900 dark:text-white mb-2">End at:</label>
            <input type="date" id="end" name="end" required className="w-full p-3 border border-gray-400 dark:border-gray-600 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition-colors duration-300"/>
          </div>
        </div>

        <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
          + Add Candidate
        </button>
      </form>
    </div>
  );
}

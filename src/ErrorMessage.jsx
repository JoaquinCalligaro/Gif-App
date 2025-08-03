import WarningIcon from './WarningIcon';
export const ErrorMessage = () => {
  return (
    <div className="flex justify-center items-center mt-10 ">
      <div
        id="alert-additional-content-2"
        className="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
        role="alert">
        <div className="flex items-center">
          <WarningIcon className="w-6 h-6 mr-2" />

          <h3 className="text-2xl font-bold">Error 429: Too Many Requests</h3>
        </div>
        <div className="mt-5 mb-4 text-md">
          You have exceeded the allowed number of requests. Please wait a while
          before trying again.
        </div>
      </div>
    </div>
  );
};

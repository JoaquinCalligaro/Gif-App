import WarningIcon from './WarningIcon';
export const ErrorMessage = () => {
  return (
    <div className="flex justify-center items-center mt-15  ">
      <div
        id="alert-additional-content-2"
        className="p-5   border  rounded-lg  bg-gray-800 text-red-400 border-red-800"
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

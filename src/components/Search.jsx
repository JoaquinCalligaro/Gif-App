export const Search = ({ onSubmit, valorInput, onChange }) => {
  return (
    <form className="p-5 mt-5 text-center" onSubmit={onSubmit}>
      <h1 className="text-white text-3xl font-bold mb-4">Gif-App</h1>
      <input
        className="border-solid border-3 border-gray-950 rounded-3xl px-10 py-0.5 mt-5 text-base text-center bg-gray-300 text-black focus:outline-none shadow-lg "
        style={{ boxShadow: '2px -1px 14px 0px rgba(42, 42, 42, 0.69)' }}
        value={valorInput}
        onChange={onChange}
        placeholder="Type to search..."
      />
    </form>
  );
};

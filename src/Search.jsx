export const Search = ({ onSubmit, valorInput, onChange }) => {
  return (
    <form className="form-search" onSubmit={onSubmit}>
      <h1 className="gif-title">Gif-App</h1>
      <input
        className="input-search"
        value={valorInput}
        onChange={onChange}
        placeholder="Type to search..."
      />
    </form>
  );
};

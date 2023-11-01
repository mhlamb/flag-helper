interface Props {
  searchInput: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ searchInput, onInputChange }: Props) => {
  return (
    <input
      placeholder="Enter a country..."
      type="text"
      value={searchInput}
      onChange={onInputChange}
      className="border mt-3 p-3"
    />
  );
};

export default Search;

export default function Filter({ onCategoryChange }) {
    return (
      <select onChange={onCategoryChange} role="combobox">
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
      </select>
    );
  }
  
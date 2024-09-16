import styles from "../ContactForm/ContactForm.module.css";

const SearchBox = ({filter, onFilterChange}) => {
  return (
    <div className={styles.form}>
      <label className={styles.label}>
        <span>Find contacts by name</span>
        <input
          type="text"
          className={styles.input}
          value={filter}
          onChange={onFilterChange}
          placeholder="Search contact"
        />
      </label>
    </div>
  );
};
export default SearchBox;

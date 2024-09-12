import { useState } from "react";
import styles from "../ContactForm/ContactForm.module.css"

const SearchBox =()=>{
     const [inputValue, setInputValue] = useState("");

     const handleChange = (evt) => {
       setInputValue(evt.target.value);
     };
    return (
      <div className={styles.form}>
        <label className={styles.label}>
          <span>Find contacts by name</span>
          <input type="text" className={styles.input} value={inputValue} onChange={handleChange} />
        </label>
      </div>
    );
};
 export default SearchBox;
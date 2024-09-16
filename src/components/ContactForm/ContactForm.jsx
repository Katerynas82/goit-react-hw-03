import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "../ContactForm/ContactForm.module.css";

const phoneRegExp = /^(\+380|0)\d{9}$/;

const ContactFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short! Min 3 symbols.")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNum: Yup.string()
    .matches(
      phoneRegExp,
      "Invalid phone number. Must be a valid Ukrainian number"
    )
    .required("Phone number is required"),
});

const ContactForm = ({ contacts, setContacts }) => {
  const initialValues = {
    username: "",
    phoneNum: "",
  };

  const handleSubmit = (values, options) => {
    const newContact = {id: nanoid(), contactName:values.username, number:values.phoneNum};
       setContacts([...contacts, newContact]);
   options.resetForm();
  };

    return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactFormSchema}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            <span>Name</span>
            <Field
              name="username"
              className={styles.input}
              placeholder="Add contact name"
            />
            <ErrorMessage
              name="username"
              component="p"
              className={styles.error}
            />
          </label>

          <label className={styles.label}>
            <span>Phone number</span>
            <Field
              type="tel"
              name="phoneNum"
              className={styles.input}
              placeholder="Add contact phone"
            />
            <ErrorMessage
              name="phoneNum"
              component="p"
              className={styles.error}
            />
          </label>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>

        
    </div>
  );
};

export default ContactForm;

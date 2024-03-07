import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from './ContactForm.module.css'

const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  userNumber: Yup.number().min(9, "Provide a valid number").max(11, "Provide a valid number").required("Required"),
});

const initialValues = {
    username: "",
    userNumber:"",
};

const ContactForm = () => {
    const usernameFieldId = useId();
    const userNumberFieldId = useId();

    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}>
            
            <Form>
                <div className={css.ContactForm}>
                    <div className={css.ContactFormItem}>
                        <label htmlFor={usernameFieldId} className={css.ContactFormLabel}>Name</label>
                        <Field type="text" name="username" id={usernameFieldId} className={css.ContactFormInput} pattern="text" />
                        <ErrorMessage name="username" as="span" />
                    </div>

                    <div className={css.ContactFormItem}>
                        <label htmlFor={userNumberFieldId} className={css.ContactFormLabel}>Number</label>
                        <Field type="number" name="userNumber" id={userNumberFieldId} className={css.ContactFormInput} pattern="tel" />
                        <ErrorMessage name="userNumber" as="span" />
                    </div>

                    <button type="submit" className={css.AddContactBtn}>Add contact</button>
                </div>
            </Form>

        </Formik>
    );
};

export default ContactForm;
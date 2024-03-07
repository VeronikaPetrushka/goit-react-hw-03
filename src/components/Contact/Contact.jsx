import css from './Contact.module.css'

const Contact = ({ name, number }) => {
    return (
        <div className={css.ContactContainer}>
            <div className={css.UserContact}>
                <div className={css.ContactBox}>
                    {/* <use>
                        <svg></svg>
                    </use> */}
                    <p className={css.UserItem}>{name}</p>
                </div>
                <div className={css.ContactBox}>
                    {/* <use>
                        <svg></svg>
                    </use> */}
                    <p className={css.UserItem}>{number}</p>
                </div>
            </div>
            <button className={css.ContactDeleteBtn}>Delete</button>
        </div>
    );
};

export default Contact;
import css from './Contact.module.css'

const Contact = ({ name, number }) => {
    return (
        <div className={css.ContactContainer}>
            <div className={css.UserContact}>
                <div className={css.ContactBox}>
                    <svg className={css.iconPhone} width="14" height="14">
                        <use xlinkHref="./icons.svg#phone"></use>
                    </svg>
                    <p className={css.UserItem}>{name}</p>
                </div>
                <div className={css.ContactBox}>
                    <svg className={css.iconUser} width="14" height="14">
                        <use xlinkHref="./icons.svg#user"></use>
                    </svg>
                    <p className={css.UserItem}>{number}</p>
                </div>
            </div>
            <button className={css.ContactDeleteBtn}>Delete</button>
        </div>
    );
};

export default Contact;
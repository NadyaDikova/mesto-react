function PopupWithForm({
  name,
  title,
  children,
  isOpen,
  onClose,
  onSubmit,
  buttonText,
}) {
  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      id={`popup_${name}`}
    >
      <div className="popup__container">
        <button
          className="popup__close"
          id={`${name}_close`}
          type="button"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          name={`${name}-form`}
          action="#"
          onSubmit={onSubmit}
        >
          <fieldset className="popup__fieldset">{children}</fieldset>
          <button className="popup__button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;

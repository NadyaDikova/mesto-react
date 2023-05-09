function PopupWithForm(props) {
  return (
    <div
      className={`popup ${props.isOpen ? "popup_opened" : ""}`}
      id={`popup_${props.id}`}
    >
      <div className="popup__container">
        <button
          className="popup__close"
          id={`${props.id}_close`}
          type="button"
          onClick={props.onClose}
        />
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={`${props.id}-form`}>
          <fieldset className="popup__fieldset">
          {props.children}
          </fieldset>
          <button className="popup__button" type="submit">
          {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;

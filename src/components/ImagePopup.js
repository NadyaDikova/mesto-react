function ImagePopup(props) {
  return (
    <div className={`popup popup_type_picture ${props.isOpen ? 'popup_opened' : null}`} id="popup_type_picture">
      <div className="popup__container-picture">
        <div className="popup__figure">
          <button className="popup__close" type="button" onClick={props.onClose}/>
          <img className="popup__img" src={props.card.link} alt={props.card.name}/>
          <h3 className="popup__figure-caption">{props.card.name}</h3>
        </div>
      </div>
    </div>
  )
}

  export default ImagePopup;

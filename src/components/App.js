import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImageOpen, setIsImageOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setIsImageOpen(true);
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImageOpen(false);
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        id={"profile"}
        title={"Редактировать профиль"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText={"Cохранить"}
      >
          <input
            id="nameEdit-input"
            placeholder="Имя"
            className="popup__input popup__input-name"
            type="text"
            name="name"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__error nameEdit-input-error"></span>
          <input
            id="jobEdit-input"
            placeholder="Занятие"
            className="popup__input popup__input-description"
            type="text"
            name="about"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__error jobEdit-input-error"></span>

      </PopupWithForm>

      <PopupWithForm
        id={"place"}
        title={"Новое место"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText={"Создать"}
      >
          <input
            id="nameAdd-input"
            className="popup__input popup__input-name"
            type="text"
            name="name"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__error nameAdd-input-error"></span>
          <input
            id="urlEdit-input"
            className="popup__input popup__input-description"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error urlEdit-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        id={"delete"}
        title={"Вы уверены?"}
        isOpen={false}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        id={"avatar"}
        title={"Обновить аватар"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText={"Cохранить"}
      >
          <input
            id="urlAvatar-input"
            className="popup__input popup__input-avatar"
            type="url"
            name="avatar"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error urlAvatar-input-error"></span>
      </PopupWithForm>

      <ImagePopup
        isOpen={isImageOpen}
        onClose={closeAllPopups}
        card={selectedCard}
      />
    </div>
  );
}

export default App;

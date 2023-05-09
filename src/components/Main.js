import React from "react";
import { api } from "../utils/api";
import Card from "./Card";
import buttonEdit from "../images/edit_button.svg";

function Main(props) {
  const [userAvatar, setUserAvatar] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUser()
      .then((res) => {
        setUserAvatar(res.avatar);
        setUserName(res.name);
        setUserDescription(res.about);
      })
      .catch(console.log);
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch(console.log);
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-edit" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt={userName} />
        </button>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__button-edit"
              type="button"
              onClick={props.onEditProfile}
            >
              <img
                className="profile__button-edit-img"
                src={buttonEdit}
                alt="Кнопка изменить"
              />
            </button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          className="profile__button-add"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            title={card.name}
            image={card.link}
            likeCounter={card.likes.length}
            onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;

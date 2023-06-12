import { NavLink, useNavigate } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import styles from "./Card.module.css";

function Card(props) {
  const navigate = useNavigate();
  const { character, onClose, removeFav, addFav, myFavorites } = props;
  const [isFav, setIsFav] = useState(false);

  const navHandler = () => {
    navigate(`/detail/${character.id}`);
  };
  
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === character.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, character.id]);


  const handleFavorite = (character) => {
    if (!isFav) {
      addFav(character);
      setIsFav(true);
    } else {
      removeFav(character);
      setIsFav(false);
    }
  };

  return (
    <div className={styles.conteiner}>
      {/* <button onClick={handleFavorite(character.id)}>{isFav ? "❤️" : "🤍"}</button> */}

      {isFav ? (
        <button onClick={() => handleFavorite(character.id)}>❤️</button>
      ) : (
        <button onClick={() => handleFavorite(character.id)}>🤍</button>
      )}

      <button className={styles.boton} onClick={() => onClose(character.id)}>
        X
      </button>
      <NavLink to={`/detail/${character.id}`}>
        <h2 className={styles.letraTitulo} onClick={navHandler}>
          {character.name}
        </h2>
      </NavLink>
      <h2 className={styles.leter}>status:{character.status}</h2>
      <h2 className={styles.leter}>Species:{character.species}</h2>
      <h2 className={styles.leter}>Gender:{character.gender} </h2>
      {/* <h2>origen:{character.origen.name}</h2> */}
      <img
        className={styles.imgen}
        src={character.image}
        alt={character.name}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

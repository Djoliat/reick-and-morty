import { connect } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Card from "../Card/Card";

function Favorites(props) {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
 
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(aux)
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
    setAux(aux)    
  };

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">ascendente</option>
        <option value="D">descendiente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        <option value="allCharacters">all Characters</option>
      </select>
      {props.myFavorites?.map((fav) => {
        return (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            especies={fav.gender}
            image={fav.image}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);

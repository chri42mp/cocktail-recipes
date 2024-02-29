import { useEffect } from "react";
import { useState } from "react";

function CocktailList() {
  const [ordinaryDrinkList, setOrdinaryDrinkList] = useState([]);

  useEffect(() => {
    const fetchOrdinaryDrinks = async () => {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
        );
        const data = await response.json();
        console.log(data);
        setOrdinaryDrinkList(data.drinks);
      } catch (error) {
        console.error("Error fetching Ordinary drinks", error);
      }
    };

    fetchOrdinaryDrinks();
  }, []);

  return (
    <div>
      <h2>Ordinary Drinks</h2>
      <ul>
        {ordinaryDrinkList.map((drink) => (
          <li key={drink.idDrink}>
            {drink.strDrink}
            <img
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
              width={"300px"}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CocktailList;

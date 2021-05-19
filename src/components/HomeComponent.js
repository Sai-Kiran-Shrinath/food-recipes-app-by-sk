import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { Card } from "react-bootstrap";

function Home() {
  const APP_ID = "78653e8b";
  const APP_KEY = "06fac6281b44d264c8c99b80f05dea90";

  const [fetchedData, setFetchedData] = useState(null);
  const [search, setSearch] = useState("chicken");
  const [query, setQuery] = useState("chicken");
  const [clicked, setClicked] = useState(false);
  const [curRecipe, setCurRecipe] = useState({});

  const fetchApi = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setFetchedData(data.hits);
  };

  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line
  }, [query]);

  const getDataToSearch = (e) => {
    setSearch(e.target.value);
  };

  const fetchIt = (e) => {
    e.preventDefault();
    setFetchedData(null);
    setQuery(search);
    setClicked(false);
  };

  const cardCliked = (recipe) => {
    window.scroll(500, 500);
    setCurRecipe(recipe.recipe);
    setClicked(true);
  };

  const recipeCard = () => {
    if (clicked) {
      return (
        <div className="row" key={curRecipe.label}>
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Card style={{ marginBottom: "30px" }} key={curRecipe.label}>
              <div className="card-content">
                <h3 style={{ color: "gold" }}>{curRecipe.label}</h3>
              </div>
              <br />
              <Card.Img
                variant="top"
                src={curRecipe.image}
                style={{ borderRadius: "50%" }}
              />
              <br />
              <div className="card-content">
                <ul style={{ listStyleType: "none" }}>
                  <li> Calories: {curRecipe.calories} Kcal</li>
                  <li> Number of servings: {curRecipe.yield}</li>
                  <li> Total weight: {curRecipe.totalWeight} g</li>
                  <br />
                  <li> Ingredients:</li>
                  <br />
                  {curRecipe.ingredients.map((ing) => {
                    return <li>-{ing.text}</li>;
                  })}
                </ul>
                <a
                  href={curRecipe.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-button"
                >
                  <button
                    className="row bg-warning"
                    style={{
                      border: "none",
                      borderRadius: "5%",
                      marginBottom: "10px",
                    }}
                  >
                    Know More
                  </button>
                </a>
              </div>
            </Card>
          </div>
          <div className="col-md-3"></div>
        </div>
      );
    }
  };

  return (
    <>
      <h1 className="search-recipe">Search Recipes</h1>
      <form onSubmit={fetchIt} className="form">
        <input
          type="text"
          onChange={getDataToSearch}
          className="search-bar"
          placeholder={query}
        />
        <button type="submit" className="search-button">
          Submit
        </button>
      </form>
      <h3 className="recipes-title" style={{ color: "rgb(255, 153, 0)" }}>
        {query.toUpperCase()} RECIPES
      </h3>
      <br />
      <br />
      {recipeCard()}
      {fetchedData ? (
        <div className="row">
          {fetchedData.map((recipe) => {
            return (
              <>
                <div className="col-md-6">
                  <Card
                    className=" card"
                    style={{ marginBottom: "30px" }}
                    key={recipe.recipe.label}
                    onClick={() => cardCliked(recipe)}
                  >
                    <Card.Img
                      variant="top"
                      src={recipe.recipe.image}
                      height="400px"
                    />
                    <div className="card-content">
                      <h5 style={{ color: "gold" }}>{recipe.recipe.label}</h5>
                      <ul>
                        <li> Calories: {recipe.recipe.calories} Kcal</li>
                        <li> Number of servings: {recipe.recipe.yield}</li>
                        <li> Total weight: {recipe.recipe.totalWeight} g</li>
                      </ul>
                    </div>
                  </Card>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <div className="card-content">
          <ReactLoading
            type="spinningBubbles"
            color="orange"
            height={500}
            width={200}
          />
        </div>
      )}
    </>
  );
}

export default Home;

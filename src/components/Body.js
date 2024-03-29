import RestaurentCard from './RestaurentCard';
import Shimmer from './Shimmer';
import { useEffect, useState } from 'react';
const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.044471&lng=80.256495&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

    };

    if (listOfRestaurant.length === 0) {
        return <Shimmer />
    }

    // console.log(listOfRestaurant.length, 'listOfRestaurant.length');
    return (
        <div className="body">
            <div className="filter d-flex" style={{ margin: '20px' }}>

                <div className="search">
                    <input type="text" value={searchText} onChange={
                        (e) => {
                            setSearchText(e.target.value);

                            console.log(searchText, 'searchText');
                        }
                    } />
                    <button onClick={() => {
                        const filterRestaurant = listOfRestaurant.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        console.log(filterRestaurant);
                        setFilteredRestaurant(filterRestaurant);
                    }}>Search</button>
                </div>
                <div style={{ marginLeft: '20px' }}>
                    <button
                        onClick=
                        {(e) => {
                            const filteredList = listOfRestaurant.filter(
                                (res) => res.info.avgRating > 4.5
                            );
                            console.log(filteredList, 'filteredList');
                            setListOfRestaurant(filteredList);
                        }
                        }>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="res-container d-flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurentCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
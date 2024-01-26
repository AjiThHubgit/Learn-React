import RestaurentCard from './RestaurentCard'
import resList from '../utils/mockData';

const Body = () => {

    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container d-flex flex-wrap">
                {resList.map((restaurant) => (
                    <RestaurentCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
import { CDN_URL } from "../utils/constant"

const RestaurentCard = (props) => {

    console.log(props.resData.info);

    const {
        cloudinaryImageId,
        name,   
        cuisines,
        avgRating
    } = props.resData.info;
    return (
        <div className="res-card">
            <img className="res-logo w-100" src={CDN_URL+cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
        </div>
    );
};

export default RestaurentCard;
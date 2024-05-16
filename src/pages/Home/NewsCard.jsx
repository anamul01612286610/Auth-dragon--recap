import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { title,image_url, details,_id} = news;
    return (
        <div>
            <h4 className="text-2xl">
                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p>{title}</p>
                    </div>
                    <figure><img src={image_url} alt="Shoes" /></figure>
                </div>
            </h4>

            {
                details.length >200 ? <p>{details.slice(0,200)} <Link className="text-red-500" to={`/news/${_id}`}>Read More..</Link>
                 </p>
                 :
               <p>{details}</p>
            }
        </div>
    );
};

export default NewsCard;                                                                                 
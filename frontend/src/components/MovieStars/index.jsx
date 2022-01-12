import { ReactComponent as Star } from '../../assets/img/Star.svg';
import { ReactComponent as StarHalf } from '../../assets/img/StarHalf.svg';
import { ReactComponent as StarEmpty } from '../../assets/img/StarEmpty.svg';
import './styles.css';
function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <Star />
            <Star />
            <Star />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}
export default MovieStars;
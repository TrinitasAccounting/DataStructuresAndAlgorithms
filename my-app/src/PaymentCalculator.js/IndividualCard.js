
import './CardDesign.css';

function Card({ amount, date }) {
    return (
        <div className="card">
            <h4>Date: {date}</h4>
            <p>${amount}</p>
        </div>
    );
}

export default Card;
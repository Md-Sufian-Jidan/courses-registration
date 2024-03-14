import { totalCredits } from "../../App";
import PropTypes from 'prop-types';

const Card = ({ carts }) => {
    const credits = carts.reduce((p , c) => p + c.credit , 0);
    // console.log(carts);
    return (
        <div className="bg-slate-200 lg:p-4 p-3 rounded-2xl text-black">
            <div>
                {/* <h3>carts : {carts.length}</h3> */}
                <h3>Credit Hour Remaining {totalCredits - credits} hr</h3>
            </div>
            <div className="divider"></div>
            <div>Course Name : </div>
            <div>
                <ol className="list-decimal p-2">
                    {carts.map((c, idx) => <li key={idx}>{c.name}</li>)}
                </ol>
            </div>
            <div className="divider"></div>
            <div>Total Credit Hour : {credits}hr</div>
            <div className="divider"></div>
            <div>Total Price : {carts.reduce((p , c) => p + c.price , 0)}USD</div>
        </div>
    );
};

Card.propTypes = {
    carts: PropTypes.object.isRequired
}
export default Card;
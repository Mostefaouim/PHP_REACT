import react from 'react';

import { Link } from 'react-router-dom';
function BackAtHome() {
    return(
        <Link className="btn btn-secondary ms-2" to="/">Back at home</Link>
    )
}
export default BackAtHome;
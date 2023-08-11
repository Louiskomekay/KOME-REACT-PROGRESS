import Wrapper from '../assets/wrappers/ErrorPage';
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/not-found.svg';

const Error = () => {
    const error = useRouteError();
    if (error.status === 404) {
        return <Wrapper>
            <div>
                <img src={img} alt="Not found" />
                <h3>ooh!</h3>
                <p>We can't seem to find the page you're looking for.</p>
                <Link to='/'>Back home</Link>
            </div>
        </Wrapper>
    };

    return (
        <Wrapper>
            <div>
                <h2>Something went wrong</h2>
            </div>
        </Wrapper>
    )
}

export default Error;
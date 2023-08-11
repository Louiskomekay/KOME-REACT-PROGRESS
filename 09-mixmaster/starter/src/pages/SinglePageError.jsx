import { useRouteError } from "react-router-dom";

const singlePageError = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div>{error.message}</div>
    )
}

export default singlePageError
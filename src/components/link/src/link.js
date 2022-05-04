
import { Link, useParams } from 'react-router-dom';

const customLink = ({ option }) => {
    const page = useParams() || 'home';
    console.log("TMA", page)
    const title = option.charAt(0).toUpperCase() + option.slice(1);
    return <Link to={`/${option}`}> { title }</Link>
}

export default customLink
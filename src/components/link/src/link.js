
import { Link, useParams } from 'react-router-dom';

const customLink = ({ option, children, className }) => {
    const page = useParams() || 'home';
    const title = option.charAt(0).toUpperCase() + option.slice(1);
    return <Link className={className} to={`/${option}`}> { children }</Link>
}

export default customLink
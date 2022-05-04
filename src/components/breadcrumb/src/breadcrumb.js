import Link from "../../link";

const Breadcrumb = () => {
    return <nav className="breadcrumb">
        <div className="breadcrumb__logo-container">
            <h3 className="logo-text"> Phone Market</h3>
        </div>
        <ul>
            <li className="breadcrumb__item"><Link className="breadcrumb__item-link" option="home" /></li>
            <li className="breadcrumb__item"><Link className="breadcrumb__item-link" option="detail" /></li>
        </ul>
        <div className="breadcrumb__basket">
            <p>1</p>
            <img src="/images/basket.png" />
        </div>
    </nav>
}

export default Breadcrumb
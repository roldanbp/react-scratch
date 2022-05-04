

export default function Card({img, brand, model, price}) {
    return <div className="products__list">
        <div className="products__list-card">
        <img src={img}/>
        <div className="products__list-card-info">
            <h3 className="title"> {`${brand} ${model}`} </h3>
            <p className="price">{`$${price}`}</p>
        </div>
        </div>
  </div>
}
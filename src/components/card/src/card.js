const Details = () => {
    return <div class="products__details fadeIn-bottom">
        <a class="content-title">Ver detalles</a>
  </div>
}

export default function Card({img, brand, model, price}) {
    return  <div className="products__list-card">
    <img src={img} alt={"Imagen de producto"} />
    <div className="products__list-card-info">
        <h3 className="title"> {`${brand} ${model}`} </h3>
        <p className="price">{`$${price}`}</p>
    </div>
</div>
}
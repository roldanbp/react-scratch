
import { useContext } from 'react'
import Link from "../../link";
import Card from "../../card";
import { ProductContext } from "../../../context/contexts"

const ProductNotFound = () => {
  return <div className='products__notfound'>
    <h1>No encontramos el producto.</h1>
  </div>
}

const renderProducts = (productsCtx) => {
  return productsCtx && productsCtx.map( product => {
    const path = `${product.brand}${product.model}/detail`.replace(/\s/g, '');
    return <Link className="products__list-link" option={path.toLowerCase()}>
      <Card key={product.id} img={product.imgUrl} brand={product.brand} model={product.model} price={product.price} />
    </Link>
  })
}

const ProductList = ({className}) => {
  const productsCtx = useContext(ProductContext);
  const isListAvailable = !!!productsCtx || productsCtx.length > 0
  return <div className={className}>
    { isListAvailable ? renderProducts(productsCtx) : <ProductNotFound />}
  </div>
}

export default ProductList
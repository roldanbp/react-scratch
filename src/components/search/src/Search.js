import { useContext, useState} from 'react'
import { ProductContext } from "../../../routes/contexts"

const Search = ({className, onChange}) => {
    const productsCtx = useContext(ProductContext);
    const [products, setProducts] = useState(productsCtx) 
    
    const filterData = (search) => {
        if (!search) {
            onChange(products)
            return;
        }
        
        const filteredProducts = products.filter( product => {
            const name = `${product.brand} ${product.model}`
            if(name && name.toUpperCase().includes(search.toUpperCase())) {
                return product
            }
        })
        onChange(filteredProducts)
    }
    
    return <div className={className}>
        <input type={"text"} onChange={(e) => filterData(e.target.value)} placeholder={"Buscar..."}/>
  </div>
}

export default Search
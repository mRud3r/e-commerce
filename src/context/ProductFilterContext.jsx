import { createContext, useState } from "react";
import productsData from '../dummyProducts.json'

export const ProductFilterContext = createContext();

export const ProductFilterProvider = ({children}) => {
    const [gender, setGender] = useState('');
    const [productType, setProductType] = useState('');
    
    const filteredProducts = productsData.products.filter((product) => {
        const matchesGender = gender ? product.gender === gender : true;
        const matchesType = productType ? product.type === productType : true;
        return matchesGender && matchesType;
      });
    
    
    return (
        <ProductFilterContext.Provider value={{filteredProducts, setGender, setProductType}}>
            {children}
        </ProductFilterContext.Provider>
    );
}
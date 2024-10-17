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

    const productsForMen = productsData.products.filter((product) => {
        return product.gender === 'men';
    });

    const productsForWomen = productsData.products.filter((product) => {
        return product.gender === 'women';
    });
    
    
    return (
        <ProductFilterContext.Provider value={{filteredProducts, gender, setGender, setProductType, productsForMen, productsForWomen}}>
            {children}
        </ProductFilterContext.Provider>
    );
}
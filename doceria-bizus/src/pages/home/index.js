import React from 'react';

import Header from  '../../ui/components/header'
import Banner from '../../ui/components/banner';
import ProductsSection from '../../ui/components/products_section';

export default function Home(){
    return (
        <>
            <Header />
            <Banner />
            <ProductsSection />
        </>
    )
}
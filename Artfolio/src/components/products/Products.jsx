import React, { useState } from "react";
import electricButterfield from '../../assets/electricButterfield.jpeg';
import underThePine from '../../assets/UTP.jpg';
import MeetingAgain from '../../assets/MeetingAgain.jpg';
import hopshire from '../../assets/hopshire.jpeg';
import ExploringVieques from '../../assets/ExploringVieques.jpg';
import LazyEsperanza from '../../assets/LazyEsperanza.jpg';
import summerGigs from '../../assets/summerGigs.png';
import blackTR from '../../assets/MerchIdeaBlack.png';
import photography from '../../assets/photography.jpeg';
import Photography1 from '../../assets/Photography1.jpeg';
import Photography2 from '../../assets/Photography2.jpeg';
import Photography3 from '../../assets/Photography3.jpeg';
import Photography4 from '../../assets/Photography4.jpeg';
import Photography5 from '../../assets/Photography5.jpeg';
import Photography6 from '../../assets/Photography6.jpeg';
import Photography7 from '../../assets/Photography7.jpeg';
import Photography8 from '../../assets/Photography8.jpeg';
import Photography9 from '../../assets/Photography9.jpeg';
import Photography10 from '../../assets/Photography10.jpeg';


const products = [
    {id:1, name:'Electric Butterfield', category:"Album Covers",image: electricButterfield},
    {id:2, name:'Lazy Esperanza', category:"Album Covers",image: LazyEsperanza},
    {id:4, name:'Meeting Again', category:"Album Covers",image: MeetingAgain},
    {id:5, name:'The Time Riders', category:"Album Covers",image: blackTR},
    {id:6, name:'Under the Pine',  category:"Album Covers",image: underThePine},
    {id:7, name:'The Time Riders at Hopshire',  category:"Flyers",image: hopshire},
    {id:8, name:'Summer Gig Schedule', category:"Flyers",image: summerGigs},
    {id:9, name:'Exploring Vieques', category:"Album Covers",image: ExploringVieques},
    {id:10, name:'Exploring Vieques', category:"Photography",image: photography},
    {id:11, name:'Exploring Vieques', category:"Photography",image: Photography1},
    {id:12, name:'Exploring Vieques', category:"Photography",image: Photography2},
    {id:13, name:'Exploring Vieques', category:"Photography",image: Photography3},
    {id:14, name:'Exploring Vieques', category:"Photography",image: Photography4},
    {id:15, name:'Exploring Vieques', category:"Photography",image: Photography5},
    {id:16, name:'Exploring Vieques', category:"Photography",image: Photography6},
    {id:17, name:'Exploring Vieques', category:"Photography",image: Photography7},
    {id:18, name:'Exploring Vieques', category:"Photography",image: Photography8},
    {id:19, name:'Exploring Vieques', category:"Photography",image: Photography9},
    {id:20, name:'Exploring Vieques', category:"Photography",image: Photography10}
   
];

function Navbar({setCategory}){
    const buttons = [
        { label: "Album Covers", value: "Album Covers" },
        { label: "Flyers", value: "Flyers" },
        { label: "Photography", value: "Photography" },
    ];
    return (
        <nav className="py-4 mb-6">
            <div data-aos='fade-up' data-aos-delay='400' className="container mx-auto px-4 flex space-x-4 sm:space-x-6 text-gray-700 font-semibold text-sm sm:text-lg ">

                <button onClick={() => setCategory("Album Covers")} className=" hover:text-black">Album Covers</button>
                <button onClick={() => setCategory("Flyers")} className="hover:text-black">Flyers</button>
                <button onClick={() => setCategory("Photography")} className="hover:text-black">Photography</button>
            </div>
        </nav>
    );
}

function ProductCard({ product }){
    return (
        <div data-aos='fade-up' data-aos-delay='500' className=" rounded-md overflow-hidden p-4 text-center">
            <img src={product.image} alt={product.name} className="w-full h-72 object-contain mb-4" />
            <h3 className="text-gray-700 font-semibold text-sm">{product.name}</h3>
            <p className="text-black font-bold mt-2">{product.price}</p>
        </div>
    );
}

function ProductGrid({ category}){
    const filteredProducts = category === "all"
       ? products
       : products.filter((product) => product.category === category);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))
            }
        </div>
    );
}

function Products() {
    const [category, setCategory] = useState("Album Covers");

    return (
        <section id="products" className="font-arima overflow-hidden min-h-[780px] sm:min-h-[600px]">
            <Navbar setCategory={setCategory}/>
            <div className="container mx-auto px-4">
                <ProductGrid category={category}/>
            </div>
        </section>
    )
}

export default Products;
import React, { Component } from "react";
import SHOP_DATA from "./shop-data";
import PreviewCollection from "../../../components/preview-collection/preview-collection";

class Shop extends Component{
    constructor(props){
        super()
        this.state={
            collections:SHOP_DATA
        }
    }
    render(){
        const {collections}=this.state;
        
        return (
            
                <div className='shop-page'>
                    {collections.map(({id,...other})=>(
                        <PreviewCollection key={id} {...other}/>

        ))}

                    
                </div>
           

        )
    }
    
}

export default Shop;
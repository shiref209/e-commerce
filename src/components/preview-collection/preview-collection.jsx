import React from "react";
import CollectionItem from "../collection-item/collection-item";
import './preview-collection.scss'

const PreviewCollection=({items,title,id})=>{
    return(
        <div className='preview-collection'>
            <h2 className='title'>{title.toUpperCase()}</h2>
            <div  className='preview'>
                {items
                .filter((item,idx)=>(idx<4))
                .map(({id,...otherItems})=>(
                    <CollectionItem key={id} {...otherItems}/>

                ))}

            </div>
        </div>
    )
}

export default PreviewCollection;
'use client'

import { useState } from "react";

const CategoryBtn = (props)=>{
    const titles = props.titles;
    const [activeId, setActiveId] = useState({
        keyTitle: '',
        keyId: 1
    })

    function activeBtn(id, title){
        setActiveId({
            keyTitle: title,
            keyId: id
        })
    }
    return(
        <div className="btn-sector text-lg flex flex-wrap gap-3 font-semibold">
            {titles.map(data =>{
                return(
                    <div key={data.id} className={`${ data.id == activeId.keyId ? 'active-catalog' : '' } category-btn-${data.id} catalog-btns p-1 px-2 bg-gray-400 hover:brightness-90 active:bg-purple-500 rounded`}>
                        <button onClick={()=>{activeBtn(data.id, data.title)}} className="capitalize">{data.title}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default CategoryBtn;
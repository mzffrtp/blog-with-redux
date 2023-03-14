import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CategoriesSection = () => {
    const {categoriesState} = useSelector(state=>state)
    return (
        <section className="leftside"
        style={{
            width:"30%"
        }}>
            <div className="categoriesTitleContainer">
                <h1 className="text-center my-2">Categories</h1>
            </div>
            <ul className="categoriesList
            d-flex flex-column">
                {
                    categoriesState.categories.map(category=>(
                        <li
                        className="btn btn-outline-info text-capitalize fs-3 fst-italic my-2
                        "
                        style={{
                            width:"7rem",                        
                        }}
                        key={category.id}>
                            <Link
                            to={""}
                            style={{
                                color:"black"
                            }}>{category.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default CategoriesSection
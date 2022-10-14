import React from "react";

const Characters = ({characters = []}) =>{
    return (
        <div className="row">
            {
                characters.map((item,index) => (
                    <div key={index} className="col mb-4">
                        <div className="card" style={{minWidth: "200px"}}>
                            <img src={item.image} alt={item.name}></img>
                            <div className="card-body">
                                <h4 className="card-title">{item.name}</h4>
                                <p>Location:{item.location.name}</p>
                                <p>Status:{item.status}</p>
                                <p>Species:{item.species}</p>
                                <p>Type:{item.type}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    )
}

export default Characters
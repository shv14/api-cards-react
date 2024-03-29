import React from 'react';

export default function Card(props) {
    return (
        <div className="card my-4 product" data-bs-theme={`${props.mode}`} style={{ width: 18 + 'rem' }}>
            <img src={`${props.image_url}`} className="card-img-top" style={{
                width: "100" + "%",
                height: 23 + "vw",
                objectFit: "contain",
                padding: 12 + "px",
            }} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-title">Price: {props.tagline}</h6>
                <p className="card-text">{props.description}</p>
            </div>
        </div>

    );
}

Card.defaultProps = {
    title: "Title",
    description: "Description",
}

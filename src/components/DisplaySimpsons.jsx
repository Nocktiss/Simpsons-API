import React from 'react';

const DisplaySimpsons = ({ simpsons }) => {
    return (
            <figure>
                <img
                    src={simpsons.image}
                    alt={simpsons.character} />
                <figcaption>
                    <blockquote>
                        {simpsons.quote}
                    </blockquote>
                    <cite>{simpsons.character}</cite>
                </figcaption>
            </figure>
        );
    }

export  default  DisplaySimpsons;
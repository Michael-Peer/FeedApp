import React, { useEffect, useState } from 'react';
import './Demo.css'

function Demo() {
    return (
        <div className="container">
            <div className="user-container">
                <div className="avatar">M</div>
                <div className="user-data">
                    <div>Maria Geller</div>
                    <div>Wreaths</div>
                </div>
            </div>
            <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.
            </div>
            <div className="images">
                <img src='https://images.tedooo.com/biz/6282267febfcb07f771359c7/d2b86a82-a665-4759-b832-d48f292e2c0b.jpg'></img>
                <img src='https://images.tedooo.com/biz/6282267febfcb07f771359c7/d2b86a82-a665-4759-b832-d48f292e2c0b.jpg'></img>
            </div>

            <div className="likes-container">
                <div className="likes">666</div>
                <div className="comments">12</div>
            </div>
            <div className="actions-container">
                <div className="like">!</div>
                <div className="comment">=</div>
            </div>
        </div>
    );
}

export default Demo;

import React from 'react';
import './index.css';
import image from './assets/bg.png';
import iconSearch from './assets/icon-search.png';

const App: React.FC = () => {
    return (
        <div className="container">
            <img src={image} alt="fundo" className="bg1" />
            <img src={image} alt="fundo" className="bg2" />
            <div className="box">
                <div>
                    <h1 className="logo-text">
                        GIT-<b>REPO</b>
                    </h1>
                </div>

                <div className="form">
                    <input
                        className="input-search"
                        placeholder="Pesquise um repositório"
                    />
                    <img className="icon-search" src={iconSearch} alt="Icon" />
                </div>
                <div className="card-list">
                    {[1, 2, 3, 4].map((_, index) => (
                        <div className="card" key={String(index)}>
                            <h3>React Js</h3>
                            <p>
                                A declarative, efficient, and flexible
                                JavaScript library for building user interfaces.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;

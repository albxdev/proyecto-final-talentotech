import React from 'react';
import '../home-style/home-style.css';

const AddressInfo: React.FC = () => {
    return (
        <div className="banner-address-info">
            <div className="address-info">
                <h3>Dirección:</h3>
                <p>Carrera 34 # 68B - 32</p>
                <p>Barranquilla, Co 080012</p>
            </div>
        </div>
    );
};

export default AddressInfo;
import React from 'react'
import PropTypes from 'prop-types';
import LocationOption from '../../components/options/LocationOption/LocationOption'

function LocationOptionsList({ datas, handleShowOptions }) {
    const newDatas = datas.map((data) => `${data.city}, ${data.country}`);
    const datasFiltered = newDatas.filter(
        (data, index) => newDatas.indexOf(data) === index
    );
    
    return (
        <>
            {datasFiltered.map((location) => (
                <LocationOption
                    key={location}
                    btnLabel={location}
                    showOptions={handleShowOptions}
                />
            ))}
        </>
    )
}

LocationOptionsList.propTypes = {
    datas: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    handleShowOptions: PropTypes.func.isRequired,
};

export default LocationOptionsList

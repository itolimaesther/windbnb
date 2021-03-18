import React from 'react'
import PropTypes from 'prop-types';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function LocationOption({ btnLabel, showOptions }) {
    return (
        <div className="option">
            <LocationOnIcon className="icon" />
            <button type="button" onClick={showOptions}>
                {btnLabel}
            </button>
        </div>
    )
}

LocationOption.propTypes = {
    btnLabel: PropTypes.string.isRequired,
    showOptions: PropTypes.func.isRequired,
};

export default LocationOption

import React from 'react'
import PropTypes from 'prop-types';

function GuestOption({ title, subtitle, value, increment, decrement }) {
    return (
        <div className="guest_option">
            <h4>
                {title} <span className="subtitle">{subtitle}</span>
            </h4>

            <div className="option_value">
                <button
                    type="button"
                    className="btn_option"
                    onClick={() => decrement('adults', false, true)}
                >
                    -
                </button>
                <p className="content">{value}</p>
                <button
                    type="button"
                    className="btn_option"
                    onClick={() => increment('adults', true)}
                >
                    +
                </button>
            </div>
        </div>
    )
}

GuestOption.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
};


export default GuestOption

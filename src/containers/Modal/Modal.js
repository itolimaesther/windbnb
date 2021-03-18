import React, { useState, useContext } from 'react'
import GuestOption from '../../components/options/GuestOptions/GuestOption'
import { RoomsContext } from '../../context/RoomsContext';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import LocationOptionsList from '../LocationOptions/LocationOptionsList'
import PropTypes from 'prop-types';
function Modal({ isShow }) {

    const {
        allRooms,
        displayModal,
        updateRooms,
        filters,
        updateFilters,
        updateFilterGuest,
        totalGuests,
        setHeaderIsShow,
    } = useContext(RoomsContext);

    const [showOption, setShowOption] = useState({
        location: false,
        guest: false,
    });

    const handleShowOptions = (e, name = null) => {
        if (name === null) {
            if (e.target.name === 'location') {
                setShowOption({
                    ...showOption,
                    location: true,
                    guest: false,
                });
            } else if (e.target.name === 'guest') {
                setShowOption({
                    ...showOption,
                    location: false,
                    guest: true,
                });
            }
        } else {
            setShowOption({
                ...showOption,
                [name]: !showOption[name],
            });
            updateFilters(name, e.target.innerText);
        }
    };

    const handleChange = (e) => {
        updateFilters(e.target.name, e.target.value);
    };

    return (
        <>
            {isShow && (
                <div className="modal">
                    <div className="container">
                        <div className="modal_header">
                            <h4>Edit your search</h4>
                            <button type="button">
                                <LocationOnIcon
                                    className="icon"
                                    onClick={displayModal}
                                />
                            </button>
                        </div>

                        <div className="filters">
                            <div className="input_control">
                                <label htmlFor="location">
                                    Location
                                    <input
                                        type="text"
                                        className="input_text_location"
                                        id="location"
                                        name="location"
                                        placeholder="Select location"
                                        value={filters.location}
                                        onChange={handleChange}
                                        onClick={handleShowOptions}
                                    />
                                </label>
                            </div>
                            <div className="input_control">
                                <label htmlFor="guest">
                                    Guests
                                    <input
                                        type="text"
                                        id="guest"
                                        name="guest"
                                        className="input_text_guest"
                                        value={totalGuests()}
                                        onChange={() => totalGuests()}
                                        placeholder="Add guests"
                                        onClick={handleShowOptions}
                                    />
                                </label>
                            </div>

                            <div className="input_control">
                                <button
                                    type="button"
                                    className="btn_search"
                                    onClick={() => {
                                        updateRooms();
                                        displayModal();
                                        setShowOption({
                                            ...showOption,
                                            location: false,
                                            guest: false,
                                        });
                                        setHeaderIsShow(true);
                                    }}
                                >
                                    <SearchIcon className="icon" />
                                    <span>Search</span>
                                </button>
                            </div>
                        </div>

                        <div className="options_group">
                            <div
                                className={`location_options ${
                                    !showOption.location ? ' hide' : ''
                                }`}
                            >
                                <LocationOptionsList
                                    datas={allRooms}
                                    handleShowOptions={(e) =>
                                        handleShowOptions(e, 'location')
                                    }
                                />
                            </div>

                            <div
                                className={
                                    !showOption.guest ? ' hide' : ''
                                }
                            >
                                <GuestOption
                                    title="Adults"
                                    subtitle="Ages 13 or above"
                                    value={filters.guest.adults}
                                    increment={() =>
                                        updateFilterGuest('adults', true)
                                    }
                                    decrement={() =>
                                        updateFilterGuest('adults', false, true)
                                    }
                                />

                                <GuestOption
                                    title="Childrens"
                                    subtitle="Ages 2-12"
                                    value={filters.guest.childrens}
                                    increment={() =>
                                        updateFilterGuest('childrens', true)
                                    }
                                    decrement={() =>
                                        updateFilterGuest(
                                            'childrens',
                                            false,
                                            true
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}




Modal.propTypes = {
    isShow: PropTypes.bool.isRequired,
};

export default Modal

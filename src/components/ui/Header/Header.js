import React, { useContext } from 'react'
import { RoomsContext } from '../../../context/RoomsContext';
import SearchIcon from '@material-ui/icons/Search';
import logoImg from '../../../assets/images/logo.svg';

function Header() {

    const {
        filters,
        displayModal,
        totalGuests,
        headerIsShow,
        setHeaderIsShow,
    } = useContext(RoomsContext);

    const handleClick = () => {
        displayModal();
        setHeaderIsShow(false);
    };


    return (
        <header
            className="header"
            style={{ visibility: !headerIsShow ? 'hidden' : 'visible' }}
        >
            <div className="logo">
                <img src={logoImg} alt="logo" />
            </div>

            <div className="filters">
                <input
                    type="text"
                    className="input_text_city"
                    placeholder="Select location"
                    defaultValue={filters.location}
                    onClick={handleClick}
                />
                <input
                    type="text"
                    className="input_text_guest"
                    placeholder="Add guests"
                    defaultValue={totalGuests()}
                    onClick={handleClick}
                />
                <button type="button">
                    <SearchIcon className="icon" />
                </button>
            </div>
        </header>
    )
}

export default Header

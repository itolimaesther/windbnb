import React from 'react'
import PropTypes from 'prop-types';
import StarIcon from '@material-ui/icons/Star';

function Room({ photo, title, superHost, type, rating }) {
    return (
        <div className="room">
            <div className="room_img">
                <img src={photo} className="card_img_top" alt={title} />
            </div>
            <div className="room_body">
                <div className="room_content">
                    <div className="room_content_left">
                        {superHost && (
                            <span className="room_host">
                                Super host
                            </span>
                        )}
                        <p className="room_type">{type}</p>
                    </div>
                    <div className="room_content_right">
                        <StarIcon className="room_rating_icon" />
                        <p className="room_rating">{rating}</p>
                    </div>
                </div>
                <h5 className="room_title">{title}</h5>
            </div>
        </div>
    )
}

Room.propTypes = {
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    superHost: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
};

export default Room;

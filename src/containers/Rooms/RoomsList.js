import React, { useContext } from 'react';
import { RoomsContext } from '../../context/RoomsContext';
import Room from '../../components/rooms/Room';


function RoomsList() {

    const { rooms } = useContext(RoomsContext);



    return (
        <div className="rooms_list">
            <div className="header">
                {rooms.length > 0 ? (
                    <>
                        <h1>Stays in Finland</h1>
                        <p className="total">{rooms.length}+ stays</p>
                    </>
                ) : (
                    <h1>No results</h1>
                )}
            </div>

            {rooms.map((room) => (
                <Room
                    key={room.id}
                    photo={room.photo}
                    title={room.title}
                    superHost={room.superHost}
                    type={room.type}
                    rating={room.rating}
                />
            ))}
        </div>
    )
}

export default RoomsList

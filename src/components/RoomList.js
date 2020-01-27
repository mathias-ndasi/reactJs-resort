import React from "react";
import Room from "./Room";
import Title from "./Title";

const RoomList = props => {
  if (props.rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms match your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomlist">
      <div className="roomslist-center">
        {props.rooms.map(item => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
};

export default RoomList;

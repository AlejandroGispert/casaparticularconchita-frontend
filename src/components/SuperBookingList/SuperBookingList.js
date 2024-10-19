import SuperBookingItem from "./SuperBookingItem/SuperBookingItem";

const SuperBookingList = (props) => {
  const superBookings = props.superBookings.map((superBooking) => {
    let correctfromDate = new Date(superBooking.fromDate).toLocaleDateString();
    let correcttoDate = new Date(superBooking.toDate).toLocaleDateString();

    return (
      <SuperBookingItem
        key={superBooking._id}
        superBookingId={superBooking._id}
        name={superBooking.name}
        country={superBooking.country}
        email={superBooking.email}
        room={superBooking.room}
        persons={superBooking.persons}
        price={superBooking.price}
        comments={superBooking.comments}
        fromDate={correctfromDate}
        toDate={correcttoDate}
        dateofSentRequest={superBooking.dateofSentRequest}
        statusOfSuperBooking={superBooking.statusOfSuperBooking}
        onDetail={props.onViewDetail}
        onDelete={props.deleteSuperbooking}
        onStatusclicked={props.Statusclicked}
        isBoxVisible={props.isBoxVisible}
      />
    );
  });

  return <tbody className="superbooking__list">{superBookings}</tbody>;
};

export default SuperBookingList;

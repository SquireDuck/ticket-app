// import Deleteblock from "./Deleteblock"
// import PriorityDisplay from "./PriorityDisplay"
// import ProgressDisplay from "./ProgressDisplay"
// import StatusDisplay from "./StatusDisplay"
// import Link from "next/link"

// const TicketCard = ({ticket}) => {

// const formatTimestamp = (timestamp) => {
//   const options = {
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   };

//   const data = new Date(timestamp)
//   const formattedDate = data.toLocaleString("en-US", options);

//   return formattedDate;
// }

//   return (
//     <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
//       <div className="flex mb-3">
//         <PriorityDisplay priority={ticket.priority}/>
//         <div className="ml-auto">
//           <Deleteblock id={ticket._id}/>
//         </div>
//       </div>
//       <Link href={`/TicketPage/${ticket._id}`} style={{display: "contents"}}>
//         <h4>
//           {ticket.title}
//         </h4>
//         <hr className="h-px border-0 bg-page mb-2" />
//         <p className="whitespace-pre-wrap">
//           {ticket.description}
//         </p>
//         <div className="flex-grow"></div>
//         <div className="flex mt-2">
//           <div className="flex flex-col">
//             <p className="text-xs my-1">{formatTimestamp(ticket.createdAt)}</p>
//             <ProgressDisplay progress={ticket.progress}/>
//           </div>
//           <div className="ml-auto flex items-end">
//             <StatusDisplay status={ticket.status}/>
//           </div>
//         </div>
//       </Link>
//     </div>
//   )
// }

// export default TicketCard

import Deleteblock from "./Deleteblock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";

const TicketCard = ({ ticket }) => {
  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const data = new Date(timestamp);
    const formattedDate = data.toLocaleString("en-US", options);

    return formattedDate;
  };

  return (
    <div className="relative"> {/* Positioning container */}
      {/* Main clickable part of the card */}
      <Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents" }}>
        <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
          <div className="flex mb-3">
            <PriorityDisplay priority={ticket.priority} />
            <div className="ml-auto">
              {/* Deleteblock will be placed separately */}
            </div>
          </div>
          <h4>{ticket.title}</h4>
          <hr className="h-px border-0 bg-page mb-2" />
          <p className="whitespace-pre-wrap">{ticket.description}</p>
          <div className="flex-grow"></div>
          <div className="flex mt-2">
            <div className="flex flex-col">
              <p className="text-xs my-1">{formatTimestamp(ticket.createdAt)}</p>
              <ProgressDisplay progress={ticket.progress} />
            </div>
            <div className="ml-auto flex items-end">
              <StatusDisplay status={ticket.status} />
            </div>
          </div>
        </div>
      </Link>

      {/* Delete button positioned on top of the card */}
      <div
        className="absolute top-2 right-2 z-10 cursor-pointer" // Enlarge clickable area for the delete action
        style={{ width: "30px", height: "30px" }} // Adjust width/height for a bigger clickable area
      >
        <Deleteblock id={ticket._id} />
      </div>
    </div>
  );
};

export default TicketCard;

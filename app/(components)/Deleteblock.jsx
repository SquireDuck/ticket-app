"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const Deleteblock = ({ id }) => {
  const router = useRouter();

  const deleteTicket = async (e) => {
    e.stopPropagation(); // Prevents the Link click from happening
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <div
      onClick={deleteTicket}
      className="flex items-center justify-center w-8 h-8 cursor-pointer hover:bg-red-200 rounded-xl group" // 'group' used to apply hover styles inside the container
    >
      <FontAwesomeIcon
        icon={faX}
        className="text-red-400 group-hover:text-red-600 transition-colors" // Uses 'group-hover' to change color when hovering the parent
      />
    </div>
  );
};

export default Deleteblock;

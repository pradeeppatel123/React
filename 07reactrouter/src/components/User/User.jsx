import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { userid } = useParams();
  return (
    <>
      <div className="text-center  font-bold py-4 text-white
      bg-gray-400">
        User:{userid}
      </div>
      ;
    </>
  );
}

export default User;

import { useState } from "react";
import { api } from "Y/utils/api";
import Link from "next/link";

export default function Home() {
  //define constants
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameToUpdate, setNameToUpdate] = useState("");
  const [emailToUpdate, setEmailToUpdate] = useState("");
  const [userId, setUserId] = useState("");
  const [userIdToUpdate, setUserIdToUpdate] = useState("");
  const [userIdToDelete, setUserIdToDelete] = useState("");

  //define functions
  const fetchAllUsers = api.home.getAll.useQuery();
  const handleEditUsersButtonClick = () => {
    console.log("Navigate to Edit Users route!");
  };
  

  //return an empty div
  return (
    <div className="mx-auto p-8">
      <div className="mb-8">
        {/* edit users */}
        <Link href="/edituser">
          <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Edit Users
          </button>
        </Link>
      </div>

      <div className="text- mb-3 mt-3 grid grid-cols-3 gap-4 font-bold">
        <p>Id</p>
        <p>Name</p>
        <p>Email</p>
      </div>

      {fetchAllUsers.data &&
        fetchAllUsers.data.map((user) => (
          <div
            key={user.id}
            className="my-4 grid grid-cols-3 gap-4 rounded border border-gray-300 bg-white p-4 shadow"
          >
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}



    
    </div>
  );
}
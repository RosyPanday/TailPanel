import { useEffect, useState } from "react";
import type { User } from "../../../types/dashbaord.js";

function DashboardUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>("");

  const apiUrl = import.meta.env.VITE_DUMMY_JSON_API;
  useEffect(() => {
    fetch(`${apiUrl}/users?limit=5`)
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => setError(error.message));
  }, []);

  return users.map((item) => {
    return (
        <div key={item.id} className="flex flex-col gap-2 flex-1 w-58 m-2">
            <img src={item.image} alt={item.firstName} className="w-20 h-20 rounded-full"/>
                <span className="font-semibold text-blue-600">{item.firstName}{" "}{item.lastName}</span>
            <div>{item.email}</div>
        </div>
    )
  });
}

export default DashboardUsers;
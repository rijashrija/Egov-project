import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  // Fetch unverified users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const userList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setUsers(userList.filter((user) => !user.isVerified)); // Filter unverified users
      } catch (error) {
        setError("Failed to fetch users.");
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Verify a user
  const verifyUser = async (userId) => {
    try {
      const userDocRef = doc(db, "users", userId);
      await updateDoc(userDocRef, { isVerified: true }); // Update the document
      setUsers(users.filter((user) => user.id !== userId)); // Remove verified user from the list
      alert("User verified successfully!");
    } catch (error) {
      setError("Failed to verify user.");
      console.error("Error verifying user:", error);
    }
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <h2>Unverified Users</h2>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
            <p>Email: {user.email}</p>
            <p>Citizenship Number: {user.citizenshipNumber}</p>
            <img src={user.citizenshipImageUrl} alt="Citizenship Card" width="200" />
            <button onClick={() => verifyUser(user.id)}>Verify User</button>
          </div>
        ))
      ) : (
        <p>No unverified users.</p>
      )}
    </div>
  );
};

export default AdminPanel;
import React, { useState, useEffect } from "react";
import { firestore } from "./firebase";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

function Crud() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editItem, setEditItem] = useState({ id: null, name: "" }); // New state for edit

  useEffect(() => {
    getItems(); // Fetch items initially
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newItem.trim()) return; // Prevent adding empty strings
    try {
      await addDoc(collection(firestore, "items"), { name: newItem });
      setNewItem("");
      getItems();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const getItems = async () => {
    const itemsRef = collection(firestore, "items");
    const itemsSnapshot = await getDocs(itemsRef);
    const itemsData = itemsSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setItems(itemsData);
  };

  const handleUpdate = async () => {
    if (!editItem.name.trim()) return; // Prevent updating with empty strings
    const itemRef = doc(firestore, "items", editItem.id);
    await updateDoc(itemRef, { name: editItem.name });
    setEditItem({ id: null, name: "" });
    getItems();
  };

  const handleDelete = async (id) => {
    const itemRef = doc(firestore, "items", id);
    await deleteDoc(itemRef);
    getItems();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {editItem.id === item.id ? (
              <input
                type="text"
                value={editItem.name}
                onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
              />
            ) : (
              item.name
            )}
            {editItem.id === item.id ? (
              <button onClick={handleUpdate}>Save</button>
            ) : (
              <button onClick={() => setEditItem({ id: item.id, name: item.name })}>
                Edit
              </button>
            )}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc, deleteDoc, updateDoc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBemIiDN1inXjoyX3keKpP5lPIOWAxDPFI",
  authDomain: "todo-c0599.firebaseapp.com",
  projectId: "todo-c0599",
  storageBucket: "todo-c0599.appspot.com",
  messagingSenderId: "110311005432",
  appId: "1:110311005432:web:c027a3a3e2d2a2dcb6ef0d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getAllTodosData = async () => {
  const querySnapshot = await getDocs(collection(db, "todos"));
  const todoList = [];
  querySnapshot.forEach((doc) => {
    todoList.push(doc.data());
  });
  return todoList;
};

export const addTodoData = async (todo) => {
  await setDoc(doc(db, "todos", todo.id), todo);
  return todo;
};

export const deleteTodoData = async (id) => {
  await deleteDoc(doc(db, "todos", id));
  return id;
};

export const updateTodoData = async (id, todo) => {
  // データを更新
  const todoRef = doc(db, "todos", id);
  await updateDoc(todoRef, todo);

  // 更新後のデータを取得
  const docSnap = await getDoc(todoRef);
  return docSnap.data();
};

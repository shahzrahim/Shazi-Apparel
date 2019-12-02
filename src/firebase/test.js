import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

//how to retrieve items from firebase
firestore
  .collection("users")
  .doc("rBu7F5Kf4IjUM5ys5hYJ")
  .collection("cartItems")
  .doc("rBu7F5Kf4IjUM5ys5hYJ");

//same end result as query above
firestore.doc('users/rBu7F5Kf4IjUM5ys5hYJ/cartItems/rBu7F5Kf4IjUM5ys5hYJ')

//end point to retrieve just cart items
firestore.collections('users/rBu7F5Kf4IjUM5ys5hYJ/cartItems')
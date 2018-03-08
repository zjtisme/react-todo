import firebase from 'firebase'

try {
  var config = {
      apiKey: "AIzaSyDeMzQBwPFHBz1HYnyH991ss8V_Fsq17rY",
      authDomain: "todolist-app-63adb.firebaseapp.com",
      databaseURL: "https://todolist-app-63adb.firebaseio.com",
      projectId: "todolist-app-63adb",
      storageBucket: "todolist-app-63adb.appspot.com",
      messagingSenderId: "93077636289"
    };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;

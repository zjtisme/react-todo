import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDeMzQBwPFHBz1HYnyH991ss8V_Fsq17rY",
    authDomain: "todolist-app-63adb.firebaseapp.com",
    databaseURL: "https://todolist-app-63adb.firebaseio.com",
    projectId: "todolist-app-63adb",
    storageBucket: "todolist-app-63adb.appspot.com",
    messagingSenderId: "93077636289"
  };

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Jintai',
    age: 25
  }
}).then(()=>{
  console.log('Set data successfully!')
},(e) => {
  console.log(e);
});

var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

notesRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val());
});

notesRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});

var newNoteRef = notesRef.push({text: 'Walk the dog!'});

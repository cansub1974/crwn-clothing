import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore();

firestore.collection('users').doc('0PNvniSu0ONY2QN93SQA').collection('cart-items').doc('3XNnt0HriqPsNYOc0fGM')
firestore.doc('users/0PNvniSu0ONY2QN93SQA/cart-items/3XNnt0HriqPsNYOc0fGM')
firestore.collection('users/0PNvniSu0ONY2QN93SQA/cart-items')
import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionList } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';
import firebase from './firebase';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
    const messaging = firebase.messaging();
    messaging.requestPermission().then(() => {
        return messaging.getToken();
    }).then((token) => {
        console.log("token", token)

    })

    return ( <
        GlobalProvider >
        <
        Header / >
        <
        div className = "container" >
        <
        Balance / >
        <
        AccountSummary / >
        <
        TransactionList / >
        <
        AddTransaction / >
        <
        /div> <
        / GlobalProvider >
    );
}

export default App;
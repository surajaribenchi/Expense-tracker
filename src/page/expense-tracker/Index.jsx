import {useAddtransaction} from '../../hooks/useAddtransaction'
import { useState } from 'react';
import {useGetTransactions} from '../../hooks/useGetTransaction'
import {useGetUserInfo} from '../../hooks/useGetUserInfo'
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase-config';
import {useNavigate} from 'react-router-dom';
export const Expensetracker=()=>{
    const {addTransaction} =useAddtransaction();
    const {transactions,transactionsTotals}=useGetTransactions();
    const {name,profilephoto}=useGetUserInfo();
    const navigate=useNavigate();

    const [description,setDescription]=useState("");
    const [transactionAmount,setTransactionAmount]=useState(0);
    const [transactionType,setTransactionType]=useState("expense");
    const {balance,income,expenses}=transactionsTotals;
    const onSubmit=(e)=>{
        e.preventDefault()
        addTransaction({description,
        transactionAmount,
        transactionType,
    });
    setDescription("");
    setTransactionAmount("");
    };
    const signuserout=async()=>{
        try{
        await signOut(auth);
        localStorage.clear()
        navigate("/");
        }catch(err){
            console.error(err)
        }
    };
    return (<><div className="expense-tracker">
        <div className="container">
            <h1>{name}'s Expense Tracker</h1>
            <div className="balance">
                <h3>balance</h3>
                <h2>${balance}</h2>
            </div>
            <div className="summary">
                <div className="income">
                    <h4>Income</h4>
                    <p>${income}</p>
                </div>
                <div className="expenses">
                    <h4>expenses</h4>
                    <p>${expenses}</p>
                </div>
            </div>
            <form  className="add-transaction" action="">
                <input type="text" placeholder="Description" required onChange={(e)=>setDescription(e.target.value)} value={description}/>
                <input type="number" placeholder="Amount" required 
                onChange={(e)=>setTransactionAmount(e.target.value)}
                value={transactionAmount}/>
                <input type="radio" id="expense" value="expense"
                onChange={(e)=>setTransactionType(e.target.value)}
                checked={transactionType==="expense"}/>
                <label htmlFor="expense">Expense</label>
                <input type="radio" id="income" value="income"
                onChange={(e)=>setTransactionType(e.target.value)}
                checked={transactionType==="income"}/>
                <label htmlFor="income">Income</label>
                <button type="submit" onClick={onSubmit}>Add Transaction</button>
            </form>
        </div>
        {profilephoto && <div className='profile'>
            <img className="profile-photo" src={profilephoto} alt="" />
            <button className='signoutbtn' onClick={signuserout}>Sign-out</button>
            </div>
            }
    </div>
    <div className="transactions">
        <h3>Transactions</h3>
        <ul>
            {transactions.map((transaction)=>{
                const {description,transactionAmount,transactionType}=transaction;
                return(
                    <li>
                        <h4>{description}</h4>
                        <p>{transactionAmount} : <label style={{color: transactionType==="expense"?"red":"green"}}>{transactionType}</label></p>
                    </li>
                );
            })}
        </ul>
    </div>
    </>)
};
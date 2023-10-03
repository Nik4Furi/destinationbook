import {Token} from '../GloballyFunctions'

//------------ Function to send the notifications
const sendNotification = async (msg,id) => {
    try {

        const res = await fetch(`${process.env.REACT_APP_API}notification/add/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'auth-token': Token
            },
            body: JSON.stringify(msg)
        });
        const data = await res.json();
        console.log('check data is ', data);

    } catch (error) {
        console.log('error ', error);
    }
}

//-------------------- Function to get all the notification of respective user
export const getAllNotifications = async () => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API}notification/getAllNotifications`,{
            headers: {
                'Content-Type': 'application/json',
                'auth-token': Token
            }
        });
        const data = await res.json();
        console.log('this is data ',data);

    } catch (error) {
        console.log('error ', error);
    }
}

//-------------------- Function to get all the notification of respective user
export const DeleteNotifications = async (id) => {
    //----------- Call the api to delete the notification
    try {

        const res  = await fetch(`${process.env.REACT_APP_API}notification/delete/${id}`,{
          method : 'DELETE',
          headers : {
            'auth-token' : Token
          }
        });
        const data = await res.json();
        return data;

    } catch (error) {
        console.log('error ', error);
    }
}

export default sendNotification;
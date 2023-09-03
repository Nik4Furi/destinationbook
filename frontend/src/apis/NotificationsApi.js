//------------ Function to send the notifications
const sendNotification = async (msg,id) => {
    try {
        const token = localStorage.getItem('token');

        const res = await fetch(`${process.env.REACT_APP_API}notification/add/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
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
        const token = localStorage.getItem('token');

        const res = await fetch(`${process.env.REACT_APP_API}notification/getAllNotifications`,{
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            }
        });
        const data = await res.json();
        console.log('this is data ',data);

    } catch (error) {
        console.log('error ', error);
    }
}

export default sendNotification;
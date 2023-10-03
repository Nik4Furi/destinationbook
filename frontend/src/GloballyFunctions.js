//LOCALSTORAGE SPECIFIC STUFF-------------- Apply the localstorage data with expiry time, used in login and logout the users ------------------/
export const DayToValidate = 24*60*60*1000; //Validate token upto 1 day

export const setWithExpiry = (key, value, ttl) =>{
	const now = new Date();

	// `item` is an object which contains the original value
	// as well as the time when it's supposed to expire
    // 1 day = 24*60*60*1000;
	const item = {
		value: value,
		expiry: now.getTime() + ttl,
	}
	localStorage.setItem(key, JSON.stringify(item))
}

//------------------ Function to get the data of localstorage -----------X
export const getWithExpiry = (key)=> {

	const itemStr = localStorage.getItem(key)
	
	// if the item doesn't exist, return null
	if (!itemStr) {
		return null
	}
	const item = JSON.parse(itemStr)
	const now = new Date()
	// compare the expiry time of the item with the current time
	if (now.getTime() > item.expiry) {
		// If the item is expired, delete the item from storage
		// and return null
		localStorage.removeItem(key)
		return null
	}
	return item.value
}
//---------------------- LOCALSTORAGE SPECIFIC STUFF ------------X

// FORM DATA SPECIFIC STUFF ------------------- Define the structure of the cities and purpose of dataset
export const Cities = ['New Delhi', 'Mumbai', 'Pune', 'Kolkata', 'Hydrabaad', 'Banguluru'];
export const Purposes = ['Meeting Room', 'Virtual Office', 'Conference Room', 'Interview Room'];
export const BookingSlots = ['Morning','Afternoon','Evening','Night'];
//-------------- FROM DATA SPECIFIC STUFF-------------X

// AUTHENTICATION SPECIFIC STUFF-------------- For use this stuff in authentications users and datas
export const Token = getWithExpiry('token'); //Get the token value to validating users

//---------------------- AUTHENTICATION SPECIFIC STUFF ----------------X
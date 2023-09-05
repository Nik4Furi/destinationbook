import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify'

import Loading from '../../components/Loading'


function EditDetails() {

  const { id } = useParams();
  const token = localStorage.getItem('token');

  const [place, setPlace] = useState("");

  const [formData, setFormData] = useState({
    name: place?.name,
    description: place?.description,
    capacity: place?.capacity,
    price: place?.price,
    address: place?.address,
    location: place?.location,
    booking_slots: place?.booking_slots,
    available: place?.available,
  });

  //------------- Call the api to fetch details of the 
  const fetchDetails = async () => {
    try {


      //Call the api to fetch place by the id
      const res = await fetch(`${process.env.REACT_APP_API}sponser/fetchDetails/${id}`, {
        headers: {
          'auth-token': token
        }
      });
      const data = await res.json();
      console.log('data ', data);

      setPlace(data.places);
      let content = data.places;

      setFormData({ name: content.name, description: content.description, capacity: content.capacity, price: content.price, booking_slots: content.booking_slots, available: content.available, address: content.address, location: content.location })
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }

  }
  useEffect(() => {
    fetchDetails(); //fetch details of place

    // if(!place)
    //   return <Loading />
  }, []);


  //------------ Image specific stuff to store images
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const imgTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp", "image/avif"]

  // Handle image upload
  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    // console.log('files ',e.target.files);

    if (imgTypes.includes(imageFile.type) === false) {
      toast.warn("This image format can't support");
      return;
    }

    setFile(imageFile);

  };
  //------------- Function to upload the new images
  const handleUpload = async () => {

    const form = new FormData();
    form.append('file', file);

    setLoading(true);

    //Call the api to upload new images
    try {
      const res = await fetch(`${process.env.REACT_APP_API}sponser/updatePicture/${id}`, {
        method: 'PUT',
        headers: {
          'auth-token': token
        },
        body: form
      });
      const data = await res.json();
      console.log('data is ', data);

      if (data.success === true) {
        toast.success(data.msg);
      }

      else if (data.success === false) {
        toast.error(data.msg);
      }

    } catch (error) {
      console.log('error ', error);
      toast.error(error.message);
    }
    setLoading(false);
    setFile('');

  }

  //-------------------- Form data specific stuff to updating other stuff of the place

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };


  //------------ function to update all the changes reflects
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form data submission here
    // console.log(formData);
    setLoading(true);

    if (Number(formData.capacity) < 0) {
      toast.error("Capacity can't be negative");
      setFormData({ ...formData, capacity: '' });
      setLoading(false);
      return;
    }

    if (Number(formData.price) < 0) {
      toast.error("Price can't be negative");
      setFormData({ ...formData, price: '' });
      setLoading(false);
      return;
    }


    //---------------- Call the api to adding new images
    try {
      const res = await fetch(`${process.env.REACT_APP_API}sponser/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      console.log('data is ', data);

      if (data.success === true) {
        toast.success(data.msg);
      }

      else if (data.success === false) {
        toast.error(data.msg);
      }

    } catch (error) {
      console.log('error ', error);
      toast.error(error.message);
    }
    setLoading(false);
    
  };

  if (!place) {
    return <div><Loading /></div>;
  }

  return (
    <>
      {!place && <Loading />}

      <div className="flex items-center w-full my-2 cursor-pointer">

        <div className="mb-4 mx-auto">
          <img src={place.picture.url} alt={place.name} className="h-auto" style={{ maxWidth: "120px" }} />

          <div className="my-2">
            <input
              type="file"
              id="file"
              name="file"
              value={file}
              onChange={handleImageUpload}
              accept="image/*"
              className="border p-2 w-full cursor-pointer"
            />
          </div>

          <div className="mt-4">
            
                <button
                  onClick={() => handleUpload()}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
                >
                  Upload Image
                </button>
          </div>
        </div>

        {/* Other details of the place here  */}
        <div className="my-2 w-3/6">
          <form onSubmit={handleSubmit}>

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={place.name}
                value={formData.name}
                onChange={handleInputChange}
                required
                minLength={5}
                maxLength={250}
                className="border p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                placeholder={place.description}
                onChange={handleInputChange}
                rows="3"
                required
                minLength={9}
                maxLength={450}
                className="border p-2 w-full"
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="capacity" className="block text-sm font-medium">
                Capacity
              </label>
              <input
                type="number"
                id="capacity"
                name="capacity"
                value={formData.capacity}
                placeholder={place.capacity}
                onChange={handleInputChange}
                required
                className="border p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block text-sm font-medium">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder={place.price}
                value={formData.price}
                onChange={handleInputChange}
                required
                className="border p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-medium">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                placeholder={place.location}
                className="border p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="booking_slots" className="block text-sm font-medium">
                Booking Slots
              </label>
              <select
                id="booking_slots"
                name="booking_slots"
                value={formData.booking_slots}
                placeholder={place.booking_slots}
                onChange={handleInputChange}
                className="border p-2 w-full"
              >
                <option name="booking_slots" value="morning">Morning</option>
                <option name="booking_slots" value="evening">Evening</option>
                <option name="booking_slots" value="night">Night</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                minLength={10}
                maxLength={1000}
                placeholder={place.address}
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Available</label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="available"
                  name="available"
                  checked={formData.available}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label htmlFor="available" className="text-sm">
                  Yes, it's available
                </label>
              </div>
            </div>

            <div className="mt-4">
              {
                loading
                  ? <Loading />
                  :
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
                  > Update Details</button>
              }
            </div>
          </form>

        </div>


      </div>
    </>
  );
}

export default EditDetails;

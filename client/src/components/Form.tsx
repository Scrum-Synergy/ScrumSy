import React, { useState } from 'react';
import { toast } from "react-toastify";
import axios from 'axios';


interface FormData {
  email: string ; 
  subject: string;
  degree: string;
  description: string;
  status: string;
}

const RevisionPlanForm: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({
    email: '',
    subject: '',
    degree: '',
    description: '',
    status: 'pending'

  });

 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)jwt\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER}/api/request/create`, formData, {
        headers: {
          jwt: token,
        },
      });
      console.log(response.data);

      toast.success('Revision Plan submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit Revision Plan. Please try again.');
    }
  
  };

  return (
    <div className='w-full'>
      

        <form 
          
          className=" md:w-[560px] max-w-[1200px]  rounded-[10px] border border-stroke bg-white p-10 "
          onSubmit={handleSubmit}
        >
          <div className="SortableItem fb-builder-item">
            <h3 className="static text-xl font-semibold leading-tight text-black sm:text-[28px]">
              REVISION PLAN FORM
            </h3>
          </div>
          
          <div className="SortableItem fb-builder-item mt-4">
            
          <div className="SortableItem fb-builder-item">
            <div className="mb-4">
              <label className="mb-2.5 block text-base text-black">
                <span>E-Mail</span>
              </label>
              <input
                type="email"
                className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                name="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
                
              />
            </div>
          </div>
            <div className="mb-4">
              <label className="mb-2.5 block text-base text-black">
                <span>Subject</span>
              </label>
              <select
                className="w-full appearance-none rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                
              >
                <option value=""></option>
                <option value="maths">Maths</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="biology">Biology</option>
                <option value="geography">Geography</option>
                <option value="history">History</option>
                <option value="economics">Economics</option>
                <option value="commerce">Commerce</option>
                <option value="accounting">Accounting</option>
                <option value="business">Business</option>
                <option value="computer">Computer</option>
                <option value="sciences">Sciences</option>
                <option value="english">English</option>
                <option value="french">French</option>

              </select>
            </div>
            
          </div>

          <div className="mb-4">
            <label className="mb-2.5 block text-base text-black">
              <span>Class</span>
            </label>
            <select
              className="w-full appearance-none rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              required
            >
            <option value=""></option>
            <option value="LFSI1">LFSI1</option>
            <option value="LFSI2">LFSI2</option>
            <option value="LFSI3">LFSI3</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="mb-2.5 block text-base text-black">
              <span>Additional Information</span>
            </label>
            <textarea
              className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black  focus:border-primary"
              name="description"
              placeholder="Additional Information"
              value={formData.description}
              onChange={handleChange}
              />
          </div>
           
          <div className="btn-toolbar flex items-center space-x-3">
            <input
              type="submit"
              className=" bg-[#211951] inline-flex cursor-pointer items-center justify-center rounded border border-primary bg-primary px-8 py-2 text-base font-medium text-white hover:bg-opacity-90"
              value="Submit"
            />
          </div>
        </form>
      </div>
  );
}

export default RevisionPlanForm;

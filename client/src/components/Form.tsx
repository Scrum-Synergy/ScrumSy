import React, { useState } from 'react';
import { toast } from "react-toastify";
import axios from 'axios';


interface FormData {
  email: string; 
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
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_SERVER}/api/request/create`, formData)
      .then(response => {
        console.log(response.data);
        setFormData({
          email: '',
          subject: '',
          degree: '',
          description: '',
          status: 'pending'
        });
        toast.success('Revision Plan Form submitted successfully!');
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        toast.error('Revision Plan Form submission failed. Please try again.');
      });

  };

  return (
    <div className='w-[600px]'>
      <br />
      <div className="themeOne">
        <form 
          
          className="mx-auto w-full max-w-[900px] rounded-[10px] border border-stroke bg-white p-10 themeTwo"
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
              >
                <option value="place_holder_option_1">maths</option>
                <option value="place_holder_option_2">sciences</option>
                <option value="place_holder_option_3">physics</option>
                <option value="place_holder_option_4">chemistry</option>
                <option value="place_holder_option_5">biology</option>
                <option value="place_holder_option_6">english</option>
                <option value="place_holder_option_7">history</option>
                <option value="place_holder_option_8">geography</option>
                <option value="place_holder_option_9">french</option>
                
              </select>
            </div>
            
          </div>

          <div className="mb-4">
            <label className="mb-2.5 block text-base text-black">
              <span>Class</span>
            </label>
            <select
              className="w-full appearance-none rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
              name="class"
              value={formData.degree}
              onChange={handleChange}
            >
              <option value="place_holder_option_1">LFSI1</option>
              <option value="place_holder_option_2">LFSI2</option>
              <option value="place_holder_option_3">LFSI3</option>
              <option value="place_holder_option_4">LITIC1</option>
              <option value="place_holder_option_5">LITIC2</option>
              <option value="place_holder_option_6">LITIC3</option>
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
    </div>
  );
}

export default RevisionPlanForm;

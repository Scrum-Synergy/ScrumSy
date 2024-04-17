import React, { useState } from 'react';

interface FormData {
  name: string;
  subject: string;
  phoneNumber: string;
  email: string; 
  info: string;
}

const RevisionPlanForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    subject: '',
    phoneNumber: '',
    email: '',
    info: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='w-[600px]'>
      <br />
      <div className="themeOne">
        <form 
          encType="multipart/form-data"
          action="https://formbold.com/s/9XqWr"
          method="POST"
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
              </select>
            </div>
            
          </div>
          <div className="mb-4">
            <label className="mb-2.5 block text-base text-black">
              <span>Class</span>
            </label>
            <input
              type="text"
              className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"   
              name="Class"
              placeholder="Enter Class"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          
          <div className="mb-4  ">
              <label className="mb-2.5 block text-base text-black">
                <span>Additional Info</span>
              </label>
              <input
                type= "text"
                className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                name="Additional Info"
                placeholder="Additional Info"
                value={formData.info}
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

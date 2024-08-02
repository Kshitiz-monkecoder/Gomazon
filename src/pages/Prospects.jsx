import React, { useState } from 'react';
import TableHOC from '../components/TableHOC';
import Navbar from '../components/Navbar';
import FullScreenModal from '../components/FullScreenModal';
import { FiUploadCloud } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';
import { FaRegFile } from 'react-icons/fa';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import User from '../assets/userpic.png';

const data = [
  { Name: 'Olivia Rhye', Address: '1234 NW Bobcat Lane, St. Robert, MO 65584-5678', Status: 'Active', 'Phone Number': '9808456789', 'Email address': 'olivia@untitledui.com' },
  { Name: 'Phoenix Baker', Address: '1234 NW Bobcat Lane, St. Robert, MO 65584-5678', Status: 'Active', 'Phone Number': '9808456789', 'Email address': 'phoenix@untitledui.com' },
  { Name: 'Lana Steiner', Address: '1234 NW Bobcat Lane, St. Robert, MO 65584-5678', Status: 'Inactive', 'Phone Number': '9808456789', 'Email address': 'lana@untitledui.com' },
  { Name: 'Demi Wilkinson', Address: '1234 NW Bobcat Lane, St. Robert, MO 65584-5678', Status: 'Active', 'Phone Number': '9808456789', 'Email address': 'demi@untitledui.com' },
  { Name: 'Candice Wu', Address: '1234 NW Bobcat Lane, St. Robert, MO 65584-5678', Status: 'Inactive', 'Phone Number': '9808456789', 'Email address': 'candice@untitledui.com' },
  { Name: 'Natali', Address: '1234 NW Bobcat Lane, St. Robert, MO 65584-5678', Status: 'Active', 'Phone Number': '9808456789', 'Email address': 'natali@untitledui.com' },
  { Name: 'Drew Cano', Address: '1234 NW Bobcat Lane, St. Robert, MO 65584-5678', Status: 'Active', 'Phone Number': '9808456789', 'Email address': 'drew@untitledui.com' },
  { Name: 'Olivia Rhye', Address: '1234 NW Bobcat Lane, St. Robert, MO 65584-5678', Status: 'Active', 'Phone Number': '9808456789', 'Email address': 'olivia@untitledui.com' },
  { Name: 'Phoenix Baker', Address: '1234 NW Bobcat Lane, St. Robert, MO 65584-5678', Status: 'Active', 'Phone Number': '9808456789', 'Email address': 'phoenix@untitledui.com' },
  { Name: 'Lana Steiner', Address: '1234 NW Bobcat Lane, St. Robert, MO 65584-5678', Status: 'Inactive', 'Phone Number': '9808456789', 'Email address': 'lana@untitledui.com' },
  { Name: 'Demi Wilkinson', Address: '1234 NW Bobcat Lane, St. Robert, MO 65584-5678', Status: 'Active', 'Phone Number': '9808456789', 'Email address': 'demi@untitledui.com' },
  { Name: 'Candice Wu', Address: '1234 NW Bobcat Lane, St. Robert, MO 65584-5678', Status: 'Inactive', 'Phone Number': '9808456789', 'Email address': 'candice@untitledui.com' },
  { Name: 'Natali', Address: '1234 NW Bobcat Lane, St. Robert, MO 65584-5678', Status: 'Active', 'Phone Number': '9808456789', 'Email address': 'natali@untitledui.com' },
  { Name: 'Drew Cano', Address: '1234 NW Bobcat Lane, St. Robert, MO 65584-5678', Status: 'Active', 'Phone Number': '9808456789', 'Email address': 'drew@untitledui.com' },
];

const columns = [
  {
    Header: 'Name',
    accessor: 'Name',
    Cell: ({ row }) => (
      <div className="flex items-center">
        <img src={User} className='h-8 w-8 rounded-full mr-4' alt="" />
        <div>
          <div className="font-medium">{row.original.Name}</div>
          <div className="text-sm text-gray-500">@olivia</div>
        </div>
      </div>
    ),
  },
  { Header: 'Address', accessor: 'Address' },
  { Header: 'Status', accessor: 'Status' },
  { Header: 'Phone Number', accessor: 'Phone Number' },
  { Header: 'Email address', accessor: 'Email address' },
  {
    Header: ' ',
    Cell: ({ row }) => (
      <div className="flex space-x-4 justify-center">
        <button className="text-gray-500 hover:text-gray-700">
          <AiOutlineEdit size={20} />
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <AiOutlineDelete size={20} />
        </button>
      </div>
    ),
  },
];

const Prospects = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isAddProspectModalOpen, setIsAddProspectModalOpen] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <>
      <main>
        <Navbar />
        <div className="px-8 py-6 flex items-center justify-between">
          <div className='flex items-center space-x-4'>
            <h1 className='text-2xl font-medium'>Prospects</h1>
            <p className='text-[#7F56D9] bg-purple-100 text-xs font-medium rounded-xl p-1'>100 users</p>
          </div>
          <div className='flex items-center space-x-5'>
            <button onClick={() => setIsUploadModalOpen(true)} className="text-white bg-[#7F56D9] rounded-lg px-4 py-2 text-base font-medium btn flex items-center text">
              <FiUploadCloud className="mr-2" size={22} /> Upload</button>
            <button onClick={() => setIsAddProspectModalOpen(true)} className="text-white bg-[#7F56D9] rounded-lg px-4 py-2 text-base font-medium btn flex items-center text">
              <GoPlus className="mr-2" size={22} /> Add Prospect</button>
          </div>
        </div>
        <div className="p-4">
          <TableHOC columns={columns} data={data} />
        </div>
      </main>

      <FullScreenModal
        isOpen={isUploadModalOpen}
        onRequestClose={() => setIsUploadModalOpen(false)}
      >
        <h2 className="text-xl font-semibold mb-2">Upload and attach files</h2>
        <p className='text-gray-400 text-sm'>Choose from a variety of file types to attach to the task.</p>
        <div className="mt-6 border-2 border-dashed rounded-lg border-gray-300 p-6 flex flex-col items-center">
          <FaRegFile size={48} className="text-gray-400" />
          <p className="mt-4 text-gray-400">Drag your documents, photos, or any file here</p>
          <span className="text-gray-400">or</span>
          <label htmlFor="fileInput" className="cursor-pointer text-[#7F56D9] mt-2">
            Click to upload
          </label>
          <p className="text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        {file && (
          <div className="mt-4 text-sm">
            <span className="font-medium">Selected file:</span> {file.name}
          </div>
        )}
        <button className='bg-[#7F56D9] text-white px-4 py-2 rounded-lg mt-6 text-base font-medium btn flex items-center'>Submit</button>
      </FullScreenModal>

      <FullScreenModal
        isOpen={isAddProspectModalOpen}
        onRequestClose={() => setIsAddProspectModalOpen(false)}
      >
        <h2 className="text-xl font-semibold mb-2">Add Prospect</h2>
        <p className='text-gray-400 text-sm'>Fill in the details to add a new prospect.</p>
        <div className='mt-6 space-y-4'>
          <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Name" />
          <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Address" />
          <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Phone Number" />
          <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Email Address" />
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <button className='bg-[#7F56D9] text-white px-4 py-2 rounded-lg mt-6 text-base font-medium btn flex items-center'>Submit</button>
      </FullScreenModal>
    </>
  );
};

export default Prospects;

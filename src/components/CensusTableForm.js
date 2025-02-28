import React, { useState, useEffect } from "react";
import "./CensusTableForm.css";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import {getLoggedInUserEmail} from './Register';
import { useNavigate } from "react-router";
// import Thankyou from "./Thankyou";
// import {email} from "./Register";
const CensusTableForm = () => {
    const navigate = useNavigate();
  const [isAbroad, setIsAbroad] = useState(null);
  const [formData, setFormData] = useState([
    { name: "", relationwithhead: "", education: "", occupation: "" },
  ]);
  const [abroadData, setAbroadData] = useState([
    { name: "", relationwithhead: "", education: "", country: "", occupation: "" },
  ]);
  
  const[email,setEmail]=useState(null);
      useEffect(() => {
        const fetchEmail = async () => {
          const email = await getLoggedInUserEmail(); // Get the email
          setEmail(email); // Set the email in state
        };
    
        fetchEmail();
      }, []);
  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("censusTableData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Handle input changes for local family members
  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedData = [...formData];
    updatedData[index][name] = value;
    setFormData(updatedData);
  };

  // Handle input changes for abroad family members
  const handleAbroadChange = (index, event) => {
    const { name, value } = event.target;
    const updatedData = [...abroadData];
    updatedData[index][name] = value;
    setAbroadData(updatedData);
  };

  // Add a new row for local family members
  const addRow = () => {
    setFormData([
      ...formData,
      { name: "", relationwithhead: "", education: "", occupation: "" },
    ]);
  };

  // Add a new row for abroad family members
  const addAbroadRow = () => {
    setAbroadData([
      ...abroadData,
      { name: "", relationwithhead: "", education: "", country: "", occupation: "" },
    ]);
  };

  // Save data to Firebase Firestore
  const handleSave = async () => {
    if (!email) {
      alert("You must be logged in to save data.");
      return;
    }
  
    try {
      // Combine local and abroad data
      const dataToSave = {
        localFamilyMembers: formData,
        abroadFamilyMembers: isAbroad ? abroadData : [],
        timestamp: new Date(),
        email: email, // Include the logged-in user's email
      };
  
      // Add data to Firestore
      const docRef = await addDoc(collection(db, "censusData"), dataToSave);
  
      // Save data to localStorage
      localStorage.setItem("censusTableData", JSON.stringify(formData));
  
      alert(`Data saved successfully with ID: ${docRef.id}`);
      navigate('/thankyou');
    } catch (error) {
      console.error("Error saving data to Firestore: ", error);
      alert("An error occurred while saving data. Please try again.");
    }
  };

  // Download data as JSON
  const handleDownloadJSON = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "census_data.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="census-form-container">
      {/* {email && <p>Logged in as: {email}</p>} */}
      {/* Your form goes here */}
      <h1 className="form-title">Census Data Collection Form</h1>
      <div className="form-section">
        <form className="form-grid">
          {/* Form fields for province, district, etc. */}
          <div className="form-group">
            <label>Province:</label>
            <select name="province" className="form-input">
              <option value="">Select Province</option>
              <option value="bagmati">Bagmati</option>
              <option value="koshi">Koshi</option>
              <option value="gandaki">Gandaki</option>
              <option value="karnali">Karnali</option>
              <option value="lumbini">Lumbini</option>
              <option value="madhesh">Madhesh</option>
              <option value="sudarpaschim">Sudarpaschim</option>
            </select>
          </div>

          <div className="form-group">
            <label>District:</label>
            <select name="district" className="form-input">
              <option value="">Select District</option>
              <option value="Bhojpur">Bhojpur</option>
              <option value="Kathmandu">Kathmandu</option>
              <option value="Lalitpur">Lalitpur</option>
              <option value="Bhaktapur">Bhaktapur</option>
            </select>
          </div>

          <div className="form-group">
            <label>Metro/Sub-Metro:</label>
            <input type="text" className="form-input" />
          </div>

          <div className="form-group">
            <label>Ward no.:</label>
            <input type="number" className="form-input" />
          </div>

          <div className="form-group">
            <label>Types of family:</label>
            <select className="form-input">
              <option value="">Select family</option>
              <option value="Nuclear">Nuclear</option>
              <option value="Joint">Joint</option>
            </select>
          </div>
        </form>
      </div>

      {/* Table for local family members */}
      <div className="table-section">
        <table className="census-table">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Name of the family members</th>
              <th>Relation with the head</th>
              <th>Education</th>
              <th>Occupation</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={row.name}
                    onChange={(event) => handleChange(index, event)}
                    className="table-input"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="relationwithhead"
                    value={row.relationwithhead}
                    onChange={(event) => handleChange(index, event)}
                    className="table-input"
                  />
                </td>
                <td>
                  <select
                    name="education"
                    value={row.education}
                    onChange={(event) => handleChange(index, event)}
                    className="table-input"
                  >
                    <option value="">Select</option>
                    <option value="SEE">SEE</option>
                    <option value="+2">+2</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="Masters">Masters</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    name="occupation"
                    value={row.occupation}
                    onChange={(event) => handleChange(index, event)}
                    className="table-input"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={addRow} className="btn-add">
          ➕ Add Row
        </button>
      </div>

      {/* Additional form fields */}
      <div className="form-section">
        <div className="form-group">
          <label>Annual Income:</label>
          <select className="form-input">
            <option value="">Select</option>
            <option value="500000">Up to 500,000</option>
            <option value="1000000">Up to 1,000,000</option>
            <option value="1500000">Up to 1,500,000</option>
          </select>
        </div>

        <div className="form-group">
          <label>Type of house:</label>
          <select className="form-input">
            <option value="">Select house</option>
            <option value="Traditional">Traditional</option>
            <option value="Modern">Modern</option>
          </select>
        </div>

        <div className="form-group">
          <label>Family members abroad?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="isAbroad"
                value="yes"
                onChange={() => setIsAbroad(true)}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="isAbroad"
                value="no"
                onChange={() => setIsAbroad(false)}
              />{" "}
              No
            </label>
          </div>
        </div>

        {/* Table for abroad family members */}
        {isAbroad && (
          <div className="abroad-section">
            <h3>Family Member Details (Abroad)</h3>
            <table className="abroad-table">
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Name</th>
                  <th>Relation with the head</th>
                  <th>Education</th>
                  <th>Country</th>
                  <th>Occupation</th>
                </tr>
              </thead>
              <tbody>
                {abroadData.map((row, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        type="text"
                        name="name"
                        value={row.name}
                        onChange={(event) => handleAbroadChange(index, event)}
                        className="table-input"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="relationwithhead"
                        value={row.relationwithhead}
                        onChange={(event) => handleAbroadChange(index, event)}
                        className="table-input"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="education"
                        value={row.education}
                        onChange={(event) => handleAbroadChange(index, event)}
                        className="table-input"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="country"
                        value={row.country}
                        onChange={(event) => handleAbroadChange(index, event)}
                        className="table-input"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="occupation"
                        value={row.occupation}
                        onChange={(event) => handleAbroadChange(index, event)}
                        className="table-input"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={addAbroadRow} className="btn-add">
              ➕ Add Row (Abroad)
            </button>
          </div>
        )}

        <div className="form-group">
          <label>Religion:</label>
          <select className="form-input">
            <option value="">Select religion</option>
            <option value="hindu">Hindu</option>
            <option value="budhist">Buddhist</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="form-group">
          <label>Language:</label>
          <select className="form-input">
            <option value="">Select language</option>
            <option value="nepali">Nepali</option>
            <option value="madhesi">Madhesi</option>
            <option value="newari">Newari</option>
            <option value="others">Others</option>
          </select>
        </div>
      </div>

      {/* Save and Download Buttons */}
      <div className="button-group">
        <button onClick={handleSave} className="btn-save">
          💾 Save Data
        </button>
        <button onClick={handleDownloadJSON} className="btn-download">
          📥 Download JSON
        </button>
      </div>
    </div>
  );
};

export default CensusTableForm;
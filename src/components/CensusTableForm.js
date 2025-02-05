import React, { useState,useEffect } from "react";
import "./Styles.css";
const CensusTableForm = () => {
  // Step 1: Define state to store form data
  const [formData, setFormData] = useState([
    { name: "", age: "", gender: "", city: "" },
  ]);
useEffect(() => {
    const savedData = localStorage.getItem("censusTableData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Step 2: Handle changes in input fields
  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedData = [...formData];
    updatedData[index][name] = value;
    setFormData(updatedData);
  };

  // Step 3: Add a new row
  const addRow = () => {
    setFormData([...formData, { name: "", age: "", gender: "", city: "" }]);
  };

  // Step 4: Save data (for now, just log it)
  const handleSave = () => {
    localStorage.setItem("censusTableData", JSON.stringify(formData));
    alert("Data saved! Check console for details.");
  };
  const handleDownloadJSON = () => {
    const dataStr = JSON.stringify(formData, null, 2); // Convert formData to JSON string
    const blob = new Blob([dataStr], { type: "application/json" }); // Create a Blob object
    const url = URL.createObjectURL(blob); // Generate a download URL

    // Create a temporary <a> element for downloading
    const a = document.createElement("a");
    a.href = url;
    a.download = "census_data.json"; // File name
    document.body.appendChild(a);
    a.click(); // Simulate click to download the file
    document.body.removeChild(a); // Clean up
    URL.revokeObjectURL(url); // Free memory
  };
  return (
    <div>
      <div className="container">

    
<form action="">

<label>Province:</label>
<select name="province" id="">
<option value="selected">Select Province</option>
<option value="bagmati">Bagmati</option>
<option value="koshi">Koshi</option>
<option value="gandaki">Gandaki</option>
<option value="karnali">Karnali</option>
<option value="lumbini">Lumbini</option>
<option value="madhesh">Madhesh</option>
<option value="koshi">Sudarpaschim</option>
</select>



  <label htmlFor="">District:</label>
  <select name="district" id="">
    <option value="selected">Select District</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>
    <option value="Bhojpur">Bhojpur</option>

  </select>


<label htmlFor="">Metro/Sub-Metro</label>
<input type="text" />
<label htmlFor="">Ward no.:</label>
<input type="number" />
<label htmlFor="">Types of family:</label>
<select name="" id="">
<option value="selected">Select family</option>
<option value="">Nuclear</option>
<option value="">Joint</option>

</select>
</form>
</div>
      <table border="1">
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
                <td>1</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={row.name}
                  onChange={(event) => handleChange(index, event)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="relationwithhead"
                  value={row.relationwithhead}
                  onChange={(event) => handleChange(index, event)}
                />
              </td>
              <td>
                <select
                  name="education"
                  value={row.education}
                  onChange={(event) => handleChange(index, event)}
                >
                  <option value="">Select</option>
                  <option>SEE</option>
                  <option>+2</option>
                  <option>Bachelors</option>
                  <option>Masters</option>

                </select>
              </td>
              <td>
                <input
                  type="text"
                  name="occupation"
                  value={row.city}
                  onChange={(event) => handleChange(index, event)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button onClick={addRow}>➕ Add Row</button>
      <button onClick={handleSave}>💾 Save Data</button>
      <button onClick={handleDownloadJSON}>📥 Download JSON</button>
    </div>
  );
};

export default CensusTableForm;

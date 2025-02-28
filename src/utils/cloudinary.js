import axios from "axios";

console.log("Cloud Name:", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME); // Log the cloud name
console.log("API Key:", process.env.REACT_APP_CLOUDINARY_API_KEY); // Log the API key
// Function to upload an image to Cloudinary
export const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", "citizenshippicture"); // Replace with your upload preset
  console.log("Cloud Name:", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME); // Log the cloud name
  console.log("API Key:", process.env.REACT_APP_CLOUDINARY_API_KEY); // Log the API key
  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData
    );
    console.log("Uploaded Image URL:", response.data.secure_url);
    console.log("Public ID:", response.data.public_id);
    return response.data.public_id; // Return the public ID for polling
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

// Function to check if an image has the "verified" tag
export const checkVerificationStatus = async (publicId) => {
  
    try {
      console.log("Fetching details for publicId:", publicId); // Log the publicId
      const response = await axios.get(
        `/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/resources/image/upload/${publicId}`,
        {
          auth: {
            username: process.env.REACT_APP_CLOUDINARY_API_KEY,
            password: process.env.REACT_APP_CLOUDINARY_API_SECRET,
          },
        }
      );
      console.log("API Response:", response); // Log the full response
      const tags = response.data.tags || [];
      return tags.includes("verified");
    } catch (error) {
      console.error("Error fetching image details:", error);
      return false;
    }
  };

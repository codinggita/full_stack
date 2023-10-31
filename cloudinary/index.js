const objects = [
  {
    name: "user1",
    age: "10",
    image: "./images/one.png",
    video: "./images/ayee.mp4",
  },
  {
    name: "user2",
    age: "20",
    image: "./images/one.png",
    video: "./images/ayee.mp4",
  },
];

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "cloud_name",
  api_key: "api_key",
  api_secret: "api_secret",
});

const uploadImageToCloudinary = async (imagePath) => {
  try {
    const result = await cloudinary.uploader.upload(imagePath);
    return result.secure_url;
  } catch (error) {
    console.error(`Error uploading image to Cloudinary: ${error.message}`);
    return null;
  }
};

const uploadVideoToCloudinary = async (videoPath) => {
  try {
    const result = await cloudinary.uploader.upload(videoPath, {
      resource_type: "video",
    });
    return result.secure_url;
  } catch (error) {
    console.error(`Error uploading video to Cloudinary: ${error.message}`);
    return null;
  }
};

const newArray = objects.map(async (object) => {
  const imageURL = await uploadImageToCloudinary(object.image);
  const videoURL = await uploadVideoToCloudinary(object.video);
  return {
    ...object,
    image: imageURL,
    video: videoURL,
  };
});

Promise.all(newArray)
  .then((resultArray) => {
    console.log(resultArray);
  })
  .catch((error) => {
    console.error(`Error processing objects: ${error.message}`);
  });

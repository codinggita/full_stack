// Why Avoid Deploying Videos/Images with Code in Production?

// Why Choose Cloudinary?

// Connecting with Cloudinary
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "djazeogm8",
  api_key: "189816349827363",
  api_secret: "sLus-7Ll1aw-2azbFS_qJWqe0KE",
});

const react = "./images/react.png";
const video = "./videos/video.mp4";
// function to upload image , and return image url

const uploadImage = async (react) => {
  try {
    const results = await cloudinary.uploader.upload(react);
    console.log("Image: ", results);
    return results.secure_url;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const uploadVideo = async (video) => {
  try {
    const results = await cloudinary.uploader.upload(video, {
      resource_type: "video",
    });
    // console.log("Video: ", results.secure_url);
    return results.secure_url;
  } catch (error) {
    console.error(error);
    return null;
  }
};
// uploadImage(react);
// uploadVideo(video);
// Code for Javascript (React, Node.js, HTML/CSS)

// Uploading Images & Videos

// Real-Life Scenario
const objects = [
  {
    name: "user1",
    age: "10",
    image: "./images/react.png",
    video: "./videos/video.mp4",
  },
  {
    name: "user2",
    age: "20",
    image: "./images/car_seat.png",
    video: "./videos/video.mp4",
  },
];

// Efficiently Uploading Hundreds of Images and Videos with JavaScript code, no manual uploading

// map over object
// replace path url with https urls

const newArray = objects.map(async (obj) => {
  const imgURL = await uploadImage(obj.image);
  const videoURL = await uploadVideo(obj.video);
  return {
    ...obj,
    image: imgURL,
    video: videoURL,
  };
});

// console.log(newArray);
// Integrating Cloudinary into Your Project

Promise.all(newArray)
  .then((fialArray) => console.log(fialArray))
  .catch((error) => {
    console.log(error);
  });

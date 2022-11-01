const raw = JSON.stringify({
  user_app_id: {
    user_id: "clarifai",
    app_id: "main",
  },
  inputs: [
    {
      data: {
        image: {
          url: { IMAGE_URL },
        },
      },
    },
  ],
});

const requestOptions = {
  method: "POST",
  headers: {
    Accept: "application/json",
    Authorization: "Key " + { YOUR_PERSONAL_TOKEN },
  },
  body: raw,
};

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id

fetch(
  `https://api.clarifai.com/v2/models/general-image-recognition/versions/aa7f35c01e0642fda5cf400f543e7c40/outputs`,
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

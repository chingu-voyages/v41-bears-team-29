import axios from "axios";

export default class Clarifai {
  #USER_ID;
  #PAT;
  #APP_ID;
  #config;

  /**
   * Clarifai is a class to get AI predictions
   * @param {string} userId Clarifai portal user id
   * @param {string} pat Clarifai portal Personal Access Token, Check [`Clarifai Docs`](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens)
   * @param {string} appId Clarifai portal app id
   */
  constructor(userId, pat, appId) {
    this.#USER_ID = userId;
    this.#PAT = pat;
    this.#APP_ID = appId;
    this.#config = {
      headers: {
        "Content-Type": "text/json",
        Authorization: `Key ${this.#PAT}`,
      },
    };
  }

  /**
   * To get an Ai predictions from image url
   * @param {string} imageUrl url of the image
   * @param {string} modelId Clarifai model id, default is 'general-image-recognition', check [`Clarifai Models`]('https://clarifai.com/clarifai/models')
   * @param {string} modelVersionId Clarifai model version id, default is 'aa7f35c01e0642fda5cf400f543e7c40'
   * @return {Promise<string>} a caption to describe the image based on the image url
   */
  predictByUrl = async (
    imageUrl,
    modelId = "91fbf60c37ec4e22a53ad82cfda631ba", //
    modelVersionId = "4ed6524163274eb0bb5533ea1919a6e0" //our own version
    // modelVersionId = 'aa7f35c01e0642fda5cf400f543e7c40'
  ) => {
    const response = await axios.post(
      `https://api.clarifai.com/v2/models/${modelId}/versions/${modelVersionId}/outputs`,
      {
        user_app_id: {
          user_id: this.#USER_ID,
          app_id: this.#APP_ID,
        },
        inputs: [{ data: { image: { url: imageUrl } } }],
      },
      this.#config
    );
    return response.data.outputs[0].data;
  };

  /**
   * To get an AI predictions from imageBytes
   * @param {string} imageBytes string of image bytes, make sure to convert image to base64 string first
   * @param {string} modelId Clarifai model id, default is 'general-image-recognition', check [`Clarifai Models`]('https://clarifai.com/clarifai/models')
   * @param {string} modelVersionId Clarifai model version id, default is 'aa7f35c01e0642fda5cf400f543e7c40'
   * @return {Promise<string>} a caption based on the image url
   */
  predictByBytes = async (
    imageBytes,
    modelId = "general-image-recognition",
    modelVersionId = "aa7f35c01e0642fda5cf400f543e7c40"
  ) => {
    const response = await axios.post(
      `https://api.clarifai.com/v2/models/${modelId}/versions/${modelVersionId}/outputs`,
      {
        user_app_id: {
          user_id: this.#USER_ID,
          app_id: this.#APP_ID,
        },
        inputs: [{ data: { image: { base64: imageBytes } } }],
      },
      this.#config
    );
    return response.data.outputs[0].data;
  };
}

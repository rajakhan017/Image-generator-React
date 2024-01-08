# AI Image Generator App
This React application leverages Hugging Face's model, "prompthero/openjourney-v4," to generate images based on user-inputted text. The app provides a simple interface for users to input text, generate images, and download the resulting images. Below is a breakdown of the main components and functionalities:
## Components:
### 1. Text Input
- Users can input text in the provided textarea.
### 2. Generate Button
- Clicking the "Generate" button triggers the image generation process.
### 3. Download Button
- Once an image is generated, users can download it using the "Download Image" button.
### 4. Loading Indicator
- A loading message indicates when the app is fetching data from the Hugging Face API.
### 5. Image Display
- The generated image is displayed in the UI upon successful generation.
## Functionality:
### 1. Image Generation
- Text input is sent to the Hugging Face API using Axios to generate an image.
### 2. Image Download
- Users can download the generated image by clicking the "Download Image" button.
### 3. Error Handling
- In case of API errors, an alert is displayed, and details are logged to the console.
### 4. Enter Key Support
- Users can press the "Enter" key to trigger image generation.
## Usage:
1. Enter text in the textarea.
2. Click "Generate" to create an AI-generated image.
3. Download the image using the "Download Image" button.
**Note:** Ensure to handle any additional logic after image generation inside the `query` function.
Feel free to customize and enhance this React app for your specific use case!

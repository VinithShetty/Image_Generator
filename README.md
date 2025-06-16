# AI Image Generator

A web-based application that generates images using AI models from Hugging Face. This project utilizes Stable Diffusion 2.1 to create high-quality images based on user prompts.

## Features

- Generate multiple images from text prompts
- Modern and responsive UI
- Real-time loading state
- Error handling and display
- Image download functionality
- Multiple image generation per prompt

## Getting Started

1. Clone the repository
2. Replace the API key in `js/main.js` with your own Hugging Face API key
3. Open `index.html` in a web browser

### Prerequisites

- Hugging Face API key
- Modern web browser
- Internet connection

### API Key Setup

1. Go to [Hugging Face](https://huggingface.co/)
2. Sign up or log in
3. Go to your account settings
4. Navigate to "Access Tokens"
5. Generate a new token
6. Replace the API key in `js/main.js` with your token

## Usage

1. Enter your desired prompt in the text input
2. Click the "Generate" button
3. Wait for the images to be generated
4. Click on any generated image to download it

## Project Structure

```
Image Generator Project/
├── assets/
│   └── logo.png
├── js/
│   └── main.js
├── styles/
│   └── style.css
├── index.html
└── README.md
```

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Hugging Face API
- Stable Diffusion 2.1

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- Hugging Face for providing the Stable Diffusion model
- Open source community for inspiration and resources

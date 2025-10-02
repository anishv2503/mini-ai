const chatService = require('../services/chatService');

exports.sendMessage = async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required!' });
    }

    const response = await chatService.getChatGPTResponse(prompt);
    res.json({ response });
  } catch (error) {
    console.error('Error in controller:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

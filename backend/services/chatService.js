const axios = require('axios');

exports.getChatGPTResponse = async (prompt) => {
  const apiKey = process.env.OPENROUTER_API_KEY;
  const url = 'https://openrouter.ai/api/v1/chat/completions';
  try {
    const response = await axios.post(
      url,
      {
        model: 'openai/gpt-4o-mini', // Example free model, or 'openchat/openchat-7b'
        messages: [{ role: 'user', content: prompt }]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('OpenRouter API error:', error.response?.data || error.message);
    throw new Error(error.response?.data?.error?.message || 'Unable to fetch response from OpenRouter');
  }
};
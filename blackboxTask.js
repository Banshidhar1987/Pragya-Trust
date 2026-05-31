const fetch = require('node-fetch');

const createBlackboxTask = async () => {
  try {
    const response = await fetch('https://cloud.blackbox.ai/api/tasks', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer bb_YOUR_API_KEY', // Replace with your actual API key
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: 'Add Stripe Payment Integration',
        repoUrl: 'https://github.com/banshidharsahoonet-lab/PragyaTrustNGO.git', // Replace with your actual repository URL
        multiLaunch: true,
        selectedAgents: [
          { agent: 'blackbox', model: 'blackboxai/blackbox-pro' },
          { agent: 'claude', model: 'blackboxai/anthropic/claude-sonnet-4.5' },
          { agent: 'gemini', model: 'gemini-2.5-pro' }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Task created successfully:', data);
  } catch (error) {
    console.error('Failed to create task:', error);
  }
};

createBlackboxTask();
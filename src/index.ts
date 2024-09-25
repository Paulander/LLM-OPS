import * as dotenv from 'dotenv';
import OpenAI from 'openai';

// Load environment variables from .env file
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });


async function generateEmbedding(text: string): Promise<number[]> {
try {
    const response = await openai.embeddings.create({
    model: 'text-embedding-ada-002',
    input: text,
    });

    const embedding = response.data[0].embedding;
    return embedding;
} catch (error) {
    console.error('Error generating embedding:', error);
    throw error;
}
}

async function main() {
    const sampleText = 'Hello, this is a test.';
    const embedding = await generateEmbedding(sampleText);
    console.log('Embedding:', embedding);
  }
  
main();
  
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

//Main function. For now just dump vector embeddings to console. 
async function main() {
    const male = 'King, Man, Boy, Prince';
    const embedding_male = await generateEmbedding(male);

    const female = 'Queen, Woman, Girl, Princess';
    const embedding_female = await generateEmbedding(female);

    console.log('Embedding male:', embedding_male);
    console.log('\n \n Embedding female:', embedding_female)
  }
  
main();
  
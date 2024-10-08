import { openai } from './openaiClient';

export async function generateEmbedding(text: string): Promise<number[]> {
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
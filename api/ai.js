// CareerCompare AI Backend
// File: api/ai.js

export default async function handler(req, res) {
    // -----------------------------
    // CORS
    // -----------------------------
    const allowedOrigin = process.env.ALLOWED_ORIGIN || "*";

    res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Browser CORS preflight
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    // Only allow POST
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }

    // -----------------------------
    // Check API key
    // -----------------------------
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
        console.error("OPENROUTER_API_KEY is missing.");

        return res.status(500).json({
            error: "AI backend is not configured yet."
        });
    }

    try {
        // -----------------------------
        // Read request
        // -----------------------------
        const body = req.body || {};

        const message = typeof body.message === "string"
            ? body.message.trim()
            : "";

        const conversation = Array.isArray(body.conversation)
            ? body.conversation
            : [];

        const selectedCareers = Array.isArray(body.selectedCareers)
            ? body.selectedCareers
            : [];

        if (!message) {
            return res.status(400).json({
                error: "Please enter a question."
            });
        }

        // -----------------------------
        // Keep requests reasonably small
        // -----------------------------
        const cleanConversation = conversation
            .slice(-10)
            .filter(item =>
                item &&
                (item.role === "user" || item.role === "assistant") &&
                typeof item.content === "string"
            )
            .map(item => ({
                role: item.role,
                content: item.content.slice(0, 4000)
            }));

        const cleanCareers = selectedCareers
            .slice(0, 5)
            .map(career => ({
                name: String(career.name || "").slice(0, 150),
                category: String(career.category || "").slice(0, 100),
                salary: Number(career.salary) || 0
            }));

        // -----------------------------
        // CareerCompare AI instructions
        // -----------------------------
        const systemPrompt = `
You are CareerCompare AI, the career advisor built into the CareerCompare website.

Your job is to help users understand careers, salaries, education requirements,
career paths, job outlook, skills, work-life balance, and career comparisons.

IMPORTANT RULES:

1. Be friendly, helpful, and easy to understand.
2. Give practical answers instead of huge walls of text.
3. When comparing careers, clearly explain the biggest differences.
4. Never pretend a salary number is exact if it is an estimate.
5. CareerCompare may contain built-in salary estimates. Treat those as estimates.
6. Do not invent statistics and present them as official facts.
7. If the user asks for current official salary information, explain that
   official figures should come from reliable sources such as the U.S. Bureau
   of Labor Statistics.
8. Do not claim you personally verified a website unless the application
   actually provides that information.
9. If selected careers are provided below, use them when relevant.
10. If the user asks something unrelated to careers, you can still answer
    briefly, but guide the conversation back toward careers when appropriate.

SELECTED CAREERS:
${JSON.stringify(cleanCareers, null, 2)}
`;

        // -----------------------------
        // Build messages
        // -----------------------------
        const messages = [
            {
                role: "system",
                content: systemPrompt
            },
            ...cleanConversation,
            {
                role: "user",
                content: message.slice(0, 6000)
            }
        ];

        // -----------------------------
        // Ask OpenRouter
        // -----------------------------
        const response = await fetch(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                method: "POST",

                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                    "Content-Type": "application/json",

                    // Optional OpenRouter metadata
                    "HTTP-Referer":
                        process.env.SITE_URL || "https://careercompare.vercel.app",

                    "X-Title": "CareerCompare"
                },

                body: JSON.stringify({
                    model: "openrouter/auto",
                    messages: messages,

                    // Prevent ridiculously long answers
                    max_tokens: 700,

                    temperature: 0.7
                })
            }
        );

        // -----------------------------
        // Read OpenRouter response
        // -----------------------------
        const data = await response.json();

        if (!response.ok) {
            console.error("OpenRouter error:", data);

            return res.status(502).json({
                error: "The AI service returned an error.",
                details: data?.error?.message || "Unknown OpenRouter error"
            });
        }

        const reply =
            data?.choices?.[0]?.message?.content;

        if (!reply) {
            console.error("Unexpected OpenRouter response:", data);

            return res.status(502).json({
                error: "The AI returned an empty response."
            });
        }

        // -----------------------------
        // Send answer back to website
        // -----------------------------
        return res.status(200).json({
            reply: reply
        });

    } catch (error) {
        console.error("AI backend error:", error);

        return res.status(500).json({
            error: "Something went wrong while contacting the AI."
        });
    }
}

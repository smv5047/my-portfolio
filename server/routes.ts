import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // In a real application, you would send an email or store the message
    // For now, we'll just simulate a delay and return success
    await new Promise((resolve) => setTimeout(resolve, 1000));

    res.json({ message: "Message sent successfully" });
  });

  const httpServer = createServer(app);
  return httpServer;
}

'use client'
import styles from './ChatbotEnhanced.module.css'
import { useState, useRef, useEffect } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import { BsThreeDotsVertical } from 'react-icons/bs'

const ChatbotEnhanced = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            content: '👋 Hello! I\'m your Door to Door AI assistant. I can help you with:\n\n• Information about our services\n• Technical details about our webapp\n• Project inquiries\n• Team information\n• General questions\n\nWhat would you like to know?',
            timestamp: new Date().toLocaleTimeString()
        }
    ])
    const [inputMessage, setInputMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [genAI, setGenAI] = useState(null)
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    useEffect(() => {
        // Initialize Gemini AI
        const initializeAI = async () => {
            try {
                const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY
                if (apiKey && apiKey !== 'your_gemini_api_key_here' && apiKey.length > 10) {
                    const ai = new GoogleGenerativeAI(apiKey)
                    setGenAI(ai)
                }
            } catch (error) {
                console.error('Error initializing AI:', error)
            }
        }
        initializeAI()
    }, [])

    const onPointContext = `
    You are an AI assistant for Door to Door, a trusted China sourcing and manufacturing partner. Here is accurate information about Door to Door:

    COMPANY OVERVIEW:
    Door to Door is your strategic partner for  sourcing from China, managed by industry experts. We connect businesses worldwide with China’s vast manufacturing capabilities, ensuring quality, efficiency, and peace of mind. Founded by experts driven by innovation and efficiency, Door to Door is a leader in China sourcing. We manage every step of your product’s journey, from manufacturer selection to delivery. Our mission is to empower businesses of all sizes with  access to China’s manufacturing expertise, helping them bring product visions to life efficiently and cost-effectively. Our commitment is your success. We treat your products with care and dedication, understanding the vision and hard work behind every product.

    CONTACT INFORMATION:
    Our main email is debra.holt@example.com. You can call us at (307) 555-0133 or 0192584341342. Our address is 3891 Ranchview Dr. Richardson. If a user needs to speak to a real person or has a question only a human can answer, offer the email address and suggest they contact the team directly.

    MAIN SITE NAVIGATION:
    The main pages on our website are Home, About, Calculator, Products (with categories from Sanity CMS), Blog, Services (Express Freight Solutions, Rapid Delivery Services, Speedy Haulage, Reliable Transporters, Swift Ship Solutions), Contact, FAQ, Testimonials, and Team. You can help users find these pages or explain what they contain.

    CMS & REAL-TIME DATA:
    Product categories and product data are fetched in real time from Sanity CMS, so you can answer questions about current products and categories.

    CORE SERVICES:
    We carefully select top Chinese manufacturers tailored to your product needs. Our China-based team monitors manufacturing for quality and timeliness. We perform rigorous quality checks to ensure your products meet the highest standards before leaving the factory. We provide fast and reliable logistics solutions, including real-time tracking and on-time delivery. Our team is available 24/7 to answer your questions and resolve issues. From concept to delivery, we manage every aspect of your manufacturing journey.

    WHAT SETS US APART:
    We have comprehensive expertise across industries, direct manufacturing connections (no middlemen), an innovation-focused approach, clear communication and full visibility into costs and processes, rigorous quality assurance, a strong presence in China with a global client base, and personalized service with dedicated account managers and regular progress updates.

    TYPICAL CLIENTS:
    We work with startups, SMEs, and global corporations seeking reliable China sourcing, as well as businesses needing custom manufacturing, quality control, and logistics.

    RESPONSE GUIDELINES:
    Only answer questions about Door to Door’s sourcing, manufacturing, logistics, and related services. If asked about web development, SEO, or unrelated digital services, clarify that Door to Door specializes in China sourcing and manufacturing solutions. Be helpful, professional, and concise. Use a friendly, expert tone. If asked about pricing, guide users to contact the team directly. If a user needs a real person, offer the contact email and suggest reaching out directly. Always reply in clear, simple sentences as if you are speaking directly to the user. Do not use asterisks, bullet points, or markdown formatting unless the user requests a list. Focus on solving the user’s query in plain English.
    `

    const quickReplies = [
        "What services do you offer?",
        "Tell me about your team",
        "How can I contact you?",
        "What technologies do you use?",
        "Show me your portfolio"
    ]

    const handleSendMessage = async () => {
        if (!inputMessage.trim() || isLoading) return

        const userMessage = {
            type: 'user',
            content: inputMessage,
            timestamp: new Date().toLocaleTimeString()
        }

        setMessages(prev => [...prev, userMessage])
        setInputMessage('')
        setIsLoading(true)

        try {
            if (genAI) {
                // Try different models in order of preference
                const models = ["gemini-1.5-pro", "gemini-1.5-flash", "gemini-pro"]
                let model = null
                let result = null
                for (const modelName of models) {
                    try {
                        model = genAI.getGenerativeModel({ model: modelName })
                        const prompt = `${onPointContext}
                        User question: ${inputMessage}
                        Please provide a helpful, professional response about Door to Door's services, webapp, or related topics. Use clear, direct, conversational English. Do not use asterisks, bullet points, or markdown formatting unless the user requests a list. Focus on solving the user’s query in plain English.`
                        result = await model.generateContent(prompt)
                        break
                    } catch (modelError) {
                        continue
                    }
                }
                if (result) {
                    const response = await result.response
                    const text = response.text()
                    const botMessage = {
                        type: 'bot',
                        content: text,
                        timestamp: new Date().toLocaleTimeString()
                    }
                    setMessages(prev => [...prev, botMessage])
                } else {
                    throw new Error('All available models failed')
                }
            } else {
                const botMessage = {
                    type: 'bot',
                    content: '🔧 I\'m having trouble connecting to my AI service right now. This might be because the API key needs to be configured. Please contact our support team directly for assistance, or try again later.',
                    timestamp: new Date().toLocaleTimeString()
                }
                setMessages(prev => [...prev, botMessage])
            }
        } catch (error) {
            const errorMessage = {
                type: 'bot',
                content: `❌ I encountered an error while processing your request: ${error.message}. Please try again or contact our support team for assistance.`,
                timestamp: new Date().toLocaleTimeString()
            }
            setMessages(prev => [...prev, errorMessage])
        } finally {
            setIsLoading(false)
        }
    }

    const handleQuickReply = (reply) => {
        setInputMessage(reply)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    const toggleChat = () => {
        setIsOpen(!isOpen)
    }

    const clearChat = () => {
        setMessages([
            {
                type: 'bot',
                content: '👋 Hello! I\'m your Door to Door AI assistant. I can help you with:\n\n• Information about our services\n• Technical details about our webapp\n• Project inquiries\n• Team information\n• General questions\n\nWhat would you like to know?',
                timestamp: new Date().toLocaleTimeString()
            }
        ])
    }

    return (
        <>
            {/* Sticky Chatbot Button */}
            <div className={styles['onpointChatbot-stickyButton']} onClick={toggleChat} title="Chat with Door to Door Assistant">
                {isOpen ? (
                    <FaTimes style={{ fontSize: 24, color: '#fff' }} />
                ) : (
                    <FaComments style={{ fontSize: 24, color: '#fff' }} />
                )}
                <div className={styles['onpointChatbot-pulse']}></div>
            </div>
            {/* Chat Window */}
            {isOpen && (
                <div className={styles['onpointChatbot-window']}>
                    {/* Header */}
                    <div className={styles['onpointChatbot-header']}>
                        <div className={styles['onpointChatbot-headerTitle']}>
                            <HiSparkles style={{ fontSize: 20 }} />
                            <span>Door to Door Assistant</span>
                        </div>
                        <div className={styles['onpointChatbot-headerStatus']}>
                            <div className={styles['onpointChatbot-headerStatusDot']}></div>
                            <span>Online</span>
                            <button className={styles['onpointChatbot-headerBtn']} onClick={clearChat} title="Clear chat">
                                <BsThreeDotsVertical />
                            </button>
                        </div>
                    </div>
                    {/* Messages */}
                    <div className={styles['onpointChatbot-messages']}>
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={
                                    message.type === 'user'
                                        ? `${styles['onpointChatbot-messageRow']} ${styles['onpointChatbot-messageRowUser']}`
                                        : styles['onpointChatbot-messageRow']
                                }
                            >
                                <div
                                    className={
                                        message.type === 'user'
                                            ? `${styles['onpointChatbot-message']} ${styles['onpointChatbot-messageUser']}`
                                            : `${styles['onpointChatbot-message']} ${styles['onpointChatbot-messageBot']}`
                                    }
                                >
                                    <div>{message.content}</div>
                                    <div className={
                                        message.type === 'user'
                                            ? `${styles['onpointChatbot-messageTime']} ${styles['onpointChatbot-messageTimeUser']}`
                                            : styles['onpointChatbot-messageTime']
                                    }>
                                        {message.timestamp}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className={styles['onpointChatbot-thinking']}>
                                <span className={styles['onpointChatbot-bounceDot']}></span>
                                <span className={styles['onpointChatbot-bounceDot'] + ' ' + styles['onpointChatbot-bounceDot2']}></span>
                                <span className={styles['onpointChatbot-bounceDot'] + ' ' + styles['onpointChatbot-bounceDot3']}></span>
                                <span>Thinking...</span>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    {/* Quick Replies */}
                    {messages.length === 1 && (
                        <div className={styles['onpointChatbot-quickReplies']}>
                            {quickReplies.map((reply, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleQuickReply(reply)}
                                    className={styles['onpointChatbot-quickReplyBtn']}
                                >
                                    {reply}
                                </button>
                            ))}
                        </div>
                    )}
                    {/* Input */}
                    <div className={styles['onpointChatbot-inputBar']}>
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask me anything about Door to Door..."
                            className={styles['onpointChatbot-input']}
                            disabled={isLoading}
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={!inputMessage.trim() || isLoading}
                            className={styles['onpointChatbot-sendBtn']}
                        >
                            <FaPaperPlane />
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default ChatbotEnhanced

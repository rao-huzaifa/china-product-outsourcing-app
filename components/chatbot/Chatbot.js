'use client'
import { useState, useRef, useEffect } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            content: 'Hello! I\'m your Door to Doors assistant. I can help you with information about our services, projects, team, and any questions about our webapp. How can I assist you today?',
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
                if (apiKey) {
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
    You are an AI assistant for Door to Doors, a modern web development and digital services company. Here's key information about Door to Doors:

    SERVICES:
    - Web Development & Design
    - Mobile App Development
    - Digital Marketing & SEO
    - UI/UX Design
    - E-commerce Solutions
    - Software Consulting
    - Brand Development
    - Technical Support

    COMPANY INFO:
    - Door to Doors is a cutting-edge technology company
    - We specialize in creating innovative digital solutions
    - Our team consists of experienced developers, designers, and digital strategists
    - We focus on delivering high-quality, scalable solutions
    - We work with businesses of all sizes, from startups to enterprises

    WEBAPP FEATURES:
    - Modern responsive design
    - Service portfolio showcase
    - Project gallery
    - Team member profiles
    - Client testimonials
    - Contact forms
    - Blog/News section
    - Interactive calculators
    - FAQ section

    TECHNICAL STACK:
    - Built with Next.js 14
    - React 18
    - Styled Components
    - TypeScript
    - Tailwind CSS
    - Framer Motion for animations
    - Sanity CMS for content management
    - Responsive design with modern UI

    Please answer questions about Door to Doors's services, team, projects, or any technical aspects of the webapp. Be helpful, professional, and informative. If asked about specific technical details or pricing, guide users to contact the team directly.
    `

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
                const model = genAI.getGenerativeModel({ model: "gemini-pro" })
                
                const prompt = `${onPointContext}
                
                User question: ${inputMessage}
                
                Please provide a helpful response about Door to Doors's services, webapp, or related topics. Keep responses concise but informative.`

                const result = await model.generateContent(prompt)
                const response = await result.response
                const text = response.text()

                const botMessage = {
                    type: 'bot',
                    content: text,
                    timestamp: new Date().toLocaleTimeString()
                }

                setMessages(prev => [...prev, botMessage])
            } else {
                const botMessage = {
                    type: 'bot',
                    content: 'I\'m sorry, but I\'m having trouble connecting to my AI service right now. Please try again later or contact our support team directly.',
                    timestamp: new Date().toLocaleTimeString()
                }
                setMessages(prev => [...prev, botMessage])
            }
        } catch (error) {
            console.error('Error generating response:', error)
            const errorMessage = {
                type: 'bot',
                content: 'I apologize, but I encountered an error while processing your request. Please try again or contact our support team for assistance.',
                timestamp: new Date().toLocaleTimeString()
            }
            setMessages(prev => [...prev, errorMessage])
        } finally {
            setIsLoading(false)
        }
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

    return (
        <>
            {/* Chat Toggle Button */}
            <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isOpen ? 'scale-95' : 'scale-100'}`}>
                <button
                    onClick={toggleChat}
                    className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
                        isOpen 
                            ? 'bg-red-500 hover:bg-red-600' 
                            : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                    }`}
                >
                    {isOpen ? (
                        <FaTimes className="text-white text-xl" />
                    ) : (
                        <FaComments className="text-white text-xl" />
                    )}
                </button>
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden border">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <HiSparkles className="text-xl" />
                            <h3 className="font-semibold">Door to Doors Assistant</h3>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-xs">Online</span>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                                        message.type === 'user'
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-100 text-gray-800'
                                    }`}
                                >
                                    <p className="whitespace-pre-wrap">{message.content}</p>
                                    <p className={`text-xs mt-1 ${
                                        message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                                    }`}>
                                        {message.timestamp}
                                    </p>
                                </div>
                            </div>
                        ))}
                        
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                        <span>Thinking...</span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask me anything about Door to Doors..."
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                disabled={isLoading}
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={!inputMessage.trim() || isLoading}
                                className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <FaPaperPlane className="text-sm" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Chatbot

"use client"

import type React from "react"

import { useState } from "react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://public.herotofu.com/v1/78131d30-d937-11ec-af04-d73722aa9797", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        setSubmitMessage("Thank you for your message! I'll get back to you soon.")
        setFormState({ name: "", email: "", message: "" })
        setIsSubmitted(true)
      } else {
        setSubmitMessage("There was an error sending your message. Please try again.")
      }
    } catch {
      setSubmitMessage("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-form" className="py-16 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 ml-0 md:ml-12">Send me a message!</h1>
          <p className="mb-8 ml-0 md:ml-12">
            It&apos;ll go straight to my email, and I&apos;ll get back to you within the day.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="InputArea">
              <input
                type="text"
                placeholder="Your name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="InputField w-full md:w-2/3 ml-0 md:ml-12 p-2 rounded shadow-md border-0 outline-none bg-white text-gray-700"
              />
            </div>
            <div className="InputArea">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="InputField w-full md:w-2/3 ml-0 md:ml-12 p-2 rounded shadow-md border-0 outline-none bg-white text-gray-700"
              />
            </div>
            <div className="InputArea">
              <textarea
                placeholder="Your message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                className="InputField w-full md:w-2/3 ml-0 md:ml-12 p-2 rounded shadow-md border-0 outline-none bg-white text-gray-700 min-h-[150px]"
              />
            </div>
            <div className="InputArea" id="InputButtonArea">
              {!isSubmitted ? (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gradient-button ml-0 md:ml-12 font-normal"
                  id="InputButton"
                >
                  {isSubmitting ? "Sending..." : "Send me a message!"}
                </button>
              ) : (
                <div className="BelowInputArea ml-0 md:ml-12 text-green-600 font-medium" id="BelowInputArea">
                  {submitMessage}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}


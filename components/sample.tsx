"use client"

import React, { useState } from "react"
import { useAccount } from "wagmi"
import { useFlashcardContract } from "@/hooks/useContract"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}

const SampleIntregation = () => {
  const { isConnected } = useAccount()

  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  const { data, actions, state } = useFlashcardContract()

  const handleAddCard = async () => {
    if (!question || !answer) return
    try {
      await actions.addCard(question, answer)
      setQuestion("")
      setAnswer("")
    } catch (err) {
      console.error("Error:", err)
    }
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold text-foreground mb-3">Flashcard Contract</h2>
          <p className="text-muted-foreground">Please connect your wallet to interact with the contract.</p>
        </div>
      </div>
    )
  }

  const canAdd = question.trim() !== "" && answer.trim() !== ""

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Flashcard Contract</h1>
          <p className="text-muted-foreground text-sm mt-1">Store flashcards on-chain</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-4 mb-8">
          <p className="text-muted-foreground text-xs uppercase tracking-wide mb-2">
            Total Flashcards
          </p>
          <p className="text-2xl font-semibold text-foreground">
            {data?.totalCards ?? 0}
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-foreground">Question</label>
            <input
              type="text"
              placeholder="Write a question..."
              value={question}
              onChange={(e: any) => setQuestion(e.target.value)}
              className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-foreground">Answer</label>
            <input
              type="text"
              placeholder="Write an answer..."
              value={answer}
              onChange={(e: any) => setAnswer(e.target.value)}
              className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground"
            />
          </div>

          <button
            onClick={handleAddCard}
            disabled={state?.isLoading || state?.isPending || !canAdd}
            className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium"
          >
            {state?.isLoading || state?.isPending ? "Submitting..." : "Add Flashcard"}
          </button>
        </div>

        {state?.hash && (
          <div className="mt-6 p-4 bg-card border border-border rounded-lg">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
              Transaction Hash
            </p>
            <p className="text-sm font-mono text-foreground break-all mb-3">
              {state.hash}
            </p>

            {state?.isConfirming && (
              <p className="text-sm text-primary">Waiting for confirmation...</p>
            )}

            {state?.isConfirmed && (
              <p className="text-sm text-green-500">Transaction confirmed!</p>
            )}
          </div>
        )}

        {state?.error && (
          <div className="mt-6 p-4 bg-card border border-destructive rounded-lg">
            <p className="text-sm text-destructive-foreground">
              Error: {state.error?.message}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SampleIntregation

"use client"

import { useState, useEffect } from "react"
import {
  useAccount,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt
} from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"

export const useFlashcardContract = () => {
  const { address } = useAccount()
  const [isLoading, setIsLoading] = useState(false)

  // READ: totalCards
  const {
    data: totalCards,
    refetch: refetchTotal
  } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "totalCards",
  })

  // WRITE: addCard
  const {
    data: hash,
    writeContractAsync,
    isPending,
    error
  } = useWriteContract()

  // WAIT FOR CONFIRMATION
  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed
  } = useWaitForTransactionReceipt({
    hash,
  })

  // Refresh totalCards after confirmation
  useEffect(() => {
    if (isConfirmed) {
      refetchTotal()
    }
  }, [isConfirmed, refetchTotal])

  // Write function
  const addCard = async (question: string, answer: string) => {
    if (!question || !answer) return
    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "addCard",
        args: [question, answer],
      })
    } catch (err) {
      console.error("Error adding card:", err)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  // UI State
  const state = {
    isLoading: isLoading || isPending || isConfirming,
    isPending,
    isConfirming,
    isConfirmed,
    hash,
    error,
  }

  return {
    data: {
      totalCards: totalCards ? Number(totalCards as bigint) : 0,
    },
    actions: {
      addCard,
    },
    state,
  }
}

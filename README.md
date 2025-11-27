# 📘 Flashcards Smart Contract

A simple and beginner-friendly Solidity smart contract that allows users to create and study flashcards on the blockchain. This project is designed for newcomers to smart contract development who want to understand how to store and retrieve structured data on-chain.

---

## 🚀 Project Description

This project implements a **Flashcards** smart contract where users can:

- Add new flashcards  
- Store them permanently on the blockchain  
- Retrieve them by index  
- Check the total number of flashcards  

It’s a clean example of how arrays, structs, and basic functions work in Solidity — perfect for learning or extending into a more advanced DApp later.

---

## 🧠 What It Does

- Stores flashcards on-chain using a `struct` and dynamic array  
- Allows anyone to create a flashcard containing:
  - A **question**
  - An **answer**
- Provides read functions to retrieve flashcards securely  
- Helps developers understand how simple CRUD-like patterns work in Solidity  

---

## ⭐ Features

- ✏️ **Add Flashcards** — Users can store unlimited flashcards  
- 📚 **Retrieve Flashcards** — Get question & answer by index  
- 🔒 **Input Validation** — Ensures the flashcard index exists  
- 🔢 **Flashcard Counter** — Returns the total number created  
- 🧩 **Beginner Friendly Code** — Simple, clean, and well-organized  
- 🌐 **Deployed on Flare Coston2 Testnet**  

---

## 🔗 Deployed Smart Contract

**View on Flare Coston2 Explorer:**  
https://coston2-explorer.flare.network//tx/0x7547c5e582bc93fd578fbcb7df57c028d9a797349767c491ff524f303711142b

---

## 🧩 Smart Contract Code (Paste Your Code Here)

```solidity
// XXX: Paste your code below
//paste your code

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Flashcards {

    // Each flashcard has a question and an answer
    struct Flashcard {
        string question;
        string answer;
    }

    // Array to store all flashcards
    Flashcard[] private flashcards;

    // Add a new flashcard
    function addFlashcard(string memory _question, string memory _answer) public {
        flashcards.push(Flashcard({
            question: _question,
            answer: _answer
        }));
    }

    // Get a flashcard by index
    function getFlashcard(uint256 index) public view returns (string memory, string memory) {
        require(index < flashcards.length, "Flashcard does not exist");
        Flashcard memory card = flashcards[index];
        return (card.question, card.answer);
    }

    // Get total number of flashcards
    function totalFlashcards() public view returns (uint256) {
        return flashcards.length;
    }    
}



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

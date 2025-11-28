# README.md

# On-Chain Flashcard Storage (Flare Network)

## **Contract Address**
**0x8623B6095aC35BCcf3e5545B03f3Ef3C77657eD3**  
https://coston2-explorer.flare.network/address/0x8623B6095aC35BCcf3e5545B03f3Ef3C77657eD3

## **Contract Screenshot**
![Contract Screenshot](Screenshot%202025-11-28%20135923.png)
---

## **Project Description**
This project provides a fully decentralized flashcard storage system deployed on the **Flare Coston2 testnet**. Users can create flashcards by submitting a *question* and *answer* directly to the blockchain, ensuring immutability, transparency, and censorship-resistance. All data is stored permanently on-chain using a minimal, gas-efficient smart contract.

The front-end integrates with the contract using **Wagmi + viem**, allowing users to add new flashcards and view total stored cards through a clean UI, with wallet-gated access and transaction tracking.

---

## **Features**
### ✅ **Smart Contract**
- Store unlimited flashcards on-chain  
- Retrieve any flashcard by index  
- Public access to all flashcards  
- Immutable storage—once added, flashcards cannot be altered

### ✅ **Frontend Integration**
- Wallet connection via Wagmi  
- Add new flashcards from UI  
- Live total flashcard count  
- Transaction status tracking:
  - Pending
  - Confirming
  - Confirmed
- Full error handling and validation

### ✅ **Developer Friendly**
- Simple ABI  
- TypeScript helper hooks (`useFlashcardContract`)  
- Clean modular folder structure  
- Ready-to-extend codebase

---

## **How It Solves the Problem**
Traditional flashcard apps rely on centralized databases that can lose data, restrict access, or shut down. This project provides:

### 🔐 **Permanent Knowledge Storage**
Flashcards stored on-chain cannot be deleted or modified, making them ideal for:
- Study notes  
- Memory aids  
- Public knowledge repositories  

### 🌍 **Global Access**
Anyone can read the flashcards from anywhere—it is entirely decentralized.

### 💡 **Use Cases**
- Study groups storing shared learning material  
- Blockchain-based education platforms  
- Immutable public knowledge banks  
- Gamified learning dApps storing questions/answers on-chain  
- User-curated trivia databases  

### 🧩 **Benefits**
- Transparent and tamper-proof learning content  
- Guaranteed long-term persistence  
- Permissionless interaction  
- Verifiable contribution history for users

---

## **Summary**
This project demonstrates how Flare Network can be used to store meaningful learning content completely on-chain. With a simple UI and a lightweight smart contract, it acts as a foundational system for decentralized education tools, trivia games, or public knowledge registries.

You can extend this system by adding:
- Flashcard browsing UI  
- User-specific flashcard sets  
- Search and filtering  
- IPFS or hybrid on-chain/off-chain storage  

The core framework is ready and fully functional.

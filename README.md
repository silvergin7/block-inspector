# Block Inspector

A simple dApp built with TypeScript and Viem for interacting with the Ethereum Sepolia network.

## What can it do?

- Display the current block height of the Sepolia chain
- Look up the balance of an Ethereum address
- Send transactions via MetaMask

## Requirements

- Node.js installed
- MetaMask installed in your browser
- An account on [Infura](https://infura.io) to get an API key for Sepolia

## Getting started

**1. Clone the repo**

```bash
git clone https://github.com/silvergin7/block-inspector.git
cd block-inspector
```

**2. Install dependencies**

```bash
npm install
```

**3. Create a `.env` file in the root with your Infura URL**

```
VITE_BASE_URL=https://sepolia.infura.io/v3/YOUR_KEY
```

**4. Start the project**

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser. Make sure MetaMask is installed and set to the Sepolia network.

## Tests

```bash
npm run test
```

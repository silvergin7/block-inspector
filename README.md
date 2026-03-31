# Block Inspector

En enkel dApp byggd med TypeScript och Viem för att interagera med Ethereum Sepolia-nätverket.

## Vad kan den göra?

- Visa aktuellt antal block i Sepolia-kedjan
- Slå upp saldo för en Ethereum-adress
- Skicka transaktioner via MetaMask

## Krav

- Node.js installerat
- MetaMask installerat i webbläsaren
- Ett konto på [Infura](https://infura.io) för att få en API-nyckel till Sepolia

## Kom igång

**1. Klona repot**

```bash
git clone https://github.com/silvergin7/block-inspector.git
cd block-inspector
```

**2. Installera beroenden**

```bash
npm install
```

**3. Skapa en `.env`-fil i rooten med din Infura-URL**

```
VITE_BASE_URL=https://sepolia.infura.io/v3/DIN_NYCKEL
```

**4. Starta projektet**

```bash
npm run dev
```

Öppna sedan `http://localhost:3000` i webbläsaren. Se till att MetaMask är installerat och inställt på Sepolia-nätverket.

## Tester

```bash
npm run test
```

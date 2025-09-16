# Run locally

## Install Node.js (>= 20)
### Linux (Ubuntu/Debian)
sudo apt update && sudo apt install -y nodejs npm
### macOS (Homebrew)
brew install node

## Clone and run
git clone https://github.com/TON_USER/ton-repo.git
cd ton-repo
npm install
npm run dev   # → http://localhost:3000




# Internationalization

All text in the project must be written using the i18n system.  
Do not hardcode strings directly in components — always use the translation files under `/i18n/messages` (e.g. `en.json`, `fr.json`, `ar.json`).
// Button references
const connectWallet = document.getElementById("connectWallet");
const fundWallet = document.getElementById("fundWallet");
const signMessage = document.getElementById("signMessage");
const getBalance = document.getElementById("getBalance");
const disconnectWallet = document.getElementById("disconnectWallet");
const walletInfo = document.getElementById("walletInfo");

let connectedAccount = null; // Store connected address

// Connect wallet
async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      connectedAccount = accounts[0];
      console.log("✅ Connected:", connectedAccount);
      walletInfo.textContent = `✅ Connected: ${connectedAccount}`;
      connectWallet.innerHTML = `Connected: ${connectedAccount.slice(0, 6)}...${connectedAccount.slice(-4)}`;
    } catch (err) {
      console.error("❌ Connection failed:", err);
      walletInfo.textContent = "❌ Connection failed.";
    }
  } else {
    walletInfo.textContent = "Please install MetaMask!";
  }
}

// Fund wallet (placeholder)
async function fund() {
  if (!connectedAccount) {
    walletInfo.textContent = "Connect your wallet first!";
    return;
  }
  console.log("💰 Funding wallet...");
  walletInfo.textContent = "💰 Funding wallet... (placeholder)";
  // You could later integrate sending ETH or tokens here
}

// Sign message
async function sign() {
  if (!connectedAccount) {
    walletInfo.textContent = "Connect your wallet first!";
    return;
  }
  const message = "This is a test message to sign and verify wallet ownership.";
  try {
    const signature = await window.ethereum.request({
      method: "personal_sign",
      params: [message, connectedAccount],
    });
    console.log("🖊️ Signature:", signature);
    walletInfo.textContent = "🖊️ Message signed successfully!";
  } catch (err) {
    console.error("❌ Signing failed:", err);
    walletInfo.textContent = "❌ Signing failed.";
  }
}

// Get balance
async function getBalanceFunc() {
  if (!connectedAccount) {
    walletInfo.textContent = "Connect your wallet first!";
    return;
  }
  try {
    const balanceHex = await window.ethereum.request({
      method: "eth_getBalance",
      params: [connectedAccount, "latest"],
    });
    const balance = parseInt(balanceHex, 16) / 1e18;
    console.log("💵 Balance:", balance, "ETH");
    walletInfo.textContent = `💵 Balance: ${balance.toFixed(4)} ETH`;
  } catch (err) {
    console.error("❌ Could not fetch balance:", err);
    walletInfo.textContent = "❌ Could not fetch balance.";
  }
}

// Disconnect wallet
function disconnect() {
  connectedAccount = null;
  walletInfo.textContent = "🔌 Wallet disconnected.";
  connectWallet.innerHTML = "Connect Wallet";
}

// Attach events
connectWallet.onclick = connect;
fundWallet.onclick = fund;
signMessage.onclick = sign;
getBalance.onclick = getBalanceFunc;
disconnectWallet.onclick = disconnect;

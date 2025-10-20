// Select buttons from the HTML
const connectWallet = document.getElementById("connectWallet");
const fundWallet = document.getElementById("fundWallet");

// Function to connect wallet and request signature
async function connect() {
  if (typeof window.ethereum !== "undefined") {
    console.log("✅ MetaMask detected!");

    try {
      // Request wallet connection
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const account = accounts[0];
      console.log("Connected wallet:", account);

      // Request user to sign a message for verification
      const message = `Welcome! Please sign this message to verify you own this wallet.\n\nWallet: ${account}`;
      const signature = await window.ethereum.request({
        method: "personal_sign",
        params: [message, account],
      });

      console.log("🖊️ Signature:", signature);

      // Display connected wallet on the button
      connectWallet.innerHTML = `✅ Connected: ${account.slice(0, 6)}...${account.slice(-4)}`;

      // Optionally send to backend for verification
      // await fetch("/api/verify", { method: "POST", body: JSON.stringify({ account, signature }) });

    } catch (error) {
      console.error("❌ Connection or signing failed:", error);
      connectWallet.innerHTML = "❌ Connection failed!";
    }

  } else {
    connectWallet.innerHTML = "Please install MetaMask!";
  }
}

// Example "fund wallet" function (placeholder)
async function yes() {
  if (typeof window.ethereum !== "undefined") {
    console.log("💰 Funding wallet... (placeholder)");
    fundWallet.innerHTML = "Funding wallet...";
  } else {
    fundWallet.innerHTML = "Please install MetaMask!";
  }
}

// Attach click handlers
connectWallet.onclick = connect;
fundWallet.onclick = yes;

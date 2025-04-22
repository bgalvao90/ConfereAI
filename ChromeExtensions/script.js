document.getElementById('actionButton').addEventListener('click', () => {
    if (chrome.tabs) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0];
            const activeTabUrl = activeTab.url;
            console.log("URL da aba ativa:", activeTabUrl);

            fetch("https://sua-api.com/verificar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ url: activeTabUrl })
            })
            .then(response => response.json())
            .then(data => {
                console.log("Resposta da API:", data);
                document.getElementById('resultado').textContent =
                    data.confiavel ? "✅ Site confiável!" : "⚠️ Site suspeito!";
            })
            .catch(error => {
                console.error("Erro ao consultar API:", error);
                document.getElementById('resultado').textContent =
                    "❌ Erro ao verificar o site.";
            });
        });
    } else {
        console.log("chrome.tabs não está disponível.");
    }
});
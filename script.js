document.addEventListener('DOMContentLoaded', () => {
    if (chrome.tabs) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        const activeTabUrl = activeTab.url;
  
        console.log("Verificando URL:", activeTabUrl);
  
        fetch("https://localhost:7141/Api/Sites/Verificar", { // Alterar para API correta
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ url: activeTabUrl })
        })
          .then(response => {
            if (!response.ok) throw new Error("Resposta da API não OK");
            return response.json();
          })
          .then(data => {
            if (data.confiavel && document.getElementById('alertaSeguro')) {
              document.getElementById('alertaSeguro').style.display = 'block';
            } else if (!data.confiavel && document.getElementById('alertaInseguro')) {
              document.getElementById('alertaInseguro').style.display = 'block';
            }
          })
          .catch(error => {
            console.error("Erro:", error);
            if (document.getElementById('alertaErro')) {
              document.getElementById('alertaErro').style.display = 'block';
            }
          });
      });
    } else {
      console.log("chrome.tabs não está disponível.");
    }
  });
  
document.addEventListener('DOMContentLoaded', () => {
    if (chrome.tabs) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        const activeTabUrl = activeTab.url;
  
        console.log("Verificando URL:", activeTabUrl);
  
        fetch("", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ url: activeTabUrl })
        })
          .then(response => response.json())
          .then(data => {
            if (data.confiavel) {
              document.getElementById('alertaSeguro').style.display = 'block';
            } else {
              document.getElementById('alertaInseguro').style.display = 'block';
            }
          })
          .catch(error => {
            console.error("Erro:", error);
            document.getElementById('alertaErro').style.display = 'block';
          });
      });
    } else {
      console.log("chrome.tabs não está disponível.");
    }
  });
  
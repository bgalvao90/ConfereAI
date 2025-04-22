(function () {
    const currentUrl = window.location.href;
  
    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url: currentUrl })
    })
      .then(response => response.json())
      .then(data => {
        const alerta = document.createElement("div");
        alerta.style.position = "fixed";
        alerta.style.top = "20px";
        alerta.style.right = "20px";
        alerta.style.zIndex = "9999";
        alerta.style.padding = "15px";
        alerta.style.borderRadius = "8px";
        alerta.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
        alerta.style.fontSize = "16px";
        alerta.style.color = "#fff";
        alerta.style.backgroundColor = data.confiavel ? "#28a745" : "#dc3545";
        alerta.textContent = data.confiavel ? "✅ Este site é confiável" : "⚠️ Cuidado! Site suspeito";
  
        document.body.appendChild(alerta);
  
        setTimeout(() => {
          alerta.remove();
        }, 5000);
      })
      .catch(error => {
        console.error("Erro ao verificar site:", error);
      });
  })();
  
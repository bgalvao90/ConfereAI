(function () {
    const currentUrl = window.location.href;
  
    // ⚠️ Troque essa URL pela sua API real
    fetch("https://api.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url: currentUrl })
    })
      .then(response => {
        if (!response.ok) throw new Error("Resposta inválida da API");
        return response.json();
      })
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
        alerta.textContent = data.confiavel
          ? "✅ Este site é confiável"
          : "⚠️ Cuidado! Site suspeito";
  
        document.body.appendChild(alerta);
  
        setTimeout(() => {
          alerta.remove();
        }, 5000);
      })
      .catch(error => {
        console.error("Erro ao verificar site:", error);
  
        const erro = document.createElement("div");
        erro.style.position = "fixed";
        erro.style.top = "20px";
        erro.style.right = "20px";
        erro.style.zIndex = "9999";
        erro.style.padding = "15px";
        erro.style.borderRadius = "8px";
        erro.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
        erro.style.fontSize = "16px";
        erro.style.color = "#fff";
        erro.style.backgroundColor = "#ffc107";
        erro.textContent = "❌ Erro ao verificar o site.";
  
        document.body.appendChild(erro);
  
        setTimeout(() => {
          erro.remove();
        }, 5000);
      });
  })();
  
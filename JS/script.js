const valorInput = document.getElementById("valor");
const taxaInput = document.getElementById("taxa");
const parcelasInput = document.getElementById("parcelas");
const resultado = document.getElementById("resultado");
const erro = document.getElementById("erro");
const btnCalcular = document.getElementById("btnCalcular");

valorInput.addEventListener("input", () => {
  let valor = valorInput.value.replace(/\D/g, "");
  valor = (valor / 100).toFixed(2);
  valorInput.value = "R$ " + valor.replace(".", ",");
});

taxaInput.addEventListener("input", () => {
  let valor = taxaInput.value.replace(/\D/g, "");
  taxaInput.value = valor + "%";
});

btnCalcular.addEventListener("click", calcular);

function calcular() {
  erro.textContent = "";
  resultado.innerHTML = "";

  const valor = Number(
    valorInput.value.replace("R$", "").replace(",", ".")
  );

  const taxa = Number(
    taxaInput.value.replace("%", "")
  ) / 100;

  const parcelas = Number(parcelasInput.value);

  if (!valor || !taxa || !parcelas) {
    erro.textContent = "Preencha todos os campos corretamente.";
    return;
  }

  const montante = valor * Math.pow(1 + taxa, parcelas);

  const total = formatar(montante);
  const juros = formatar(montante - valor);
  const parcela = formatar(montante / parcelas);

  resultado.innerHTML = `
    <div class="card resultado-total">
      <span>Total</span>
      <strong>${total}</strong>
    </div>

    <div class="card resultado-juros">
      <span>Juros</span>
      <strong>${juros}</strong>
    </div>

    <div class="card resultado-parcela">
      <span>Parcela</span>
      <strong>${parcela}</strong>
    </div>

    <button class="btn-reset" id="resetar">Nova simulação</button>
  `;

  document
    .getElementById("resetar")
    .addEventListener("click", novaSimulacao);
}

function novaSimulacao() {
  valorInput.value = "";
  taxaInput.value = "";
  parcelasInput.value = "";
  resultado.innerHTML = "";
  erro.textContent = "";
}

function formatar(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
const quoteContainer = document.querySelector(".quote-container");

let quotes = [
  "<html>\"<em>Ser ou não ser, eis a questão.\" <br>— Hamlet</html>",
  "<html>\"<em>Se queres ser feliz, sê.</em>\" <br>- Anna Karenina</html>",
  "<html>\"<em>A alma é curada ao estar com crianças.</em>\" <br>– Os Irmãos Karamázov</html>",
  "<html>\"<em>Uma jaula saiu à procura de um pássaro.</em>\" <br>– Diários de Kafka</html>",
  "<html>\"<em>Ao vencedor, as batatas.</em>\" <br>— Quincas Borba</html>",
  "<html>\"<em>Liberdade é pouco. O que desejo ainda não tem nome.</em>\" <br>- Perto do Coração Selvagem</html>",
  "<html>\"<em>Viver é muito perigoso...</em>\" <br>— Grande Sertão: Veredas</html>",
  "<html>\"<em>No meio do caminho tinha uma pedra, tinha uma pedra no meio do caminho.</em>\" <br>― No Meio do Caminho</html>",
  "<html>\"<em>O que é preciso é ser-se um homem de bem e nada mais.</em>\" <br>– Capitães da areia</html>",
  "<html>\"<em>Eu canto porque o instante existe e a minha vida está completa</em>\" <br>— Cecília Meireles</html>",
  "<html>\"<em>Se você se lembrar de mim, então eu não me importo se todos os outros esquecerem.</em>.\" <br>— Kafka à Beira-Mar</html>",
  "<html>\"<em>Viver é a coisa mais rara do mundo. A maioria das pessoas apenas existe.</em>.\" <br>— O Retrato de Dorian Gray</html>",
  "<html>\"<em>No meio do inverno, aprendi enfim que havia dentro de mim um verão invencível.</em>\" <br>— O Mito de Sísifo</html>",
  "<html>\"<em>Em tempos de engano universal, dizer a verdade é um ato revolucionário.</em>\" <br>— 1984</html>",
  "<html>\"<em>Você é sua melhor coisa.</em>\" <br>— Amada</html>",
  "<html>\"<em>O passado nunca está morto. Ele nem sequer é passado.</em>\" <br>— Requiem para uma Freira</html>",
  "<html>\"<em>A ignorância não é uma bênção.</em>\" <br>— O Conto da Aia</html>",
  "<html>\"<em>O mundo quebra a todos, e depois, muitos ficam mais fortes nos lugares quebrados.</em>\" <br>— Adeus às Armas</html>",
  "<html>\"<em>A vida não é a que a gente viveu, mas a que a gente recorda, e como recorda para contá-la.</em>\" <br>— Viver para Contar</html>",
  "<html>\"<em>O verdadeiro ato de descobrimento não consiste em procurar novas paisagens, mas em ter novos olhos.</em>\" <br>— Em Busca do Tempo Perdido</html>",
  "<html>\"<em>Não se pode encontrar paz evitando a vida.</em>\" <br>— Mrs. Dalloway</html>",
  "<html>\"<em>A vida é uma grande surpresa. Não vejo por que a morte não possa ser ainda maior.</em>\" <br>— Pnin</html>",
]

function quoteGenerator() {
  const randomIndex = Math.floor(Math.random() * (quotes.length));
  quoteContainer.innerHTML = quotes[randomIndex];
}

console.log(quoteGenerator());

window.onload(quoteGenerator());

// Capturando os elementos criados no HTML
const titulo = document.getElementById('titulo'); // Título (h1)
const listaNaoOrdenada = document.querySelector('ul'); // Lista não ordenada (ul)
const link = document.querySelector('a'); // Link (a)
const listaOrdenada = document.getElementById('lista-ordenada'); // Lista ordenada (ol)

// Adicionando texto ao título (h1)
titulo.innerText = 'Bem-vindo ao meu Projeto!';

// Adicionando texto ao link (a)
link.innerText = 'Visite a Prozeducação';

// Adicionando itens na lista não ordenada (ul)
listaNaoOrdenada.innerHTML = `
    <li>Primeiro item</li>
    <li>Segundo item</li>
    <li>Terceiro item</li>
`;

// Adicionando itens com links na lista ordenada (ol)
listaOrdenada.innerHTML = `
    <li><a href="https://google.com" target="_blank">Google</a></li>
    <li><a href="https://github.com" target="_blank">GitHub</a></li>
    <li><a href="https://wikipedia.org" target="_blank">Wikipedia</a></li>
`;

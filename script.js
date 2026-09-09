const UNSPLASH_ACCESS_KEY = 'sua-chave-aqui';

const lendas = [
    {
        id: 1,
        titulo: 'Saci-Pererê',
        regiao: 'norte',
        regiaoNome: 'Norte',
        tag: 'Travesso',
        descricao: 'Menino negro de uma perna só que fuma cachimbo e usa gorro vermelho. Adora fazer travessuras, como esconder objetos e assobiar para assustar viajantes.',
        curiosidade: 'Dizem que para capturar um Saci, basta jogar uma peneira ou um rosário em um redemoinho de vento.',
        termoBusca: 'saci perere brazilian folklore'
    },
    {
        id: 2,
        titulo: 'Curupira',
        regiao: 'norte',
        regiaoNome: 'Norte',
        tag: 'Protetor',
        descricao: 'Protetor das florestas, tem cabelos de fogo e pés virados para trás, confundindo caçadores. Castiga quem derruba árvores ou caça além do necessário.',
        curiosidade: 'Ele adora fazer os caçadores se perderem na mata, mas também ajuda os que respeitam a natureza.',
        termoBusca: 'curupira brazilian folklore'
    },
    {
        id: 3,
        titulo: 'Iara',
        regiao: 'norte',
        regiaoNome: 'Norte',
        tag: 'Sedutora',
        descricao: 'Bela sereia de cabelos negros que vive nos rios amazônicos. Com seu canto hipnotizante, atrai os homens para as profundezas.',
        curiosidade: 'Originalmente era uma índia guerreira que se transformou em sereia após ser salva pelos peixes.',
        termoBusca: 'iara mermaid brazilian folklore'
    },
    {
        id: 4,
        titulo: 'Boto Cor-de-Rosa',
        regiao: 'norte',
        regiaoNome: 'Norte',
        tag: 'Encantador',
        descricao: 'Durante as festas juninas, o boto se transforma em um jovem elegante e conquista as moças. Na manhã seguinte, volta a ser golfinho.',
        curiosidade: 'Ele usa um chapéu para esconder o espiráculo (o furo no topo da cabeça) durante suas aventuras amorosas.',
        termoBusca: 'boto cor de rosa amazon river dolphin'
    },
    {
        id: 5,
        titulo: 'Mapinguari',
        regiao: 'norte',
        regiaoNome: 'Norte',
        tag: 'Monstro',
        descricao: 'Criatura gigante coberta de pelos, com uma boca no ventre. Dizem que é um parente da preguiça-gigante extinta, mas que ainda vive na Amazônia.',
        curiosidade: 'Alguns pesquisadores acreditam que a lenda do Mapinguari pode ter sido inspirada em avistamentos de preguiças-gigantes pré-históricas.',
        termoBusca: 'mapinguari brazilian folklore monster'
    },
    {
        id: 6,
        titulo: 'Matinta Perera',
        regiao: 'norte',
        regiaoNome: 'Norte',
        tag: 'Assombração',
        descricao: 'Uma velha que se transforma em pássaro e assombra as casas à noite, pedindo fumo ou café. Quem nega, sofre castigos.',
        curiosidade: 'Dizem que a Matinta Perera é uma bruxa que pode se transformar em urutau (ave noturna).',
        termoBusca: 'matinta perera brazilian folklore'
    },
    {
        id: 7,
        titulo: 'Cobra-Grande',
        regiao: 'norte',
        regiaoNome: 'Norte',
        tag: 'Lendária',
        descricao: 'Cobra gigante que habita os rios amazônicos, capaz de virar canoas e engolir pessoas. É protetora das águas e das matas.',
        curiosidade: 'Acredita-se que ela seja uma das entidades mais poderosas da floresta, e seu avistamento é mau agouro.',
        termoBusca: 'cobra grande brazilian folklore'
    },
    {
        id: 8,
        titulo: 'Cuca',
        regiao: 'nordeste',
        regiaoNome: 'Nordeste',
        tag: 'Assustadora',
        descricao: 'Bruxa velha e enrugada com cabeça de jacaré, que sequestra crianças desobedientes. É famosa pela cantiga de ninar "Nana neném".',
        curiosidade: 'A Cuca é uma das personagens mais temidas do folclore, mas também é usada pelos pais para educar os filhos.',
        termoBusca: 'cuca brazilian folklore witch'
    },
    {
        id: 9,
        titulo: 'Boitatá',
        regiao: 'nordeste',
        regiaoNome: 'Nordeste',
        tag: 'Fogo',
        descricao: 'Grande serpente de fogo que protege as matas contra incêndios e invasores. Seus olhos brilham como brasas na escuridão.',
        curiosidade: 'Dizem que o Boitatá é cego, mas enxerga através do calor dos corpos e das chamas.',
        termoBusca: 'boitata brazilian folklore fire snake'
    },
    {
        id: 10,
        titulo: 'Corpo-Seco',
        regiao: 'nordeste',
        regiaoNome: 'Nordeste',
        tag: 'Amaldiçoado',
        descricao: 'Espírito de um homem mau que foi rejeitado pela terra e pelo céu. Vaga pela terra como uma caveira andante, assustando viajantes.',
        curiosidade: 'Dizem que ele foi enterrado em pé e que seu corpo não se decompôs, daí o nome "Corpo-Seco".',
        termoBusca: 'corpo seco brazilian folklore'
    },
    {
        id: 11,
        titulo: 'Negrinho do Pastoreio',
        regiao: 'nordeste',
        regiaoNome: 'Nordeste',
        tag: 'Mítico',
        descricao: 'Menino escravo que foi castigado por perder cavalos. Aparece montado em um cavalo branco, ajudando viajantes perdidos.',
        curiosidade: 'Ele é considerado um santo popular no Rio Grande do Sul e em partes do Nordeste e Centro-Oeste.',
        termoBusca: 'negrinho do pastoreio brazilian folklore'
    },
    {
        id: 12,
        titulo: 'Mula sem Cabeça',
        regiao: 'nordeste',
        regiaoNome: 'Nordeste',
        tag: 'Amaldiçoada',
        descricao: 'Mulher que se relacionou com um padre e foi amaldiçoada. Vira uma mula de fogo com cabeça de chamas que corre pelas estradas.',
        curiosidade: 'Para se livrar da maldição, é preciso furar a mula com um objeto cortante ou rezar.',
        termoBusca: 'mula sem cabeca brazilian folklore'
    },
    {
        id: 13,
        titulo: 'Cabra-Cabriola',
        regiao: 'nordeste',
        regiaoNome: 'Nordeste',
        tag: 'Fantasma',
        descricao: 'Cabra que aparece nas estradas do sertão, montada por um cavaleiro sem cabeça. É uma lenda ligada a pactos com o demônio.',
        curiosidade: 'Acredita-se que a Cabra-Cabriola é o resultado de um pacto entre um homem e o diabo, que o transformou em bode.',
        termoBusca: 'cabra cabriola brazilian folklore'
    },
    {
        id: 14,
        titulo: 'Dona de Casa (Lenda do Pantanal)',
        regiao: 'centro-oeste',
        regiaoNome: 'Centro-Oeste',
        tag: 'Assombração',
        descricao: 'Uma mulher que aparece nas casas do Pantanal, pedindo comida e fogo. Dizem que é uma alma penada que busca redenção.',
        curiosidade: 'Ela é conhecida por ser uma figura protetora das famílias que a acolhem.',
        termoBusca: 'dona de casa pantanal folklore'
    },
    {
        id: 15,
        titulo: 'Romãozinho',
        regiao: 'centro-oeste',
        regiaoNome: 'Centro-Oeste',
        tag: 'Travesso',
        descricao: 'Menino que aparece em casas de fazenda, escondendo objetos e fazendo travessuras. É considerado um duende ou espírito brincalhão.',
        curiosidade: 'Dizem que ele é filho de uma índia com um fazendeiro, e que vaga pela região.',
        termoBusca: 'romãozinho brazilian folklore'
    },
    {
        id: 16,
        titulo: 'Minhocão',
        regiao: 'centro-oeste',
        regiaoNome: 'Centro-Oeste',
        tag: 'Monstro',
        descricao: 'Cobra gigante que habita os rios e lagos do Pantanal. Causa ondas e vira canoas, mas não ataca humanos.',
        curiosidade: 'Dizem que o Minhocão é um animal pré-histórico que sobreviveu em regiões remotas.',
        termoBusca: 'minhocao brazilian folklore'
    },
    {
        id: 17,
        titulo: 'Lobisomem',
        regiao: 'sudeste',
        regiaoNome: 'Sudeste',
        tag: 'Lendário',
        descricao: 'Homem que se transforma em lobo nas noites de lua cheia. Acredita-se que seja o sétimo filho homem de uma família.',
        curiosidade: 'Em Minas Gerais, dizem que o lobisomem pode ser curado se for ferido com uma bala de prata.',
        termoBusca: 'lobisomem brazilian folklore werewolf'
    },
    {
        id: 18,
        titulo: 'Caipora',
        regiao: 'sudeste',
        regiaoNome: 'Sudeste',
        tag: 'Protetora',
        descricao: 'Índia pequena e peluda que vive nas matas, montada em um porco-do-mato. Protege os animais e assusta caçadores.',
        curiosidade: 'Ela adora fumo e cachaça. Os caçadores costumam deixar oferendas para acalmá-la.',
        termoBusca: 'caipora brazilian folklore'
    },
    {
        id: 19,
        titulo: 'Cidade Encantada',
        regiao: 'sudeste',
        regiaoNome: 'Sudeste',
        tag: 'Misteriosa',
        descricao: 'Uma cidade que aparece e desaparece, geralmente em regiões de minas. Dizem que é habitada por seres mágicos e que guarda tesouros.',
        curiosidade: 'A lenda é comum em Minas Gerais e Goiás, onde minas abandonadas são associadas a essa cidade fantasma.',
        termoBusca: 'cidade encantada brazilian folklore'
    },
    {
        id: 20,
        titulo: 'Cabeça de Cuia',
        regiao: 'sudeste',
        regiaoNome: 'Sudeste',
        tag: 'Assombração',
        descricao: 'Espírito de uma mulher que foi decapitada e agora vaga com a cabeça em uma cuia (cabaça). Aparece em noites de lua cheia.',
        curiosidade: 'Dizem que ela procura vingança contra os homens que a maltrataram em vida.',
        termoBusca: 'cabeca de cuia brazilian folklore'
    },
    {
        id: 21,
        titulo: 'Pé de Garrafa (Lenda Gaúcha)',
        regiao: 'sul',
        regiaoNome: 'Sul',
        tag: 'Travesso',
        descricao: 'Criatura baixinha que usa uma garrafa como perna e vive nos campos. Adora pregar peças em viajantes e fazer assovios.',
        curiosidade: 'Ele é considerado um protetor dos animais, mas também um brincalhão que confunde os tropeiros.',
        termoBusca: 'pe de garrafa brazilian folklore'
    },
    {
        id: 22,
        titulo: 'Bicho-papão (versão Sul)',
        regiao: 'sul',
        regiaoNome: 'Sul',
        tag: 'Assombração',
        descricao: 'Monstro que aparece para crianças desobedientes. No Sul, é descrito como uma criatura peluda com olhos brilhantes.',
        curiosidade: 'É usado pelos pais para assustar os filhos e fazê-los se comportar.',
        termoBusca: 'bicho papao brazilian folklore'
    },
    {
        id: 23,
        titulo: 'Saci-Pererê (versão Sul)',
        regiao: 'sul',
        regiaoNome: 'Sul',
        tag: 'Travesso',
        descricao: 'No Sul, o Saci é conhecido por assustar tropeiros e esconder objetos nas fazendas. Sua risada ecoa nos campos de erva-mate.',
        curiosidade: 'No Sul, ele é frequentemente associado aos redemoinhos que surgem nos campos abertos.',
        termoBusca: 'saci perere southern brazil'
    },
    {
        id: 24,
        titulo: 'Mãe d\'Água (versão Sul)',
        regiao: 'sul',
        regiaoNome: 'Sul',
        tag: 'Sedutora',
        descricao: 'Sereia que vive nos rios e lagoas do Sul. Com seu canto, atrai pescadores e viajantes para o fundo das águas.',
        curiosidade: 'Ela é parente da Iara, mas é considerada mais perigosa, pois não poupa ninguém.',
        termoBusca: 'mae d agua brazilian folklore sereia'
    },
    {
        id: 25,
        titulo: 'Boitatá (versão Sul)',
        regiao: 'sul',
        regiaoNome: 'Sul',
        tag: 'Fogo',
        descricao: 'No Sul, o Boitatá é visto como uma cobra de fogo que protege os campos contra incêndios e invasores.',
        curiosidade: 'Os gaúchos acreditam que ele aparece antes de temporais para avisar sobre perigos.',
        termoBusca: 'boitata sul brazil'
    },
    {
        id: 26,
        titulo: 'Cuca (versão Sudeste)',
        regiao: 'sudeste',
        regiaoNome: 'Sudeste',
        tag: 'Assustadora',
        descricao: 'No Sudeste, a Cuca é representada como uma bruxa que rouba crianças, mas também como uma figura folclórica das festas juninas.',
        curiosidade: 'Em algumas regiões, ela é confundida com a "Bruxa do Saci".',
        termoBusca: 'cuca brazilian folklore witch'
    },
    {
        id: 27,
        titulo: 'Negrinho do Pastoreio (versão Centro-Oeste)',
        regiao: 'centro-oeste',
        regiaoNome: 'Centro-Oeste',
        tag: 'Mítico',
        descricao: 'No Centro-Oeste, a lenda do Negrinho do Pastoreio é muito forte entre os peões e fazendeiros. Ele é visto como um protetor dos cavalos.',
        curiosidade: 'Muitos fazendeiros deixam oferendas de fumo e doces para ele.',
        termoBusca: 'negrinho do pastoreio centro oeste'
    }
];

async function buscarImagem(termo) {
    if (!UNSPLASH_ACCESS_KEY || UNSPLASH_ACCESS_KEY === 'sua-chave-aqui') {
        return null;
    }
    try {
        const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(termo)}&per_page=1&orientation=landscape`;
        const resposta = await fetch(url, {
            headers: {
                'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
            }
        });
        if (!resposta.ok) throw new Error(`Erro ${resposta.status}`);
        const dados = await resposta.json();
        if (dados.results && dados.results.length > 0) {
            return dados.results[0].urls.regular;
        }
        return null;
    } catch (erro) {
        console.error('Erro ao buscar imagem:', erro);
        return null;
    }
}

const grid = document.getElementById('gridCards');
const loading = document.getElementById('loading');
const filtroBotoes = document.querySelectorAll('.filtros button');
const navLinks = document.querySelectorAll('nav a[data-filtro]');

let lendasComImagens = [];
let filtroAtual = 'todos';

async function carregarLendas() {
    loading.style.display = 'block';
    grid.style.display = 'none';

    lendasComImagens = await Promise.all(lendas.map(async (lenda) => {
        const imagemURL = await buscarImagem(lenda.termoBusca);
        return {
            ...lenda,
            imagem: imagemURL || `https://source.unsplash.com/featured/?${encodeURIComponent(lenda.titulo)},folklore`
        };
    }));

    loading.style.display = 'none';
    grid.style.display = 'grid';
    renderizarCards(filtroAtual);
}

function renderizarCards(filtro = 'todos') {
    const filtrados = filtro === 'todos' ?
        lendasComImagens :
        lendasComImagens.filter(l => l.regiao === filtro);

    grid.innerHTML = '';
    if (filtrados.length === 0) {
        grid.innerHTML = `
                <div style="grid-column:1/-1; text-align:center; padding:3rem 1rem; background:#fff; border-radius:20px; box-shadow: var(--sombra);">
                    <i class="fas fa-search" style="font-size:3rem; color:var(--verde-floresta); opacity:0.4;"></i>
                    <p style="font-size:1.2rem; color:#5a4a3a; margin-top:0.5rem;">Nenhuma lenda encontrada para esta região.</p>
                </div>
            `;
        return;
    }

    filtrados.forEach(lenda => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.regiao = lenda.regiao;
        card.innerHTML = `
                <div class="card-img" style="background-image: url('${lenda.imagem}');">
                    <span class="card-tag"><i class="fas fa-tag"></i> ${lenda.tag}</span>
                </div>
                <div class="card-body">
                    <h3>${lenda.titulo}</h3>
                    <div class="regiao"><i class="fas fa-map-pin"></i> ${lenda.regiaoNome}</div>
                    <p>${lenda.descricao.substring(0, 80)}…</p>
                    <div class="leia-mais">Ler mais <i class="fas fa-arrow-right"></i></div>
                </div>
            `;
        card.addEventListener('click', () => abrirModal(lenda.id));
        grid.appendChild(card);
    });
}

function aplicarFiltro(filtro) {
    filtroAtual = filtro;
    renderizarCards(filtro);
    filtroBotoes.forEach(btn => {
        btn.classList.toggle('ativo', btn.dataset.filtro === filtro);
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.filtro === filtro);
    });
    grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

filtroBotoes.forEach(btn => {
    btn.addEventListener('click', () => {
        aplicarFiltro(btn.dataset.filtro);
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        aplicarFiltro(link.dataset.filtro);
    });
});

const modalOverlay = document.getElementById('modalOverlay');
const modalFechar = document.getElementById('modalFechar');
const modalImg = document.getElementById('modalImg');
const modalTag = document.getElementById('modalTag');
const modalTitulo = document.getElementById('modalTitulo');
const modalRegiao = document.getElementById('modalRegiao');
const modalDescricao = document.getElementById('modalDescricao');
const modalCuriosidade = document.getElementById('modalCuriosidade');

function abrirModal(id) {
    const lenda = lendasComImagens.find(l => l.id === id);
    if (!lenda) return;

    modalImg.style.backgroundImage = `url('${lenda.imagem}')`;
    modalTag.textContent = lenda.tag;
    modalTitulo.textContent = lenda.titulo;
    modalRegiao.textContent = `📍 ${lenda.regiaoNome}`;
    modalDescricao.textContent = lenda.descricao;
    modalCuriosidade.textContent = `✨ Curiosidade: ${lenda.curiosidade}`;

    modalOverlay.classList.add('aberto');
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    modalOverlay.classList.remove('aberto');
    document.body.style.overflow = '';
}

modalFechar.addEventListener('click', fecharModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) fecharModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharModal();
});

document.getElementById('btnExplorar').addEventListener('click', (e) => {
    e.preventDefault();
    aplicarFiltro('todos');
});

carregarLendas();
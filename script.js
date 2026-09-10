const lendas = [
    {
        id: 1,
        titulo: 'Saci-Pererê',
        regiao: 'norte',
        regiaoNome: 'Norte',
        tag: 'Travesso',
        descricao: 'O Saci-Pererê é uma das figuras mais emblemáticas do folclore brasileiro. Trata-se de um menino negro de uma perna só que fuma cachimbo e usa um gorro vermelho que lhe confere poderes mágicos. Ele é conhecido por suas travessuras incessantes: adora esconder objetos, assoviar para assustar viajantes, enroscar as crinas dos cavalos e fazer redemoinhos de vento para confundir as pessoas. Apesar de ser brincalhão, o Saci não é malvado, apenas gosta de pregar peças. Segundo a lenda, ele surgiu entre os povos indígenas e foi incorporado ao imaginário popular, sendo um dos personagens mais queridos e temidos ao mesmo tempo. Sua origem está ligada ao mito do "Saci" entre os guaranis, que acreditavam em uma entidade protetora da floresta. Hoje, o Saci é símbolo da cultura brasileira e tem até um dia dedicado a ele: 31 de outubro, o Dia do Saci.',
        curiosidade: 'Dizem que para capturar um Saci, basta jogar uma peneira ou um rosário em um redemoinho de vento, pois ele fica preso e pode ser domado. Também acreditam que ele pode ser visto em dias de tempestade, pulando de galho em galho.',
        imagem: 'img/saci-perere.jpg'
    },
    {
        id: 2,
        titulo: 'Curupira',
        regiao: 'norte',
        regiaoNome: 'Norte',
        tag: 'Protetor',
        descricao: 'O Curupira é o guardião das florestas brasileiras, uma criatura de estatura baixa, cabelos vermelhos como fogo e pés virados para trás, o que confunde caçadores e invasores. Ele é implacável com aqueles que derrubam árvores ou caçam animais de forma predatória, mas também pode ser generoso com quem respeita a natureza. A lenda do Curupira tem raízes profundas entre os índios tupis e guaranis, que o viam como um espírito protetor da fauna e da flora. Ele é conhecido por emitir gritos agudos que imitam o som de animais para atrair caçadores para o fundo da mata, onde os faz se perderem para sempre. Sua figura é frequentemente associada ao ciclo da vida e à necessidade de preservação ambiental, sendo um dos mitos mais importantes para a consciência ecológica.',
        curiosidade: 'Ele adora fazer os caçadores se perderem na mata, mas também ajuda os que respeitam a natureza. Dizem que ele pode ser visto montado em um porco-do-mato ou em um veado, e que seu assobio é tão forte que pode ser ouvido a quilômetros de distância.',
        imagem: 'img/curupira.jpg'
    },
    {
        id: 3,
        titulo: 'Iara',
        regiao: 'norte',
        regiaoNome: 'Norte',
        tag: 'Sedutora',
        descricao: 'A Iara é uma bela sereia de cabelos negros e longos que habita os rios da Amazônia. Com seu canto hipnotizante, ela atrai pescadores e viajantes para as profundezas das águas, onde os devora ou os transforma em seus súditos. Originalmente, a Iara era uma índia guerreira que foi transformada em sereia pelos peixes para salvá-la da morte, após ser desonrada pelo pai. Desde então, ela vaga pelos rios, seduzindo homens incautos. Sua figura é uma das mais populares do folclore, sendo tema de inúmeras cantigas, poesias e festas populares, especialmente no Norte do Brasil. Acredita-se que a Iara seja capaz de prever o futuro e que seu canto pode enlouquecer aqueles que a ouvem.',
        curiosidade: 'Originalmente era uma índia guerreira que se transformou em sereia após ser salva pelos peixes. Dizem que ela é imortal e que só pode ser derrotada por alguém que não se deixe seduzir por seu canto.',
        imagem: 'img/iara.jpg'
    },
    {
        id: 4,
        titulo: 'Boto Cor-de-Rosa',
        regiao: 'norte',
        regiaoNome: 'Norte',
        tag: 'Encantador',
        descricao: 'O Boto Cor-de-Rosa é um golfinho de água doce que vive nos rios amazônicos. Segundo a lenda, durante as festas juninas, ele se transforma em um jovem elegante, vestido de branco e usando um chapéu para esconder o espiráculo (o furo no topo da cabeça). Ele então conquista as moças mais bonitas da aldeia, as engravida e desaparece no amanhecer, voltando a ser golfinho. A lenda é usada para explicar gravidezes indesejadas e é uma das histórias mais contadas na região Norte. O boto é considerado um ser encantado e, por isso, ninguém pode matá-lo, pois isso traria má sorte. Muitos ribeirinhos acreditam que o boto é um protetor das águas e que sua presença indica boa pesca.',
        curiosidade: 'Ele usa um chapéu para esconder o espiráculo durante suas aventuras amorosas. Dizem que, para ver o boto em sua forma humana, é preciso usar uma lente de aumento ou olhar entre as pernas durante a festa.',
        imagem: 'img/boto.jpg'
    },
    {
        id: 5,
        titulo: 'Mapinguari',
        regiao: 'norte',
        regiaoNome: 'Norte',
        tag: 'Monstro',
        descricao: 'O Mapinguari é uma criatura lendária da Amazônia, descrita como um gigante coberto de pelos, com garras enormes e uma boca localizada no ventre, que emite um cheiro pútrido e um rugido ensurdecedor. Dizem que ele é um parente distante da preguiça-gigante extinta, mas que ainda habita as florestas mais profundas e inacessíveis. A lenda conta que o Mapinguari é um protetor das matas e ataca caçadores e madeireiros que desmatam a floresta. Sua origem está ligada aos relatos de indígenas e seringueiros, que afirmam ter visto suas pegadas e ouvido seus urros. Alguns pesquisadores acreditam que a lenda possa ter sido inspirada em avistamentos de preguiças-gigantes pré-históricas, o que torna o Mapinguari uma das criaturas mais fascinantes e misteriosas do folclore brasileiro.',
        curiosidade: 'Alguns pesquisadores acreditam que a lenda do Mapinguari pode ter sido inspirada em avistamentos de preguiças-gigantes pré-históricas. Dizem que ele só pode ser morto com uma flecha envenenada ou um tiro no olho.',
        imagem: 'img/mapinguari.jpg'
    },
    {
        id: 6,
        titulo: 'Matinta Perera',
        regiao: 'norte',
        regiaoNome: 'Norte',
        tag: 'Assombração',
        descricao: 'A Matinta Perera é uma assombração que se manifesta como uma velha que se transforma em um pássaro noturno, geralmente o urutau, e voa sobre as casas à noite, pedindo fumo ou café. Quem nega o pedido sofre castigos, como doenças ou perdas de animais. A lenda é comum na região amazônica e é usada para assustar crianças e também para explicar o aparecimento de aves noturnas. Acredita-se que a Matinta Perera seja uma bruxa ou uma alma penada que busca redenção, e que seu assobio é um presságio de morte ou desgraça. Alguns contam que ela só aparece em noites de lua cheia e que, para se livrar dela, é preciso oferecer-lhe fumo ou café, que ela aceita e depois some.',
        curiosidade: 'Dizem que a Matinta Perera é uma bruxa que pode se transformar em urutau (ave noturna). Se você ouvir seu assobio, deve oferecer-lhe fumo ou café para não ser amaldiçoado.',
        imagem: 'img/matinta-perera.jpg'
    },
    {
        id: 7,
        titulo: 'Cobra-Grande',
        regiao: 'norte',
        regiaoNome: 'Norte',
        tag: 'Lendária',
        descricao: 'A Cobra-Grande, também conhecida como Cobra-Norato, é uma serpente gigante que habita os rios amazônicos. Ela é capaz de virar canoas, arrastar pessoas para o fundo e até engolir animais inteiros. Acredita-se que ela seja uma entidade protetora das águas e das matas, e que sua ira é despertada por aqueles que poluem os rios ou matam animais. A lenda é muito antiga entre os indígenas, que a veem como um ser sagrado e poderoso. Muitos ribeirinhos afirmam ter visto a Cobra-Grande, descrevendo-a como uma serpente de mais de 20 metros de comprimento, com escamas brilhantes e olhos de fogo. Dizem que ela pode se transformar em uma bela mulher para enganar os homens incautos.',
        curiosidade: 'Acredita-se que ela seja uma das entidades mais poderosas da floresta, e seu avistamento é mau agouro. Alguns contam que a Cobra-Grande é a mãe de todas as cobras e que protege o tesouro escondido no fundo dos rios.',
        imagem: 'img/cobra-grande.jpg'
    },
    {
        id: 8,
        titulo: 'Cuca',
        regiao: 'nordeste',
        regiaoNome: 'Nordeste',
        tag: 'Assustadora',
        descricao: 'A Cuca é uma bruxa velha e enrugada, com cabeça de jacaré, que sequestra crianças desobedientes para comê-las. Ela é uma das personagens mais temidas do folclore brasileiro, sendo famosa pela cantiga de ninar "Nana neném que a Cuca vem pegar". A lenda da Cuca tem origem europeia, mas foi adaptada ao Brasil com elementos indígenas e africanos. Ela é frequentemente representada como uma mulher com cabelos brancos e olhos vermelhos, que ronda as casas durante a noite em busca de crianças que não dormem. Apesar de assustadora, a Cuca também é usada pelos pais para educar os filhos, fazendo-os dormir cedo. Em algumas regiões, ela é confundida com a "Bruxa do Saci", mas na verdade são entidades distintas.',
        curiosidade: 'A Cuca é uma das personagens mais temidas do folclore, mas também é usada pelos pais para educar os filhos. Dizem que ela só aparece em noites de sexta-feira e que seu grito é ouvido a léguas de distância.',
        imagem: 'img/cuca.jpg'
    },
    {
        id: 9,
        titulo: 'Boitatá',
        regiao: 'nordeste',
        regiaoNome: 'Nordeste',
        tag: 'Fogo',
        descricao: 'O Boitatá é uma grande serpente de fogo que protege as matas contra incêndios e invasores. Seus olhos brilham como brasas na escuridão e sua visão é tão aguçada que ele enxerga através do calor dos corpos. A lenda é originária dos índios tupis, que acreditavam que o Boitatá era um espírito da floresta que punia os caçadores que atiravam em animais sem necessidade. Ele é descrito como uma cobra de fogo que corre pelas matas, deixando um rastro de chamas. Embora seja temido, o Boitatá é visto como um protetor da natureza, e muitos acreditam que sua presença é um sinal de que a floresta está saudável. Em algumas regiões, ele é confundido com o fogo-fátuo, um fenômeno natural que ocorre em pântanos.',
        curiosidade: 'Dizem que o Boitatá é cego, mas enxerga através do calor dos corpos e das chamas. Ele só ataca aqueles que desrespeitam a natureza, e sua pele é tão quente que pode queimar quem a toca.',
        imagem: 'img/boitata.jpg'
    },
    {
        id: 10,
        titulo: 'Corpo-Seco',
        regiao: 'nordeste',
        regiaoNome: 'Nordeste',
        tag: 'Amaldiçoado',
        descricao: 'O Corpo-Seco é o espírito de um homem mau que foi rejeitado pela terra e pelo céu. Ele vaga pela Terra como uma caveira andante, assustando viajantes e pedindo esmolas ou fumo. A lenda conta que ele foi um homem cruel em vida, que maltratava a todos, e por isso, ao morrer, não foi aceito nem no Céu nem no Inferno, ficando condenado a vagar eternamente. O Corpo-Seco é descrito como um esqueleto coberto por uma pele seca e enrugada, que emite um cheiro de morte e podridão. Ele aparece principalmente em estradas desertas, pedindo ajuda ou querendo conversar com os viajantes. Quem lhe nega algo, sofre maldições. A lenda é comum no Nordeste e é usada para explicar fenômenos como o aparecimento de ossos em locais isolados.',
        curiosidade: 'Dizem que ele foi enterrado em pé e que seu corpo não se decompôs, daí o nome "Corpo-Seco". Para se livrar dele, é preciso rezar um Pai Nosso ou oferecer-lhe fumo.',
        imagem: 'img/corpo-seco.jpg'
    },
    {
        id: 11,
        titulo: 'Negrinho do Pastoreio',
        regiao: 'nordeste',
        regiaoNome: 'Nordeste',
        tag: 'Mítico',
        descricao: 'O Negrinho do Pastoreio é um menino escravo que foi castigado por seu senhor por ter perdido alguns cavalos. Após ser chicoteado e abandonado em um formigueiro, ele foi encontrado morto, mas sua alma continuou vagando, montada em um cavalo branco, ajudando viajantes perdidos e protegendo os animais. A lenda é muito forte no Rio Grande do Sul, mas também é contada em partes do Nordeste e Centro-Oeste. O Negrinho do Pastoreio é considerado um santo popular, e muitas pessoas fazem promessas a ele em troca de milagres. Dizem que ele aparece em noites de lua cheia, montado em um cavalo branco, e que seu assobio é ouvido por aqueles que precisam de ajuda. Sua história é uma das mais emocionantes do folclore, simbolizando a luta contra a injustiça e a opressão.',
        curiosidade: 'Ele é considerado um santo popular no Rio Grande do Sul e em partes do Nordeste e Centro-Oeste. Muitas pessoas acendem velas e deixam oferendas de fumo e doces para ele em encruzilhadas.',
        imagem: 'img/negrinho-pastoreio.jpg'
    },
    {
        id: 12,
        titulo: 'Mula sem Cabeça',
        regiao: 'nordeste',
        regiaoNome: 'Nordeste',
        tag: 'Amaldiçoada',
        descricao: 'A Mula sem Cabeça é a alma de uma mulher que se relacionou com um padre e foi amaldiçoada. Ela se transforma em uma mula de fogo, com cabeça de chamas, que corre pelas estradas durante as noites de quinta-feira, espalhando terror. A lenda é comum em todo o Brasil, mas especialmente no Nordeste, onde é usada para assustar crianças e também para explicar o aparecimento de animais estranhos. Dizem que a Mula sem Cabeça é uma criatura veloz e que seu relincho é tão forte que pode ser ouvido a quilômetros de distância. Para se livrar da maldição, a mulher deve se confessar e fazer penitência, mas enquanto não o fizer, continuará a vagar. Alguns contam que, se alguém conseguir arrancar o freio da mula, ela se transformará de volta em mulher e ficará livre da maldição.',
        curiosidade: 'Para se livrar da maldição, é preciso furar a mula com um objeto cortante ou rezar. Também dizem que ela não pode atravessar água corrente, pois isso a faz recuar.',
        imagem: 'img/mula-sem-cabeca.jpg'
    },
    {
        id: 13,
        titulo: 'Cabra-Cabriola',
        regiao: 'nordeste',
        regiaoNome: 'Nordeste',
        tag: 'Fantasma',
        descricao: 'A Cabra-Cabriola é uma cabra que aparece nas estradas do sertão, montada por um cavaleiro sem cabeça. A lenda está ligada a pactos com o diabo, pois acredita-se que o cavaleiro fez um acordo com o demônio para ter poder e riqueza, mas em troca de sua alma. A Cabra-Cabriola é descrita como uma cabra preta com olhos de fogo, que corre em alta velocidade e assusta viajantes. Ela é frequentemente associada a noites de tempestade e a lugares desertos. Muitos sertanejos afirmam ter visto a Cabra-Cabriola, descrevendo-a como uma visão aterradora. A lenda é usada para explicar fenômenos como o sumiço de animais e o aparecimento de pegadas misteriosas.',
        curiosidade: 'Acredita-se que a Cabra-Cabriola é o resultado de um pacto entre um homem e o diabo, que o transformou em bode. Para se proteger, é preciso carregar um ramo de arruda ou fazer o sinal da cruz.',
        imagem: 'img/cabra-cabriola.jpg'
    },
    {
        id: 14,
        titulo: 'Dona de Casa (Lenda do Pantanal)',
        regiao: 'centro-oeste',
        regiaoNome: 'Centro-Oeste',
        tag: 'Assombração',
        descricao: 'A Dona de Casa é uma mulher que aparece nas casas do Pantanal, pedindo comida e fogo. Dizem que ela é uma alma penada que busca redenção por ter sido uma mulher má em vida. A lenda é contada por ribeirinhos e fazendeiros, que afirmam ter visto a Dona de Casa em noites de lua cheia. Ela é descrita como uma mulher vestida de branco, com cabelos longos e olhos tristes. Quem a acolhe e lhe oferece comida e fogo, é recompensado com boa sorte; quem a nega, sofre desgraças. A Dona de Casa é considerada uma figura protetora das famílias que a ajudam, e muitos acreditam que ela é uma mensageira dos espíritos da natureza.',
        curiosidade: 'Ela é conhecida por ser uma figura protetora das famílias que a acolhem. Dizem que, se você oferecer a ela fumo e café, ela lhe dará sorte nas pescarias e nas colheitas.',
        imagem: 'img/dona-de-casa.jpg'
    },
    {
        id: 15,
        titulo: 'Romãozinho',
        regiao: 'centro-oeste',
        regiaoNome: 'Centro-Oeste',
        tag: 'Travesso',
        descricao: 'Romãozinho é um menino que aparece em casas de fazenda, escondendo objetos e fazendo travessuras. Ele é considerado um duende ou espírito brincalhão, filho de uma índia com um fazendeiro, que vaga pela região após sua morte prematura. A lenda é comum no Centro-Oeste, especialmente em áreas rurais, onde os moradores contam histórias de objetos que desaparecem e reaparecem em lugares inusitados. Romãozinho é descrito como um menino de cabelos loiros e olhos azuis, vestido com roupas de fazendeiro. Ele adora pregar peças, mas também pode ser útil, ajudando a encontrar objetos perdidos. Muitos acreditam que ele é um protetor das crianças e dos animais.',
        curiosidade: 'Dizem que ele é filho de uma índia com um fazendeiro, e que vaga pela região. Para agradá-lo, os moradores costumam deixar um prato de comida ou um doce na janela.',
        imagem: 'img/romãozinho.jpg'
    },
    {
        id: 16,
        titulo: 'Minhocão',
        regiao: 'centro-oeste',
        regiaoNome: 'Centro-Oeste',
        tag: 'Monstro',
        descricao: 'O Minhocão é uma cobra gigante que habita os rios e lagos do Pantanal. Ela é capaz de causar ondas, virar canoas e até arrastar pessoas para o fundo, mas não costuma atacar humanos, a menos que seja provocada. A lenda do Minhocão é muito antiga entre os povos indígenas do Pantanal, que a veem como um animal sagrado. Dizem que o Minhocão é um parente da sucuri, mas muito maior, podendo atingir dezenas de metros de comprimento. Muitos pescadores afirmam ter visto o Minhocão emergir das águas, descrevendo-o como uma serpente escura com olhos de fogo. Acredita-se que ele seja um protetor dos rios e que sua presença indica boas pescas. Alguns contam que o Minhocão pode se transformar em um homem para enganar os pescadores.',
        curiosidade: 'Dizem que o Minhocão é um animal pré-histórico que sobreviveu em regiões remotas. Para acalmá-lo, os pescadores costumam fazer oferendas de peixe ou fumo antes de entrar no rio.',
        imagem: 'img/minhocao.jpg'
    },
    {
        id: 17,
        titulo: 'Lobisomem',
        regiao: 'sudeste',
        regiaoNome: 'Sudeste',
        tag: 'Lendário',
        descricao: 'O Lobisomem é um homem que se transforma em lobo durante as noites de lua cheia. Acredita-se que ele seja o sétimo filho homem de uma família, ou que tenha sido amaldiçoado por ter cometido um pecado grave. A lenda é comum em todo o Brasil, mas tem variações regionais. No Sudeste, especialmente em Minas Gerais, acredita-se que o Lobisomem pode ser curado se for ferido com uma bala de prata. Ele é descrito como um homem com pelos por todo o corpo, olhos amarelos e garras afiadas, que uiva para a lua e ataca rebanhos. Muitos contam que o Lobisomem só se transforma quando a lua está cheia, e que durante o dia ele é uma pessoa comum. A lenda é usada para explicar o aparecimento de animais mortos e o sumiço de pessoas em áreas rurais.',
        curiosidade: 'Em Minas Gerais, dizem que o lobisomem pode ser curado se for ferido com uma bala de prata. Também acreditam que ele não pode atravessar água corrente, pois isso o faz recuar.',
        imagem: 'img/lobisomem.jpg'
    },
    {
        id: 18,
        titulo: 'Caipora',
        regiao: 'sudeste',
        regiaoNome: 'Sudeste',
        tag: 'Protetora',
        descricao: 'A Caipora é uma índia pequena e peluda que vive nas matas, montada em um porco-do-mato. Ela protege os animais e assusta caçadores que matam sem necessidade. A lenda da Caipora é originária dos índios tupis, que a viam como uma entidade protetora da fauna. Ela é descrita como uma mulher de estatura baixa, com cabelos longos e pretos, e pele escura, que emite gritos agudos para afugentar os caçadores. A Caipora adora fumo e cachaça, e muitos caçadores deixam oferendas para ela antes de entrar na mata, para que ela os deixe caçar em paz. Dizem que ela também pode ajudar aqueles que se perdem na floresta, guiando-os para o caminho de casa. Sua figura é uma das mais importantes para a preservação ambiental no imaginário popular.',
        curiosidade: 'Ela adora fumo e cachaça. Os caçadores costumam deixar oferendas para acalmá-la. Dizem que, se você a vir, deve oferecer-lhe um cigarro ou uma garrafa de cachaça para não ser atacado.',
        imagem: 'img/caipora.jpg'
    },
    {
        id: 19,
        titulo: 'Cidade Encantada',
        regiao: 'sudeste',
        regiaoNome: 'Sudeste',
        tag: 'Misteriosa',
        descricao: 'A Cidade Encantada é uma cidade que aparece e desaparece, geralmente em regiões de minas, como Minas Gerais e Goiás. Dizem que ela é habitada por seres mágicos e que guarda tesouros inimagináveis. A lenda da Cidade Encantada é uma das mais fascinantes do folclore brasileiro, pois mistura elementos históricos e místicos. Muitos acreditam que a cidade seja um portal para outro mundo, onde o tempo não passa e onde os seres são imortais. Alguns contam que, em noites de lua cheia, é possível ouvir sinos e vozes vindas da cidade, mas que aqueles que tentam entrar desaparecem para sempre. A Cidade Encantada é também associada a antigas minas de ouro e pedras preciosas, o que atrai aventureiros em busca de riquezas.',
        curiosidade: 'A lenda é comum em Minas Gerais e Goiás, onde minas abandonadas são associadas a essa cidade fantasma. Dizem que, para ver a cidade, é preciso ter fé e não ter medo.',
        imagem: 'img/cidade-encantada.jpg'
    },
    {
        id: 20,
        titulo: 'Cabeça de Cuia',
        regiao: 'sudeste',
        regiaoNome: 'Sudeste',
        tag: 'Assombração',
        descricao: 'A Cabeça de Cuia é o espírito de uma mulher que foi decapitada e agora vaga com a cabeça em uma cuia (cabaça). Ela aparece em noites de lua cheia, assustando viajantes e pedindo vingança contra os homens que a maltrataram em vida. A lenda é comum em Minas Gerais e São Paulo, onde é contada como uma história de terror para assustar crianças. Dizem que a Cabeça de Cuia é uma mulher de beleza estonteante, mas que sua cabeça está sempre coberta por um pano, escondendo sua terrível aparência. Ela é uma das assombrações mais temidas, pois sua presença é considerada um presságio de morte. Alguns contam que, para se livrar dela, é preciso oferecer-lhe um espelho, para que ela veja sua própria imagem e desapareça.',
        curiosidade: 'Dizem que ela procura vingança contra os homens que a maltrataram em vida. Para se proteger, é preciso carregar um ramo de arruda ou um dente de alho.',
        imagem: 'img/cabeca-de-cuia.jpg'
    },
    {
        id: 21,
        titulo: 'Pé de Garrafa (Lenda Gaúcha)',
        regiao: 'sul',
        regiaoNome: 'Sul',
        tag: 'Travesso',
        descricao: 'O Pé de Garrafa é uma criatura baixinha que usa uma garrafa como perna e vive nos campos do Sul. Ele adora pregar peças em viajantes e fazer assovios para confundir os tropeiros. A lenda é muito popular no Rio Grande do Sul, onde é contada como uma história de duende travesso. O Pé de Garrafa é descrito como um homem pequeno, com uma garrafa no lugar da perna, que anda pulando e fazendo barulho. Ele é considerado um protetor dos animais, mas também um brincalhão que gosta de confundir os viajantes. Muitos gaúchos afirmam ter ouvido os assovios do Pé de Garrafa em noites de vento, e alguns acreditam que ele pode ser visto pulando nos campos abertos. A lenda é usada para explicar fenômenos como o aparecimento de pegadas estranhas ou o sumiço de objetos.',
        curiosidade: 'Ele é considerado um protetor dos animais, mas também um brincalhão que confunde os tropeiros. Dizem que, para ver o Pé de Garrafa, é preciso estar em um campo aberto durante uma tempestade.',
        imagem: 'img/pe-de-garrafa.jpg'
    },
    {
        id: 22,
        titulo: 'Bicho-papão (versão Sul)',
        regiao: 'sul',
        regiaoNome: 'Sul',
        tag: 'Assombração',
        descricao: 'O Bicho-papão é um monstro que aparece para crianças desobedientes. No Sul, ele é descrito como uma criatura peluda com olhos brilhantes e garras afiadas, que vive em porões e armários. A lenda é usada pelos pais para assustar os filhos e fazê-los se comportar. O Bicho-papão é uma figura comum em todo o Brasil, mas cada região tem sua própria versão. No Sul, ele é conhecido por seu grito ensurdecedor e por sua capacidade de se esconder nos lugares mais inesperados. Muitos acreditam que ele é um espírito ou um ser sobrenatural que se alimenta do medo das crianças. Dizem que, para se proteger, é preciso deixar uma luz acesa durante a noite e não se esconder debaixo das cobertas.',
        curiosidade: 'É usado pelos pais para assustar os filhos e fazê-los se comportar. Dizem que o Bicho-papão só aparece quando as crianças estão sozinhas e que ele desaparece quando alguém chega.',
        imagem: 'img/bicho-papao.jpg'
    },
    {
        id: 23,
        titulo: 'Saci-Pererê (versão Sul)',
        regiao: 'sul',
        regiaoNome: 'Sul',
        tag: 'Travesso',
        descricao: 'No Sul, o Saci-Pererê é conhecido por assustar tropeiros e esconder objetos nas fazendas. Sua risada ecoa nos campos de erva-mate, e ele é visto como um duende que protege os animais e as plantações. A lenda do Saci no Sul tem variações em relação à versão do Norte: aqui ele é descrito como um menino de cabelos vermelhos e pele clara, que usa um gorro de lã e fuma cachimbo. Ele é um brincalhão, mas também pode ser vingativo se for provocado. Muitos agricultores deixam oferendas de fumo e doces para ele, para que ele proteja as colheitas. O Saci do Sul também é associado aos redemoinhos de vento que surgem nos campos abertos, e acredita-se que ele possa ser capturado com uma peneira ou um rosário.',
        curiosidade: 'No Sul, ele é frequentemente associado aos redemoinhos que surgem nos campos abertos. Dizem que, se você vir um redemoinho, deve jogar um punhado de sal ou uma peneira para prender o Saci.',
        imagem: 'img/saci-perere.jpg'
    },
    {
        id: 24,
        titulo: 'Mãe d\'Água (versão Sul)',
        regiao: 'sul',
        regiaoNome: 'Sul',
        tag: 'Sedutora',
        descricao: 'A Mãe d\'Água é uma sereia que vive nos rios e lagoas do Sul. Com seu canto hipnotizante, ela atrai pescadores e viajantes para o fundo das águas, onde os devora ou os transforma em seres aquáticos. Ela é parente da Iara, mas é considerada mais perigosa, pois não poupa ninguém. A lenda da Mãe d\'Água é muito forte no Rio Grande do Sul e em Santa Catarina, onde é contada como uma história de terror para manter as crianças longe dos rios. Ela é descrita como uma mulher de beleza estonteante, com cabelos verdes e olhos de água, que emerge das águas em noites de lua cheia. Dizem que, para se proteger, é preciso evitar nadar em rios durante a noite e nunca olhar diretamente para a Mãe d\'Água.',
        curiosidade: 'Ela é parente da Iara, mas é considerada mais perigosa, pois não poupa ninguém. Para se livrar dela, é preciso jogar uma pedra ou um galho na água para distraí-la.',
        imagem: 'img/mae-dagua-sul.jpg'
    },
    {
        id: 25,
        titulo: 'Boitatá (versão Sul)',
        regiao: 'sul',
        regiaoNome: 'Sul',
        tag: 'Fogo',
        descricao: 'No Sul, o Boitatá é visto como uma cobra de fogo que protege os campos contra incêndios e invasores. Os gaúchos acreditam que ele aparece antes de temporais para avisar sobre perigos iminentes. A lenda do Boitatá no Sul tem raízes nas tradições indígenas e também nas crenças dos tropeiros. Ele é descrito como uma cobra de fogo que corre pelos campos, deixando um rastro de chamas. Dizem que sua visão é tão aguçada que ele pode ver a quilômetros de distância, e que sua presença é um sinal de que a natureza está em equilíbrio. Muitos agricultores afirmam ter visto o Boitatá em noites de tempestade, e acreditam que ele afasta os raios e as queimadas. A lenda é uma das mais importantes para a preservação dos campos e das florestas no Sul.',
        curiosidade: 'Os gaúchos acreditam que ele aparece antes de temporais para avisar sobre perigos. Dizem que o Boitatá é invulnerável ao fogo e que sua pele é feita de chamas.',
        imagem: 'img/boitata.jpg'
    },
    {
        id: 26,
        titulo: 'Cuca (versão Sudeste)',
        regiao: 'sudeste',
        regiaoNome: 'Sudeste',
        tag: 'Assustadora',
        descricao: 'No Sudeste, a Cuca é representada como uma bruxa que rouba crianças, mas também como uma figura folclórica das festas juninas. Ela é descrita como uma mulher velha com cabelos brancos e olhos vermelhos, que ronda as casas durante a noite em busca de crianças desobedientes. A lenda da Cuca no Sudeste é muito parecida com a do Nordeste, mas com algumas variações: aqui, ela é associada ao fogo e à noite de São João, onde as fogueiras são acesas para espantá-la. Muitos acreditam que a Cuca é a mulher do Saci, e que ela o ajuda em suas travessuras. Dizem que, para se proteger, é preciso dormir com uma vela acesa ou carregar um ramo de arruda. A Cuca é uma das personagens mais temidas, mas também uma das mais queridas, por sua ligação com as festas populares.',
        curiosidade: 'Em algumas regiões, ela é confundida com a "Bruxa do Saci". Dizem que ela só aparece em noites de sexta-feira e que seu canto é ouvido por toda a vizinhança.',
        imagem: 'img/cuca.jpg'
    },
    {
        id: 27,
        titulo: 'Negrinho do Pastoreio (versão Centro-Oeste)',
        regiao: 'centro-oeste',
        regiaoNome: 'Centro-Oeste',
        tag: 'Mítico',
        descricao: 'No Centro-Oeste, a lenda do Negrinho do Pastoreio é muito forte entre os peões e fazendeiros. Ele é visto como um protetor dos cavalos e dos animais, e muitos acreditam que ele aparece em noites de lua cheia para ajudar os viajantes perdidos. A lenda é a mesma do Nordeste, mas com elementos regionais: aqui, o Negrinho é descrito como um menino de pele escura, vestido com roupas de couro, montado em um cavalo branco. Ele é considerado um santo popular, e muitas pessoas acendem velas e deixam oferendas de fumo e doces para ele em encruzilhadas. Dizem que ele é muito generoso com aqueles que o ajudam, mas que também pode ser vingativo se for provocado. A lenda do Negrinho do Pastoreio é uma das mais emocionantes do folclore, simbolizando a luta contra a injustiça e a opressão.',
        curiosidade: 'Muitos fazendeiros deixam oferendas de fumo e doces para ele. Dizem que, se você estiver perdido, ele pode aparecer montado em seu cavalo branco para guiá-lo para casa.',
        imagem: 'img/negrinho-pastoreio.jpg'
    }
];

const grid = document.getElementById('gridCards');
const loading = document.getElementById('loading');
const filtroBotoes = document.querySelectorAll('.filtros button');
const navLinks = document.querySelectorAll('nav a[data-filtro]');

let filtroAtual = 'todos';

function carregarLendas() {
    loading.style.display = 'block';
    grid.style.display = 'none';

    setTimeout(() => {
        loading.style.display = 'none';
        grid.style.display = 'grid';
        renderizarCards(filtroAtual);
    }, 300);
}

function renderizarCards(filtro = 'todos') {
    const filtrados = filtro === 'todos' ?
        lendas :
        lendas.filter(l => l.regiao === filtro);

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
    const lenda = lendas.find(l => l.id === id);
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
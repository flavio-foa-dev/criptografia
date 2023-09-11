# Criptografia
Nodejs | Criptgrafia | Token | Algoritimos de Cripto |


Existem dezenas de algoritmos de hash e cada um pode funcionar de maneira um pouco diferente. Mas em todos eles é fornecida uma entrada e o programa a altera para uma outra forma.

- MD5: Este é um dos primeiros algoritmos a obter ampla aprovação. Ele foi projetado em 1991 por Ronald Rivest e, na época, foi considerado extremamente seguro. Desde então, hackers descobriram como decodificar o algoritmo e podem fazê-lo em segundos. A maioria dos especialistas acha que não é seguro para uso generalizado, pois é muito fácil de ser desmontado.

As colisões contra MD5 podem ser calculadas em segundos, o que torna o algoritmo inadequado para a maioria dos casos de uso em que um hash criptográfico é necessário. MD5 produz um resumo de hash de 128 bits (16 bytes).

- SHA: Os algoritmos da família SHA (Secure Hash Algorithms) são considerados mais seguros. As primeiras versões foram desenvolvidas pelo governo dos Estados Unidos, mas outros programadores se basearam nas estruturas originais e tornaram as variações posteriores mais rigorosas e mais difíceis de quebrar. Em geral, quanto maior o número após as letras "SHA", mais recente o lançamento e mais complexo o programa.

Por exemplo, o SHA-3 inclui fontes de aleatoriedade no código, o que o torna muito mais difícil de decifrar do que os anteriores. Tornou-se um algoritmo de hash padrão em 2015 por esse motivo.

- SHA-0: É uma função hash criptográfica, projetada pela Agência de Segurança Nacional (NSA) dos Estados Unidos, que fornece um hash de 160 bits. O SHA-0 foi retirado logo após a publicação devido a uma "falha significativa" não revelada e substituído pela versão ligeiramente revisada SHA-1.

A descoberta de fraquezas no design do SHA-0 foi atribuída à NSA, e em 1998 foi confirmado por Antoine Joux e Florent Chabaud um ataque teórico que permite obter uma colisão entre dados criptografados utilizando SHA-0.

- SHA-1: SHA-1 (Secure Hash Algorithm 1) é uma função de dispersão criptográfica (ou função hash criptográfica) projetada pela Agência de Segurança Nacional (NSA) dos Estados Unidos e é um Padrão Federal de Processamento de Informação dos Estados Unidos publicado pelo Instituto Nacional de Padrões e Tecnologia (NIST).

SHA-1 utiliza ao todo um valor de 160 bits, que é equivalente a 20 bytes, para a dispersão criptográfica. Por causa desses valores, a criptografia SHA-1 é conhecida como resumo da mensagem. Cada valor de dispersão do SHA-1 é visto dentro do método como um número hexadecimal constituído por 40 dígitos.

Publicada em 1995, SHA-1 é muito similar à SHA-0, mas altera a especificação de dispersão para corrigir as fraquezas alegadas. Entretanto, em 2005, criptoanalistas descobriram ataques sobre SHA-1, sugerindo que o algoritmo poderia não ser seguro o suficiente para uso continuado. O NIST exigiu que várias aplicações utilizadas em agências federais mudassem para SHA-2 depois de 2010 devido à fraqueza descoberta.

- SHA-2: SHA-2 (Secure Hash Algorithm 2) é um conjunto de funções de hash criptográficas projetadas pela Agência de Segurança Nacional dos Estados Unidos (NSA), publicadas pela primeira vez em 2001. O SHA-2 inclui mudanças significativas em relação ao seu antecessor, o SHA-1, no qual foram encontradas fraquezas.

A família SHA-2 consiste em seis funções de hash com resumos (valores de hash) que são SHA-224, SHA-256, SHA-384, SHA-512, SHA-512/ 224, SHA-512/256. Elas são construídas com o intuito de serem muito resistentes à colisão.

- SHA-256: Esse algoritmo faz parte da família de algoritmos SHA 2 e é uma das mais famosas e seguras funções de hash criptográfica. Publicado em 2001, foi um esforço conjunto entre a NSA (Agência de Segurança Nacional) e o NIST (Instituto Nacional de Padrões e Tecnologia) dos EUA para introduzir um sucessor da família SHA 1, que aos poucos estava perdendo força contra ataques de força bruta. SHA-256 produz um resumo de hash de 256 bits (32 bytes).

A título de curiosidade, o Bitcoin utiliza SHA-256 duplo, o que significa que aplica o SHA-256 duas vezes nos dados para garantir ainda mais segurança.

- SHA-3: SHA-3 (Secure Hash Algorithm 3) foi lançado pelo NIST (Instituto Nacional de Padrões e Tecnologia) dos EUA em 5 de agosto de 2015, ele é o mais recente membro da família de padrões Secure Hash Algorithm.

O SHA-3 não se destina a substituir o SHA-2, pois nenhum ataque significativo ao SHA-2 foi demonstrado. Por causa dos ataques bem-sucedidos ao MD5, SHA-0 e SHA-1, o NIST percebeu a necessidade de um hash criptográfico diferente e alternativo, que se tornou SHA-3, que embora faça parte da mesma série de padrões, é internamente diferente da estrutura semelhante a MD5, SHA-1 e SHA-2 .

SHA-3 fornece os mesmos tamanhos de saída que SHA-2: 224, 256, 384 e 512 bits.

- RIPEMD-160: é uma função de hash criptográfica de 160 bits. Ele destina-se a ser usado como uma substituição para as funções de hash MD4, MD5 e RIPEMD de 128 bits. Embora as funções RIPEMD sejam menos populares que SHA-1 e SHA-2 , elas são usadas, entre outras, em Bitcoin e outras criptomoedas baseadas em Bitcoin.

RIPEMD160 ainda não foi quebrado, mas foi substituído pelos algoritmos de hash SHA-256 e SHA-512 e suas classes derivadas. SHA256 e SHA512 oferecem melhor segurança e desempenho do que RIPEMD160. Utilize RIPEMD160 apenas para compatibilidade com aplicativos e dados herdados.

- BLAKE3: é uma função de hash criptográfica, anunciada em 9 de janeiro de 2020, que se caracteriza por ser muito mais rápida que MD5, SHA-1, SHA-2, SHA-3 e BLAKE2 (sua antecessora), além de ser mais segura, ao contrário de MD5 e SHA-1, que são rápidas porém menos seguras.

Ela foi projetada para aplicações como verificação de integridade de arquivos, autenticação de mensagens e geração de dados para assinaturas digitais criptográficas. O BLAKE3 não foi projetado para hash de senhas, pois visa calcular hashes o mais rápido possível (para senhas, é recomendável utilizar as funções bcrypt, scrypt ou Argon2).

O tamanho da saída padrão do BLAKE3 é 256 bits.


O que são funções de hash e seu funcionamento prático para gerar dados que não podem ser restaurados à seu valor original;
Quais são algumas de suas aplicações práticas, como o uso em sistemas de autenticação;
A implementar os métodos do módulo crypto, como o createHash;
Como utilizar o “sal” para melhorar a eficácia das hashes, aumentando drasticamente a quantidade de possibilidades existentes para um algoritmo de encriptação.

Os métodos de encriptação e desencriptação do módulo crypto são essenciais para a criação de chaves com NodeJS. Nesse sentido, vamos nos aprofundar sobre a estrutura dos métodos?

Método crypto.createCipheriv()
O método crypto.createCipheriv() funciona como uma interface embutida no módulo crypto que retorna um objeto Cipher com os parâmetros do algoritmo, a chave e o vetor de inicialização (iv - do inglês “Initialization Vector”).

A sintaxe é:

crypto.createCipheriv(algoritmo, chave, iv, opcoes)COPIAR CÓDIGO
Percebemos então que o método aceita quatro parâmetros:

algoritmo: é um dado do tipo string que está interligado com a biblioteca de implementação dos protocolos SSL e TLS, a OpenSSL . Alguns dos exemplos foram utilizados no curso, como aes256 ou rsa. Nas versões mais recentes da OpenSSL o comando no terminal openssl list -cipher-algorithms mostra os algoritmos de cifra disponíveis.
chave (key): é a chave bruta usada pelo algoritmo e vetor de inicialização. A chave pode ser um KeyObject ou do tipo secret.
iv: o vetor de inicialização que é responsável por fornecer um estado inicial. O iv precisa ser único ou imprevisível. O ideal é que seja criptografado de forma aleatória e não precisa ser secreto. Caso não necessite de um vetor de inicialização, o iv pode ser do tipo null.
options (opções): o último parâmetro é um argumento opcional, que pode alterar o modo de operação da função, definindo algumas configurações específicas.
Método crypto.createDecipheriv()
O método crypto.createDecipheriv() funciona de forma bem similar ao createCipheriv(). No entanto, a interface retorna um objeto Decipher e os parâmetros são os mesmos. Sua sintaxe é:

crypto.createDecipheriv( algoritmo, chave, iv, opcoes)COPIAR CÓDIGO
Método crypto.generateKeyPairSync()
O método crypto.generateKeyPairSync() também funciona como uma interface do módulo crypto. Porém, cria um novo e assimétrico par de chaves do tipo especificado que retorna um objeto com uma private key e public key que pode ser uma string, buffer ou KeyObject. Sua sintaxe é:

crypto.generateKeyPairSync( type, options)COPIAR CÓDIGO
O método aceita dois parâmetros, que são:

type (tipo): É do tipo string e deve incluir um ou mais dos seguintes algoritmos: ‘rsa’, ‘dsa’, ‘ec’, ‘ed25519’, ‘ed448’, ‘x25519’, ‘x448’, ou ‘dh’.

options (opções): É do tipo objeto. Ele pode conter os parâmetros modulusLength; publicExponent; divisorLength; namedCurve; prime; primeLength; generator; groupName; publicKeyEncoding; privateKeyEncoding.


# JWT tokens

As maneiras mais fáceis de armazenar um token JWT no lado do cliente são o localStorage e o sessionStorage.

A maioria das pessoas tende a armazenar seus JWTs no localStorage do navegador web, porém essa tática deixa seus aplicativos abertos a um ataque chamado XSS. Nesse tipo de ataque, um invasor aproveita o fato de que o armazenamento local é acessível por qualquer código JavaScript executado no mesmo domínio da aplicação. Assim, por exemplo, se o invasor encontrar uma maneira de injetar código JavaScript mal-intencionado em seu aplicativo, seu token JWT estará imediatamente disponível para eles. Portanto, se deseja segurança em suas aplicações, não armazene um JWT no localStorage.

Mas e no sessionStorage? Assim como o localStorage, o armazenamento de sessão é acessível por qualquer código JavaScript executado no mesmo domínio em que o seu aplicativo está hospedado. Portanto, a única diferença entre os dois é que no sessionStorage, quando um usuário fecha o navegador, o JWT desaparecerá e o usuário terá que fazer login novamente em sua próxima visita ao aplicativo web. Portanto, evite também armazenar um JWT no sessionStorage.

A forma mais segura, se bem implementada, é utilizar cookie httpOnly para armazenar tokens JWT. Este é um tipo especial de cookie que é enviado apenas em solicitações HTTP para o servidor. Nunca é acessível (tanto para leitura quanto para escrita) a partir do JavaScript em execução no navegador e pode ter uma data de expiração definida.

Então, para manter tokens JWT seguros, é recomendável utilizar cookies httpOnly.


O que são exatamente os algoritmos criptográficos e quais parâmetros existem em cada um;
Alguns ataques (Rainbow Table, Força Bruta e Dicionário) e as vulnerabilidades que podemos estar sujeitos e devemos ter atenção enquanto implementamos soluções;
Quais recursos e atitudes podemos utilizar para mitigar problemas relacionados à nossa infraestrutura tecnológica.

Fatores humanos e quais considerações devemos levar em conta quando estamos desenvolvendo sistemas;
Como escolher requisitos de forma crítica e ponderar sobre as decisões de segurança;
Os cuidados que devemos tomar com as dependências que utilizamos e tentar conhecer os riscos associados.
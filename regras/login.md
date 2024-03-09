# Sistema de Login

<h2>Armazenamento de Usuários</h2>
<p>Os usuários são armazenados em um array e persistidos localmente através do localStorage em formato JSON. Isso implica que os dados dos usuários são mantidos localmente no navegador do usuário.</p>

<h2>Usuário Padrão</h2>
<p>Existe um usuário padrão (admin) com uma senha predefinida (P@ss1234#automacao). Este usuário é tratado como um caso especial dentro da lógica de login, permitindo o acesso sem a necessidade de ser armazenado no array de usuários.</p>

<h2>Processo de Login</h2>
<ul>
    <li>O sistema verifica primeiro se o login está sendo tentado com as credenciais do usuário padrão.</li>
    <li>Se não for o usuário padrão, o sistema carrega os usuários do localStorage e procura por um usuário que corresponda tanto ao nome de usuário quanto à senha fornecidos.</li>
    <li>Se um usuário correspondente é encontrado, o login é considerado bem-sucedido.</li>
</ul>

<h2>Sessão do Usuário</h2>
<p>Após um login bem-sucedido, o sistema armazena temporariamente os detalhes do usuário atual no sessionStorage, permitindo que o estado de login seja mantido enquanto o navegador estiver aberto.</p>

<h2>Redirecionamento após Login</h2>
<p>Após um login bem-sucedido, há um atraso de 5 segundos antes de redirecionar o usuário para a página do dashboard. Esse comportamento implica uma espera intencional antes da transição de tela.</p>

<h2>Feedback Visual</h2>
<p>O sistema fornece feedback visual através de um "snackbar" que informa o resultado da tentativa de login. Há distinção nas cores do feedback para sucesso (verde) e erro (vermelho), além de um tempo de exibição de 3 segundos para o snackbar.</p>

<hr>

<p><em>Desenvolvido com ❤️ por Automate Developers.</em></p>

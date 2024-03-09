<h1>Sistema de Registro de Usuários</h1>

<p>Este é um sistema de registro de usuários que segue diversas regras de negócio para garantir a qualidade e segurança dos dados inseridos. Abaixo estão as principais funcionalidades e regras implementadas:</p>

<h2>Funcionalidades:</h2>
<ul>
    <li><strong>Carregamento de Usuários Existentes:</strong> Antes de registrar um novo usuário, o sistema carrega os usuários existentes do armazenamento local (localStorage), permitindo a verificação contra usuários já cadastrados, se necessário.</li>
    <li><strong>Validação do Nome Completo:</strong> O nome completo não deve conter números inteiros. Essa regra garante que os nomes inseridos sejam validamente humanos e livres de dados numéricos que possam ser inseridos por erro.</li>
    <li><strong>Validação do Nome de Usuário:</strong> O nome de usuário deve conter exatamente 12 caracteres. Essa regra específica pode ser usada para uniformizar os nomes de usuário no sistema, facilitando sua identificação e gerenciamento.</li>
    <li><strong>Validação da Idade:</strong> A idade do usuário deve estar entre 18 e 65 anos. Esta regra pode ser implementada para garantir que o serviço esteja sendo oferecido a um público adulto, mas não excessivamente sênior, possivelmente devido à natureza do serviço ou produto oferecido.</li>
    <li><strong>Validação do Email:</strong> O email deve seguir um formato válido (correspondendo a uma expressão regular básica que verifica a presença de caracteres essenciais em um endereço de email). Isso ajuda a garantir que o email fornecido será utilizável para comunicações futuras.</li>
    <li><strong>Validação da Senha:</strong> A senha deve conter pelo menos uma letra maiúscula, um número e ter no mínimo 8 caracteres. Essa regra fortalece a segurança ao exigir uma senha complexa, o que é uma prática padrão em segurança de informações.</li>
    <li><strong>Armazenamento de Dados do Usuário:</strong> Após a validação, os dados do novo usuário são adicionados a um array e salvos no armazenamento local (localStorage). Isso simula um armazenamento persistente que poderia ser substituído por um banco de dados em uma implementação real.</li>
    <li><strong>Feedback de Sucesso:</strong> Após o registro bem-sucedido, uma mensagem de sucesso é exibida e, após 7 segundos, o usuário é redirecionado para a página de login. Isso oferece um feedback imediato ao usuário sobre a ação realizada e melhora a experiência do usuário guiando-o para o próximo passo lógico.</li>
    <li><strong>Prevenção do Envio Padrão do Formulário:</strong> O envio padrão do formulário é prevenido (event.preventDefault()) para que a lógica de validação e registro possa ser processada sem recarregar a página. Isso melhora a experiência do usuário ao evitar interrupções desnecessárias.</li>
    <li><strong>Feedback Visual com Snackbar:</strong> Mensagens de feedback são fornecidas por meio de um "snackbar", que fornece uma resposta visual imediata sobre o sucesso do registro. Isso é implementado com um temporizador para remover a mensagem após um curto período, mantendo a interface do usuário limpa.</li>
</ul>

<hr>

<p><em>Desenvolvido com ❤️ por Automate Developers.</em></p>

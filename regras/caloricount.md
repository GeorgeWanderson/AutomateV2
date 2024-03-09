Base de Dados de Alimentos: Um conjunto pré-definido de alimentos e suas calorias correspondentes é disponibilizado. Cada alimento na base de dados possui um nome e um valor calórico associado.

Adição de Alimentos Consumidos:

O usuário pode adicionar alimentos que consumiu, especificando o nome do alimento e, opcionalmente, o número de calorias.
Se o número de calorias não for especificado, o sistema usa o valor padrão associado ao alimento na base de dados.
A busca pelo alimento na base de dados é insensível a maiúsculas e minúsculas, garantindo que o usuário possa digitar o nome do alimento em qualquer combinação de maiúsculas/minúsculas.
Atualização do Total de Calorias:

O total de calorias é atualizado a cada alimento adicionado, somando-se ao contador geral de calorias.
O total atualizado é exibido para o usuário.
Limpeza dos Campos de Entrada: Após a adição de um alimento à lista, os campos de entrada para o nome do alimento e calorias são limpos, preparando-se para uma nova inserção.

Autocompletar e Sugestões de Alimentos:

Conforme o usuário digita o nome de um alimento, sugestões baseadas na base de dados são apresentadas. Isso é implementado para facilitar a escolha dos alimentos e garantir a consistência com os nomes da base de dados.
As sugestões são baseadas nos caracteres iniciais digitados, e a comparação é insensível a maiúsculas/minúsculas.
Preenchimento Automático de Calorias:

Quando um alimento é selecionado a partir das sugestões (ou se o nome completo do alimento é digitado corretamente), o campo de calorias é automaticamente preenchido com o valor padrão de calorias para aquele alimento, conforme definido na base de dados.
Manipulação de Dados Sensíveis a Maiúsculas/Minúsculas: Tanto para a adição de alimentos quanto para o autocompletar, o sistema ignora diferenças entre maiúsculas e minúsculas, facilitando a busca e seleção de alimentos por parte do usuário.
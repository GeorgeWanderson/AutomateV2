### Downloads

- Visual Studio: https://visualstudio.microsoft.com/pt-br/vs/ (Selecione a opção Community 2022)
- Dotnet 8.0 (Baixe a versão de suporte a longo prazo): https://dotnet.microsoft.com/pt-br/download/dotnet 
![image](https://github.com/GeorgeWanderson/AutomateV2/assets/104208179/ca4b6579-881f-4760-acf5-ee1b4b74f105)


### Criando um projeto de automação no visual studio

1) Ao abrir o VisualStudio, clique na opção "Create a new project"
   ![image](https://github.com/GeorgeWanderson/AutomateV2/assets/104208179/caa2bde3-6fa0-4cf1-b54c-2bc971027fe0)

2) No campo de pesquisa, pesquise por Nunit e clique na opção correspondente a linguagem C# (Nunit Test Project | C#
![image](https://github.com/GeorgeWanderson/AutomateV2/assets/104208179/7e34c303-943a-4b97-8e48-154120b30790)

### Configuração do Projeto:

1) Vamos nomear o projeto de "AutomationProject"
2) Em location, escolha uma pasta de sua preferência para salvar o seu projeto localmente em seu computador
 ![image](https://github.com/GeorgeWanderson/AutomateV2/assets/104208179/f3e9c75d-df7a-4c60-9f9d-281f83f73be8)

3) Ao clicar em Next, vemos a página onde iremos escolher a versão do framework que iremos trabalhar, podemos utilizar a versão 8.0 do Dotnet
  ![image](https://github.com/GeorgeWanderson/AutomateV2/assets/104208179/8c6da3d6-992e-4146-82e6-c9436114a0c2)
4) Clique em "Create" e aguarde o projeto ser carregado na sua IDE.
   ![image](https://github.com/GeorgeWanderson/AutomateV2/assets/104208179/2262d85a-5d0e-40ae-b241-3869af7778f6)

### Configuração do Selenium + Chrome no Projeto:

1) Vamos instalar as extensões necessárias para utilizar o Selenium em nosso projeto! Siga os seguintes passos: Tools > NuGet Package Manager > Manage NuGet Packages For Solution
- ![image](https://github.com/GeorgeWanderson/AutomateV2/assets/104208179/a2fc15c9-3f7e-46dd-9465-a2fc720eeaa4)

2) Após isso, será aberto o nosos gerenciador de pacotes NuGet, então clicaremos na opção "Browse" para buscar as bibliotecas necessárias
- ![image](https://github.com/GeorgeWanderson/AutomateV2/assets/104208179/5053ff90-d818-4df0-bc7f-e9e9042a5e74)

3) Vamos buscar pelas seguintes bibliotecas:
   - Webdriver Manager
   - ![webdriver-manager](https://github.com/GeorgeWanderson/AutomateV2/assets/104208179/3394dc7f-8b29-49ae-a390-7967bc8ed532)
   E também iremos instalar a biblioteca Selenium Webdriver:
![image](https://github.com/GeorgeWanderson/AutomateV2/assets/104208179/c12a931b-6894-42ee-a2f3-3a43544b52e9)

### Vamos automatizar!

1) Inicialmente já temos o necessário para começar a automatizar alguns testes. Mas antes vamos configurar melhor a noss automação
2) Vamos criar duas pastas, uma delas chamadas "core" e outra "Tests"
- ![image](https://github.com/GeorgeWanderson/AutomateV2/assets/104208179/7c152288-3304-4894-a26f-e2abb1d05edf)
3) Dentro da pasta core, vamos criar uma classe chamada "Begin" e nela vamos criar o seguintes métodos:
  
```
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace AutomationProject.Core
{
    public class Begin
    {
        public IWebDriver _driver;

        [SetUp]
        public void Setup()
        {
            // Configuração para iniciar o navegador Chrome
            ChromeOptions options = new ChromeOptions();
            _driver = new ChromeDriver(options);
            // Maximiza a janela do navegador após a inicialização
            _driver.Manage().Window.Maximize();
        }

        [TearDown]
        public void Finish()
        {
            QuitDriver();
        }

        private void QuitDriver()
        {
            if (_driver != null)
            {
                _driver.Quit();
                _driver.Dispose();
            }
        }
    }
}
```


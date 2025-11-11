# 🗂️ Estrutura de Pastas do Projeto

```bash
SAEP
├── Backend
│   ├── scriptSQL
│   └── sistema-saep
│
├── Documentation
│   ├── MER
│   ├── Requisitos
│   └── Testes
│
├── Frontend
│   └── saep
│
└── README.md
```

---

# 🧭 Como usar este Repositório

## 📥 1. Baixando o Projeto

1. Na **Área de Trabalho**, clique com o botão direito e selecione **“Abrir no Terminal”**.  
2. Cole o comando abaixo no terminal:

```bash
git clone https://github.com/NewtonThomaz/saep.git # Clona este repositório para sua Área de Trabalho
```

## ⚙️ 2. Configurando o Projeto

1. Na pasta **Saep**, clique com o botão direito e selecione **“Abrir no Terminal”**.
2. Cole os comandos abaixo:

```bash
cd Front/saep # Vai até o Frontend em Next.js (pasta "saep")
npm install # Instala as dependências necessárias para rodar o projeto
```

---

# 🚀 Como Publicar o seu Projeto

## 🗑️ 1. Deletando o arquivo `README.md`

Na pasta **Saep**, abra o terminal e digite:

```bash
del README.md # Apaga este arquivo de instrução do seu repositório
```

---

## 🔗 2. Removendo a origem do Projeto

Esse passo é importante para evitar que você envie atualizações para o repositório errado.

```bash
git remote -v # Lista os repositórios vinculados
git remote remove origin # Remove a referência do repositório atual
git remote -v # Se não retornar nada, a remoção deu certo
```

---

## ☁️ 3. Postando o Projeto no GitHub

Na pasta **Saep**, execute:

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOVO_REPOSITORIO.git # Substitua pela URL do seu novo repositório
git push -u origin main
```

---

# 🧩 Solucionando Problemas

## 🔄 1. Atualizando o Projeto

```bash
git add .
git commit -m "new commit"
git push
```

---

## 🌐 2. Alterando a URL de Conexão com o GitHub

```bash
git remote set-url origin https://github.com/SEU_USUARIO/NOVO_REPOSITORIO.git  # Substitua pela URL do seu projeto
```

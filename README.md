# Meneghel Creative — site

Site institucional + portfólio pessoal, em HTML/CSS/JS puro (sem frameworks, sem custo de hospedagem).

## Estrutura

```
index.html          → página única com todas as seções
css/style.css        → estilos
js/script.js         → menu mobile e ano dinâmico no rodapé
assets/               → logotipo, ícone e favicons extraídos da identidade visual
```

## Como publicar gratuitamente no GitHub Pages

1. Crie uma conta no [GitHub](https://github.com) (se ainda não tiver).
2. Crie um novo repositório, por exemplo `meneghel-site` (pode ser público).
3. Faça upload de todos os arquivos desta pasta para o repositório (pelo site do GitHub: "Add file" → "Upload files", ou via `git`).
4. No repositório, vá em **Settings → Pages**.
5. Em "Source", selecione a branch `main` e a pasta `/ (root)`. Salve.
6. Em alguns minutos o site estará disponível em:
   `https://SEU-USUARIO.github.io/meneghel-site/`
7. (Opcional) Se tiver um domínio próprio, pode configurá-lo em **Settings → Pages → Custom domain**.

## Como editar o conteúdo

- **Textos**: edite diretamente o arquivo `index.html` (todo o conteúdo de cada seção está em português, fácil de localizar por `id` — `#sobre`, `#servicos`, `#portfolio`, `#contato`).
- **Cores/estilo**: as cores principais estão centralizadas no topo do arquivo `css/style.css`, dentro de `:root`.
- **Contato**: o WhatsApp usa o link `https://wa.me/5527998102406` — troque o número ali e no rodapé se mudar.
- **Portfólio**: hoje o botão da seção "Portfólio" leva direto para o Instagram (@meneghelcreative). Quando quiser montar uma galeria própria no site, é só me pedir.

## Rodar localmente antes de publicar

Não é obrigatório, mas se quiser conferir antes:

```bash
cd meneghel-site
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000` no navegador.

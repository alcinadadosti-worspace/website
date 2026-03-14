# Guia Rápido - Alcina Website

## Como Iniciar o Projeto

```bash
npm run dev
```

Acesse: http://localhost:3000

## Como Adicionar Novas Lojas

### Passo 1: Adicionar Foto da Loja

1. Coloque a foto da loja em: `public/images/stores/`
2. Nomeie o arquivo de forma descritiva, ex: `boticario-patio-maceio.jpg`
3. Tamanho recomendado: 800x600px (proporção 4:3)

### Passo 2: Editar o Arquivo de Dados

Abra `data/unitsData.ts` e adicione uma nova entrada:

```typescript
{
  id: "4", // Próximo ID sequencial
  name: "O Boticário - Shopping Pátio Maceió",
  location: "Av. Comendador Gustavo Paiva, 2990 - Mangabeiras, Maceió - AL",
  imageUrl: "/images/stores/boticario-patio-maceio.jpg",
  instagramUrl: "https://www.instagram.com/oboticariopatiomc",
},
```

### Passo 3: Salvar e Verificar

O site irá recarregar automaticamente e a nova loja aparecerá no grid.

## Estrutura de Pastas de Imagens

```
public/images/
├── logo/              # Logo da empresa (já configurado)
├── brands/            # Logos das marcas (já configurado)
├── backgrounds/       # Imagens de fundo (opcional)
│   └── about.jpg      # Adicione aqui para usar na seção About
└── stores/            # Fotos das lojas
    ├── loja1.jpg
    ├── loja2.jpg
    └── ...
```

## Personalizar o Hero

### Adicionar Vídeo de Background

1. Coloque o vídeo em: `public/videos/hero-background.mp4`
2. Edite `components/sections/Hero.tsx`
3. Substitua a div de placeholder pela tag video (veja README.md)

### Alterar Textos

Edite `components/sections/Hero.tsx`:

```tsx
<h1>
  Seu Título Aqui
  <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
    palavra destacada
  </span>
</h1>

<p>
  Seu subtítulo aqui
</p>
```

## Personalizar Cores

Edite `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#ec4899', // Rosa principal
    600: '#db2777', // Rosa mais escuro
  },
}
```

## Trocar Links de Redes Sociais

### No Footer

Edite `components/sections/Footer.tsx` e altere os links:

```tsx
<a href="https://www.instagram.com/seu_perfil">
```

### No StoreGrid

Edite `components/sections/StoreGrid.tsx` para alterar o link principal das redes sociais.

## Build para Produção

```bash
npm run build
npm start
```

## Deploy na Vercel

1. Crie uma conta em: https://vercel.com
2. Conecte seu repositório GitHub
3. Deploy automático!

## Checklist Antes de Lançar

- [ ] Adicionar todas as fotos das lojas
- [ ] Atualizar dados em `unitsData.ts`
- [ ] Verificar links do Instagram
- [ ] Testar todos os links
- [ ] Testar em mobile
- [ ] Otimizar imagens (usar WebP se possível)
- [ ] Adicionar vídeo no Hero (opcional)
- [ ] Atualizar meta tags para SEO (app/layout.tsx)

## Dicas de Otimização de Imagens

### Converter para WebP (melhor performance)

Use um conversor online como:
- https://squoosh.app
- https://cloudconvert.com/jpg-to-webp

### Tamanhos Recomendados

- **Logo**: 400x400px (PNG transparente)
- **Marcas**: Largura máxima 300px (PNG transparente)
- **Lojas**: 800x600px (JPG ou WebP)
- **Background**: 1920x1080px (JPG ou WebP)

## Suporte

Para dúvidas técnicas, consulte o README.md completo.

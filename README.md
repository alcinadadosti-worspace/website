# Alcina - Site Institucional

Site apresentacional moderno e performático para a rede de franquias de cosméticos e beleza Alcina, inspirado no design do Culture Amp.

## Tecnologias Utilizadas

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **React 19** - Biblioteca JavaScript para interfaces

## Estrutura do Projeto

```
AlcinaWebsite/
├── app/                          # App Router do Next.js
│   ├── layout.tsx               # Layout raiz da aplicação
│   ├── page.tsx                 # Página principal
│   └── globals.css              # Estilos globais
├── components/
│   └── sections/                # Componentes de seções
│       ├── Hero.tsx             # Seção Hero (header imersivo)
│       ├── About.tsx            # Seção Sobre Nós
│       ├── BrandsCarousel.tsx   # Carrossel de marcas
│       └── StoreGrid.tsx        # Grid de lojas
├── data/
│   └── unitsData.ts             # Dados das unidades/lojas
├── public/
│   └── images/
│       ├── logo/                # Logo da empresa
│       ├── brands/              # Logos das marcas
│       ├── backgrounds/         # Imagens de fundo
│       └── stores/              # Fotos das lojas
└── ...arquivos de configuração

```

## Como Começar

### Instalação

As dependências já foram instaladas. Se precisar reinstalar:

```bash
npm install
```

### Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

### Build de Produção

```bash
npm run build
npm start
```

## Seções do Site

### 1. Hero Section
- Header imersivo ocupando 100vh
- Suporte para vídeo/imagem de fundo
- Logo da empresa
- Título de impacto com gradiente
- Subtítulo descritivo
- Call-to-Action (CTA)
- Indicador de scroll animado

### 2. About (Sobre Nós)
- História da empresa
- Propósito e valores
- Layout com imagem + texto
- Estatísticas destacadas
- Animações suaves de entrada

### 3. Brands Carousel
- Carrossel infinito (marquee)
- Logos das 7 marcas operadas
- Animação contínua e suave
- Efeito hover nos cards

### 4. Store Grid (Nossas Lojas)
- Grid responsivo de cards
- Cada card é clicável
- Redireciona para Instagram da loja
- Informações: nome, localização, foto
- Animações de hover sofisticadas

## Personalização

### Adicionar Novas Lojas

Edite o arquivo `data/unitsData.ts`:

```typescript
export const unitsData: StoreUnit[] = [
  {
    id: "1",
    name: "Nome da Loja",
    location: "Endereço completo",
    imageUrl: "/images/stores/nome-da-foto.jpg",
    instagramUrl: "https://www.instagram.com/perfil",
  },
  // Adicione mais lojas aqui
];
```

### Adicionar Fotos das Lojas

1. Coloque as fotos em `public/images/stores/`
2. Formato recomendado: JPG ou WebP
3. Tamanho ideal: 800x600px
4. Atualize o `imageUrl` no `unitsData.ts`

### Personalizar Cores

As cores estão configuradas no `tailwind.config.ts`. Para alterar o esquema de cores, modifique a paleta `primary`:

```typescript
colors: {
  primary: {
    // Suas cores aqui
  },
}
```

### Adicionar Vídeo de Background no Hero

Substitua a div de placeholder em `components/sections/Hero.tsx` por:

```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 h-full w-full object-cover"
>
  <source src="/videos/hero-background.mp4" type="video/mp4" />
</video>
```

## Design System

O site segue princípios de design inspirados no Culture Amp:

- **Tipografia**: Inter (fonte sans-serif moderna)
- **Espaçamento**: Breathing room generoso
- **Cores**: Gradientes de rosa e roxo
- **Animações**: Suaves e sofisticadas (Framer Motion)
- **Layout**: Clean, minimalista, focado em conteúdo

## Responsividade

O site é totalmente responsivo com abordagem Mobile First:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Conecte seu repositório na Vercel
3. Deploy automático

### Outros Provedores

O site pode ser hospedado em qualquer provedor que suporte Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## Próximos Passos

- [ ] Adicionar fotos reais das lojas
- [ ] Adicionar vídeo de background no Hero
- [ ] Configurar Analytics (Google Analytics/Vercel Analytics)
- [ ] Adicionar SEO metadata personalizado
- [ ] Integrar formulário de contato
- [ ] Adicionar mais animações micro-interações

## Licença

Propriedade de Alcina - Todos os direitos reservados.

## Contato

Para suporte ou dúvidas, entre em contato com a equipe de desenvolvimento.

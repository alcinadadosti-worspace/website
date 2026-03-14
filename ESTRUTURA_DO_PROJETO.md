# Estrutura do Projeto Alcina Website

## Visão Geral

Site institucional Next.js 16 com TypeScript, Tailwind CSS e Framer Motion.

```
AlcinaWebsite/
│
├─── app/                                  # Next.js App Router
│    ├── globals.css                      # Estilos globais + Tailwind
│    ├── layout.tsx                       # Layout raiz (metadata, fonts)
│    └── page.tsx                         # Página principal (integra seções)
│
├─── components/
│    └── sections/                        # Componentes das seções
│         ├── Hero.tsx                    # ✨ Hero Section (100vh, CTA)
│         ├── About.tsx                   # 📖 Sobre Nós (história, valores)
│         ├── BrandsCarousel.tsx          # 🎠 Carrossel de Marcas (marquee infinito)
│         ├── StoreGrid.tsx               # 🏪 Grid de Lojas (clicável → Instagram)
│         └── Footer.tsx                  # 🔗 Footer (links, redes sociais)
│
├─── data/
│    ├── unitsData.ts                     # 📊 Dados das lojas (EDITAR AQUI)
│    └── unitsData.example.ts             # 📝 Exemplo com mais lojas
│
├─── public/
│    └── images/
│         ├── logo/                       # ✅ Logo da empresa (já configurado)
│         ├── brands/                     # ✅ Logos das marcas (7 marcas)
│         ├── backgrounds/                # 📷 Imagens de fundo (adicionar)
│         └── stores/                     # 🏬 Fotos das lojas (ADICIONAR AQUI)
│
├─── Arquivos de Configuração
│    ├── next.config.ts                   # Configuração do Next.js
│    ├── tailwind.config.ts               # Configuração do Tailwind
│    ├── tsconfig.json                    # Configuração do TypeScript
│    ├── postcss.config.mjs               # Configuração do PostCSS
│    ├── package.json                     # Dependências do projeto
│    └── .gitignore                       # Arquivos ignorados pelo Git
│
└─── Documentação
     ├── README.md                        # Documentação completa
     ├── GUIA_RAPIDO.md                   # Guia rápido de uso
     └── ESTRUTURA_DO_PROJETO.md          # Este arquivo
```

## Arquivos Principais por Seção

### 🎯 Hero Section
**Arquivo**: `components/sections/Hero.tsx`

- Background com gradiente
- Logo da empresa
- Título com gradiente
- Subtítulo
- Botão CTA → scroll para lojas
- Indicador de scroll animado

**Personalizações comuns**:
- Adicionar vídeo de background
- Alterar títulos e subtítulos
- Mudar cores do gradiente

---

### 📖 About (Sobre Nós)
**Arquivo**: `components/sections/About.tsx`

- Layout 2 colunas (texto + imagem)
- História da empresa
- Cards de estatísticas
- Animações de entrada

**Personalizações comuns**:
- Adicionar foto da equipe em `/public/images/backgrounds/about.jpg`
- Atualizar textos e estatísticas
- Modificar cards de destaque

---

### 🎠 Brands Carousel
**Arquivo**: `components/sections/BrandsCarousel.tsx`

- Carrossel infinito (marquee)
- 7 marcas (já configuradas):
  - O Boticário
  - Eudora
  - Quem Disse Berenice
  - Niina Secrets
  - Intense
  - OUI
  - Aumigos

**Personalizações comuns**:
- Adicionar/remover marcas no array `brands`
- Ajustar velocidade da animação (duration: 40s)

---

### 🏪 Store Grid
**Arquivo**: `components/sections/StoreGrid.tsx`
**Dados**: `data/unitsData.ts`

- Grid responsivo (1 → 2 → 3 colunas)
- Cards clicáveis
- Link para Instagram de cada loja
- Ícone do Instagram no hover
- Informações: nome, endereço, foto

**Como adicionar loja**:
1. Adicionar foto em `/public/images/stores/`
2. Adicionar dados em `data/unitsData.ts`

---

### 🔗 Footer
**Arquivo**: `components/sections/Footer.tsx`

- Logo
- Links rápidos (navegação interna)
- Redes sociais
- Copyright

---

## Fluxo de Dados

```
unitsData.ts (dados)
     ↓
StoreGrid.tsx (componente)
     ↓
page.tsx (página)
     ↓
layout.tsx (aplicação)
```

## Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento (localhost:3000)
npm run build    # Build de produção
npm start        # Servidor de produção
```

## Próximos Passos

### Essenciais
1. ✅ Adicionar fotos das lojas em `/public/images/stores/`
2. ✅ Atualizar `data/unitsData.ts` com dados reais
3. ✅ Atualizar links do Instagram

### Opcionais
- [ ] Adicionar vídeo no Hero
- [ ] Adicionar Google Analytics
- [ ] Configurar domínio customizado
- [ ] Adicionar mais seções (depoimentos, blog, etc)

## Tecnologias

- **Next.js 16**: Framework React
- **TypeScript**: Tipagem estática
- **Tailwind CSS 4**: Estilização
- **Framer Motion**: Animações
- **React 19**: Biblioteca base

## Responsividade

- **Mobile First**: Design pensado para mobile
- **Breakpoints**:
  - `sm`: 640px (tablets)
  - `lg`: 1024px (desktops)

## Performance

- ✅ Next.js Image Optimization
- ✅ Code Splitting automático
- ✅ Lazy loading de componentes
- ✅ CSS otimizado com Tailwind

---

**Desenvolvido para Alcina** 🌸

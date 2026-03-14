# 🎥 Como Adicionar o Vídeo de Fundo Premium

## Passo 1: Escolher o Vídeo

Acesse um destes sites **gratuitos**:

### Opção A: Pexels (Recomendado)
1. Vá para: https://www.pexels.com/search/videos/silk/
2. Busque por: `"gold fabric"`, `"silk beige"`, `"cream satin"`
3. Filtre por: **Free to use**
4. Escolha um vídeo com:
   - Cores: Bege, champagne, dourado suave, verde claro
   - Movimento suave e lento (slow motion)
   - Duração: 10-30 segundos

### Opção B: Pixabay
1. Vá para: https://pixabay.com/videos/search/gold%20texture/
2. Busque por: `"beige abstract"`, `"gold fluid"`
3. Escolha vídeo com estética luxuosa e minimalista

## Passo 2: Baixar o Vídeo

1. Clique no vídeo escolhido
2. Clique em **"Download"** ou **"Free Download"**
3. Escolha qualidade:
   - **Full HD (1920x1080)** - Recomendado
   - **HD (1280x720)** - Se o Full HD for muito grande

## Passo 3: Otimizar (Se necessário)

Se o vídeo for **maior que 10 MB**, otimize:

### Usando Handbrake (Grátis):
1. Download: https://handbrake.fr/
2. Abra o vídeo no Handbrake
3. Configurações:
   - Preset: "Web" ou "Fast 1080p30"
   - Video Codec: H.264
   - Quality: RF 25-28
   - Framerate: 30 fps
4. Remova áudio (desmarca "Audio")
5. Salve como `hero-background.mp4`

### Ou Online:
- CloudConvert: https://cloudconvert.com/mp4-compressor
- Compacte para ~5 MB mantendo qualidade

## Passo 4: Adicionar ao Projeto

1. Renomeie o arquivo para: **`hero-background.mp4`**
2. Copie para: `public/videos/hero-background.mp4`
3. Pronto! O código já está configurado.

## Passo 5: Testar

Execute o projeto:
```bash
npm run dev
```

Acesse: http://localhost:3000

Verifique se:
- ✅ Vídeo carrega suavemente
- ✅ Loop é perfeito (sem pausas)
- ✅ Texto do Hero continua legível
- ✅ Performance está boa (não trava)

## 🎨 Sugestões de Vídeos Específicos:

Busque por estes termos no Pexels:
- **"gold satin fabric"** - Tecido dourado acetinado
- **"beige silk flowing"** - Seda bege fluindo
- **"cream fabric slow motion"** - Tecido creme em câmera lenta
- **"champagne liquid"** - Líquido champagne
- **"abstract gold fluid"** - Fluido dourado abstrato

## 🔧 Troubleshooting:

**Vídeo não aparece?**
- Verifique se o arquivo está em `public/videos/hero-background.mp4`
- Confirme que o nome está correto (case-sensitive)
- Limpe o cache do navegador (Ctrl + Shift + R)

**Vídeo muito grande/lento?**
- Comprima seguindo o Passo 3
- Objetivo: 3-8 MB

**Vídeo não faz loop suave?**
- Escolha vídeos que começam e terminam de forma similar
- Procure por vídeos já marcados como "seamless loop"

## ✨ Resultado Final:

Você terá um fundo premium e sofisticado com:
- Texturas fluidas e abstratas
- Cores serenas (sage, champagne, bege)
- Movimento suave que transmite luxo
- Performance otimizada para web

---

**Precisa de ajuda?** Confira os guias em:
- `public/videos/README.md` - Informações sobre vídeos
- `public/videos/OTIMIZACAO.md` - Guia de compressão

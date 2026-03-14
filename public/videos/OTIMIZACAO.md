# Guia de Otimização de Vídeo

## Configurações Recomendadas para Web:

### Compressão com Handbrake (Grátis)

1. **Download**: https://handbrake.fr/

2. **Configurações ideais**:
   - **Formato**: MP4 (H.264)
   - **Resolução**: 1920x1080 (Full HD) ou 1280x720 (HD)
   - **Frame Rate**: 30 fps (suficiente para slow motion)
   - **Bitrate**: 2000-3000 kbps (qualidade/tamanho balanceado)
   - **Audio**: Remover (não precisa de áudio)

### Compressão Online (Alternativa)

- **CloudConvert**: https://cloudconvert.com/mp4-converter
- **FreeConvert**: https://www.freeconvert.com/video-compressor

### Tamanho Final Ideal:

- **Ótimo**: 3-5 MB
- **Aceitável**: 5-8 MB
- **Máximo**: 10 MB (acima disso pode afetar performance)

## Formato WebM (Opcional - Melhor Compressão)

Se quiser criar versão WebM adicional:

```bash
# Usando FFmpeg (se tiver instalado)
ffmpeg -i hero-background.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 hero-background.webm
```

Ou use CloudConvert para converter MP4 → WebM

## Checklist Final:

- [ ] Vídeo tem 10-20 segundos de duração (loop perfeito)
- [ ] Resolução Full HD ou menor
- [ ] Tamanho do arquivo < 8 MB
- [ ] Cores suaves (bege, champagne, verde, dourado)
- [ ] Movimento lento e suave
- [ ] Sem áudio
- [ ] Nome: `hero-background.mp4`
- [ ] Local: `public/videos/`

## Teste de Performance:

Após adicionar o vídeo, teste:
1. Carregamento rápido (< 3 segundos)
2. Loop suave sem interrupções
3. Não trava em mobile
4. Texto do Hero continua legível sobre o vídeo

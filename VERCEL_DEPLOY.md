# Deploy no Vercel - ProjeQuartel

## Configurações Implementadas

### 1. Arquivos de Configuração
- `vercel.json` - Configurações específicas do Vercel ✅
- `vite.config.ts` - Configuração padrão do Vite ✅
- `vite.config.prod.ts` - Configuração otimizada para produção ✅
- `tsconfig.app.json` - Configuração TypeScript otimizada ✅

### 2. Correções Realizadas
- ✅ Removidos imports não utilizados (Link do React Router)
- ✅ Corrigidas importações de imagens inexistentes
- ✅ Configuração do Vite com plugin React
- ✅ Otimização de build com chunks separados
- ✅ Configuração de headers de segurança
- ✅ **CORRIGIDO: Erro de runtime das funções no vercel.json**
- ✅ **REMOVIDO: next.config.js desnecessário**

### 3. Scripts Disponíveis
```bash
npm run dev          # Desenvolvimento
npm run build        # Build padrão
npm run build:prod   # Build otimizado para produção
npm run type-check   # Verificação de tipos TypeScript
npm run preview      # Preview do build
npm run clean        # Limpeza da pasta dist
```

### 4. Estrutura de Build
- **vendor**: React e React-DOM
- **swiper**: Biblioteca de slider
- **framer**: Animações
- **index**: Código principal da aplicação

### 5. Domínios de Imagens Permitidos
- `i.im.ge`
- `www.ceara.gov.br`
- `www.bombeiros.ce.gov.br`

## Deploy

1. **Conectar ao Vercel**
   ```bash
   vercel --prod
   ```

2. **Configurações Recomendadas**
   - Framework: Vite
   - Build Command: `npm run build:prod`
   - Output Directory: `dist`
   - Node.js Version: 18.x

3. **Variáveis de Ambiente**
   - `NODE_ENV=production`

## Solução de Problemas

### Erro de Build
Se houver erro de build, verifique:
- Todas as importações de imagens existem
- Dependências instaladas corretamente
- Configuração do TypeScript

### Erro de Deploy
Se houver erro de deploy:
- Verifique os logs do Vercel
- Confirme se o build local funciona
- Verifique as configurações do `vercel.json`

### Erro de Runtime (RESOLVIDO)
- ❌ **Problema**: `Function Runtimes must have a valid version`
- ✅ **Solução**: Removida configuração problemática de funções do vercel.json
- ✅ **Status**: Configuração limpa e funcional

## Status Atual
✅ Build local funcionando
✅ Build de produção funcionando
✅ Configurações otimizadas
✅ Imports corrigidos
✅ TypeScript configurado
✅ **VERCEL.JSON CORRIGIDO**
✅ **ERRO DE RUNTIME RESOLVIDO**

## Arquivo vercel.json Atualizado
```json
{
  "buildCommand": "npm run build:prod",
  "outputDirectory": "dist",
  "framework": "vite",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [...],
  "env": {
    "NODE_ENV": "production"
  }
}
```

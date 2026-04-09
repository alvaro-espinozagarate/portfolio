# 🚀 Portfolio — Backend Engineer

Portafolio profesional construido con **Next.js 14**, **TypeScript** y **Tailwind CSS**.  
Diseño futurista dark con acentos neón.

---

## 📦 Instalación local

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 🌐 Deploy gratuito en Vercel (recomendado)

Vercel es la plataforma oficial de Next.js — deploy en 3 pasos:

### Opción A — Desde GitHub (más fácil)

1. Sube este proyecto a un repo en [github.com](https://github.com)
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/TU_USUARIO/tu-repo.git
   git push -u origin main
   ```

2. Ve a [vercel.com](https://vercel.com) → **Sign up** con tu cuenta de GitHub (gratis)

3. Click en **"Add New Project"** → selecciona tu repo → click **Deploy**

Listo ✅ Vercel detecta Next.js automáticamente y despliega en segundos.  
Tu URL será: `https://tu-repo.vercel.app`

### Opción B — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## 🌐 Deploy gratuito en Netlify (alternativa)

1. Sube el proyecto a GitHub (igual que arriba)
2. Ve a [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Configura:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
4. Click **Deploy site**

> ⚠️ Para Netlify necesitas instalar el plugin: `@netlify/plugin-nextjs`  
> Agrégalo en `netlify.toml`:
> ```toml
> [[plugins]]
> package = "@netlify/plugin-nextjs"
> ```

---

## ✏️ Personalizar el portafolio

Todos los datos están en los componentes, fáciles de editar:

| Archivo | Qué editar |
|---|---|
| `components/Hero.tsx` | Nombre, título, descripción, stack |
| `components/About.tsx` | Bio, valores, redes sociales |
| `components/Skills.tsx` | Categorías y tecnologías |
| `components/Projects.tsx` | Lista de proyectos |
| `components/Experience.tsx` | Empleos y educación |
| `components/Contact.tsx` | Email de contacto |
| `app/layout.tsx` | Metadata SEO (título, descripción) |

---

## 🛠️ Stack

- **Framework:** Next.js 14 (App Router)
- **Estilos:** Tailwind CSS 3
- **Lenguaje:** TypeScript
- **Fuentes:** Syne, JetBrains Mono, Space Mono (Google Fonts)
- **Deploy:** Vercel / Netlify

---

## 📁 Estructura del proyecto

```
portfolio/
├── app/
│   ├── globals.css       # Estilos globales y animaciones
│   ├── layout.tsx        # Layout raíz con fuentes y metadata
│   └── page.tsx          # Página principal
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── CursorGlow.tsx
│   ├── Scanline.tsx
│   └── Particles.tsx
├── public/               # Imágenes estáticas
├── tailwind.config.ts
├── next.config.js
└── package.json
```

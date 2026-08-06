# HIDROSAT Web

Sitio institucional público de HIDROSAT. Es independiente de `apps/control-room`, que sigue siendo una superficie interna de HIDROSAT Labs.

## Qué comunica

- HIDROSAT es la infraestructura y la misión global.
- HidroOrbit es el primer producto, actualmente en investigación y validación.
- La secuencia pública es `observación → inferencia → decisión humana`.
- Las imágenes sintéticas y las demostraciones se rotulan como tales.
- No se publican métricas, aliados, casos operativos ni capacidades que todavía no estén demostrados.

## Tecnología

- Astro 7 con salida estática.
- TypeScript estricto para componentes Astro.
- CSS nativo, sin framework cliente y sin scripts de terceros.
- Sora, IBM Plex Sans e IBM Plex Mono empaquetadas localmente mediante Fontsource.
- Sharp durante el build para convertir la imagen principal a AVIF.

## Desarrollo local

Requiere Node.js 22.12 o superior y pnpm 11.

```powershell
pnpm install --frozen-lockfile
pnpm dev
```

Validación y producción:

```powershell
pnpm build
pnpm preview
```

La salida lista para publicar queda en `dist/`.

## Repositorio GitHub

La web se publica de forma independiente en:

[github.com/Ivaan22/hidrosat-web](https://github.com/Ivaan22/hidrosat-web)

El repositorio contiene únicamente esta aplicación. El cerebro de Obsidian, HIDROSAT Labs y los archivos del proyecto madre permanecen fuera de su historial.

Dentro de la carpeta de trabajo general, su ubicación local es:

```text
apps/hidrosat-web
```

## Despliegue en Hostinger

Configuración prevista para importar `Ivaan22/hidrosat-web` desde GitHub:

| Campo | Valor |
|---|---|
| Node.js | 24.x |
| Instalación | `pnpm install --frozen-lockfile` |
| Build | `pnpm build` |
| Directorio de salida | `dist` |
| Variables de entorno | Ninguna en esta versión |

Antes de publicar con dominio propio:

1. definir el dominio canónico en `astro.config.mjs` mediante la propiedad `site`;
2. agregar imagen social raster optimizada y su URL absoluta;
3. sustituir el estado “canal público en preparación” por un contacto real;
4. revisar privacidad, analítica y cookies sólo si se incorporan servicios que lo requieran;
5. probar el build limpio con la misma versión de Node configurada en Hostinger.

## Rollback

El rollback se realiza desplegando un commit anterior conocido como estable. Nunca se debe usar `dist/` como fuente: es un artefacto generado y está ignorado por Git.

## Activos

La imagen hero es una composición sintética original generada para HIDROSAT y se optimiza durante el build. No representa un territorio ni un evento real. Véase `CREDITS.md`.

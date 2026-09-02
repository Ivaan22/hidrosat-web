# HIDROSAT Web

Sitio institucional público de HIDROSAT. Es independiente de `apps/control-room`, que sigue siendo una superficie interna de HIDROSAT Labs.

## Qué comunica

- HIDROSAT es una organización tecnológica de propósito público en formación que construye agentes de IA satelitales para ayudar a cuidar el agua.
- HidroOrbit es el primer producto, actualmente en investigación y validación.
- La secuencia pública es `observar → comparar → alertar → verificar`.
- Las imágenes sintéticas y las demostraciones se rotulan como tales.
- No se publican métricas, aliados, casos operativos ni capacidades que todavía no estén demostrados.
- `/atlas/` es una experiencia pública de exploración hídrica de Argentina: diferencia geografía publicada, interfaz conceptual y operación restringida.

## HIDROSAT Atlas Argentina

`/atlas/` consume capas cartográficas publicadas por el Instituto Geográfico Nacional (IGN) para ríos/cursos, cuerpos de agua/embalses y plantas potabilizadoras publicadas. Las capas se solicitan en el navegador: su disponibilidad, cobertura y vigencia dependen de la fuente externa.

Atlas no contiene escenas satelitales, alertas reales ni un inventario operativo exhaustivo. La secuencia temporal y la bandeja de casos son una interfaz conceptual. Las señales detalladas, el estado operativo de infraestructura, las inspecciones y las vulnerabilidades están fuera de la superficie pública por diseño.

## Tecnología

- Astro 7 con salida estática.
- TypeScript estricto para componentes Astro.
- CSS y SVG nativos para la dirección visual, con Motion vanilla usado de forma puntual para revelados y scrollytelling.
- MapLibre GL JS para la cartografía del Atlas y Three.js para el campo de observación WebGL. Ambos se cargan sólo al abrir `/atlas/` y después del primer render.
- Sora, IBM Plex Sans e IBM Plex Mono empaquetadas localmente mediante Fontsource.
- Sharp durante el build para convertir las imágenes fuente a AVIF.

## Desarrollo local

Requiere Node.js 22.13 o superior y pnpm 11.17.0.

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

## Demo pública

La demo se publica automáticamente mediante GitHub Pages cada vez que se integra un cambio a `main`:

[ivaan22.github.io/hidrosat-web](https://ivaan22.github.io/hidrosat-web/)

El despliegue usa `.github/workflows/deploy.yml`. Para la demo, Astro usa la base `/hidrosat-web`; al migrar a un dominio propio se debe actualizar `site`, retirar `base` y revisar los enlaces internos conforme a la guía de Astro.

## Despliegue en Hostinger

Configuración prevista para importar `Ivaan22/hidrosat-web` desde GitHub:

| Campo | Valor |
|---|---|
| Node.js | 22.x, versión 22.13 o superior |
| pnpm | `11.17.0` |
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

Las imágenes de la web son composiciones sintéticas originales generadas para HIDROSAT y se optimizan durante el build. No representan territorios, eventos ni resultados operativos reales. Véase `CREDITS.md`.

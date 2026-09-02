# Créditos y procedencia visual

## Imagen principal

- Archivo fuente: `src/assets/observation-field.png`.
- Tipo: composición sintética original, no evidencia satelital.
- Generación: OpenAI ImageGen integrado en Codex, 2026-08-06.
- Uso: hero institucional de HIDROSAT.
- Tratamiento web: conversión automática a AVIF durante el build de Astro.

Dirección del prompt: vista orbital cenital de un territorio hídrico, océano azul profundo, río trenzado y humedales cian, parcelas agrícolas, una pasada de observación sutil y un único punto de evidencia; estética científica editorial sobria, sin texto, logos, interfaz, globo ni satélites flotantes.

La imagen debe conservar siempre una indicación visible de que es sintética y no debe reutilizarse como prueba de un evento, territorio, sensor o resultado operativo.

## Verificación de campo

- Archivo fuente: `src/assets/field-verification.png`.
- Tipo: fotografía documental sintética original, no registro de una campaña real.
- Generación: OpenAI ImageGen integrado en Codex, 2026-08-06.
- Uso: sección de propósito público y relación entre observación satelital y decisión humana.
- Tratamiento web: conversión automática a AVIF durante el build de Astro.

Dirección del prompt: equipo interdisciplinario verificando un reservorio y una obra hídrica en un paisaje semiárido inspirado en Argentina; fotografía editorial natural, sin logos, interfaces futuristas, localización identificable ni implicación de potabilidad.

## Infraestructura hídrica

- Archivo fuente: `src/assets/canal-infrastructure.png`.
- Tipo: fotografía aérea sintética original, no escena satelital ni caso real.
- Generación: OpenAI ImageGen integrado en Codex, 2026-08-06.
- Uso: presentación conceptual de HidroOrbit.
- Tratamiento web: conversión automática a AVIF durante el build de Astro.

Dirección del prompt: canal de riego y estructura de control atravesando un territorio agrícola semiárido inspirado en Argentina; fotografía aérea físicamente plausible, sin fuga visible, detección simulada, texto, marcas ni localización identificable.

Las tres imágenes deben conservar una indicación visible de su carácter sintético. Ninguna puede reutilizarse como evidencia de una observación, inspección o resultado operativo.

## Tipografías

- Sora — SIL Open Font License 1.1.
- IBM Plex Sans — SIL Open Font License 1.1.
- IBM Plex Mono — SIL Open Font License 1.1.

Los archivos se distribuyen dentro del build mediante paquetes Fontsource. Las licencias se conservan en las dependencias instaladas y deben seguir auditándose al actualizar versiones.

## Marca

La implementación web conserva el concepto de la referencia HIDROSAT 2026: agua, trayectoria orbital y nodo de observación. No sustituye silenciosamente los archivos maestros existentes de `branding/`.

## HIDROSAT Atlas Argentina

- Cartografía base y capas públicas: servicios WMS/WFS y TMS del Instituto Geográfico Nacional (IGN), consultados en el navegador el 2026-09-01.
- Capas mostradas: cursos de agua, cuerpos de agua/embalses y la capa publicada de plantas potabilizadoras. Su visualización no afirma cobertura exhaustiva, estado operativo ni una alerta territorial.
- MapLibre GL JS — licencia BSD-3-Clause; motor cartográfico de la aplicación.
- Three.js — licencia MIT; campo de observación WebGL conceptual.

Las capas remotas deben mantener atribución y no deben convertirse en un inventario público de vulnerabilidades. La secuencia de tiempo y la bandeja de casos de Atlas son diseño de interfaz conceptual, no imágenes ni alertas reales.

<!-- docs/system-overview.md -->

# MUGA · Web Audit System — System Overview

## Qué es este proyecto

`muga-web-audit` es un sistema técnico de auditoría web diseñado como
un **motor de decisión**, no como una aplicación tradicional.

El sistema:
- evalúa sitios web
- detecta fallas estructurales
- clasifica estados
- produce un dictamen técnico cerrado

No genera recomendaciones genéricas ni texto libre.

---

## Principios rectores

- Sistema > herramienta
- Decisiones explícitas
- Determinismo primero
- IA solo como clasificador
- Una responsabilidad por archivo
- Capas estrictamente separadas

---

## Capas del sistema

### Domain (`packages/domain`)

Lenguaje del sistema.

Define:
- tipos
- contratos
- estados posibles

No contiene:
- lógica
- reglas
- dependencias externas

Es la fuente de verdad.

---

### Engine (`packages/engine`)

Motor determinista.

Responsable de:
- ejecutar reglas puras
- agrupar hallazgos
- derivar decisiones finales

No conoce:
- infraestructura
- web
- IA
- persistencia

---

### Adapters (`packages/*`)

Puentes con el mundo exterior.

Actualmente:
- `crawler`: extrae señales crudas desde la web

Los adapters:
- observan
- normalizan
- entregan datos

No interpretan ni deciden.

---

### Capas futuras

- AI: clasificación semántica acotada
- Persistence: almacenamiento de estados
- API: orquestación del sistema

Estas capas no alteran la lógica del Engine.

---

## Orden de avance

El sistema se construye siempre en este orden:

1. Domain
2. Engine
3. Adapters
4. Persistence
5. API

No se permiten saltos de capa.

---

## Estado actual

- Domain completo
- Engine completo
- Adapter Crawler funcional
- Arquitectura estable

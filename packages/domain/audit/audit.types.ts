// packages/domain/audit/audit.types.ts

/**
 * Estados estructurales posibles de un sistema web.
 * Describen si el sistema puede sostenerse y escalar.
 */
export type Estructura = "solida" | "fragil" | "rota";

/**
 * Estados de viabilidad de performance.
 * No miden optimización, miden posibilidad real de uso.
 */
export type Performance = "viable" | "limitante" | "inviable";

/**
 * Calidad semántica del contenido.
 * Se usa solo para clasificación, no para decisión directa.
 */
export type Contenido = "claro" | "confuso" | "contradictorio";

/**
 * Claridad de la dirección del sitio respecto a su objetivo.
 */
export type Direccion = "alineada" | "difusa" | "inexistente";

/**
 * Decisión final del sistema.
 * Se deriva de reglas deterministas.
 */
export type Decision = "optimizar" | "reestructurar" | "rehacer";

/**
 * Hallazgo producido por una regla del sistema.
 * Siempre debe tener evidencia concreta.
 */
export type Finding = {
  ruleId: string;
  title: string;
  evidence: string[];
};

// packages/domain/audit/audit.contracts.ts

import type {
  Estructura,
  Performance,
  Contenido,
  Direccion,
  Decision,
  Finding,
} from "./audit.types";

/**
 * Resultado completo de una auditoría.
 * Representa el dictamen final del sistema.
 */
export type AuditSummary = {
  estructura: Estructura;
  performance: Performance;
  contenido: Contenido;
  direccion: Direccion;
  decision: Decision;
  p1: Finding[];
  p2: Finding[];
  p3: Finding[];
};

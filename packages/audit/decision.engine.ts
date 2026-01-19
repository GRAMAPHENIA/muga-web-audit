// packages/engine/audit/decision.engine.ts

import type { Decision, Direccion } from "../domain/audit/audit.types";

/**
 * Deriva la decisión final del sistema.
 * Implementa las reglas maestras del dominio.
 */
export function decide(params: {
  direccion: Direccion;
  p1Count: number;
}): Decision {
  /**
   * Regla maestra:
   * Si la dirección es inexistente, el sistema no se optimiza ni reestructura.
   */
  if (params.direccion === "inexistente") {
    return "rehacer";
  }

  /**
   * Si existen fallas críticas, el sistema requiere reestructuración.
   */
  if (params.p1Count > 0) {
    return "reestructurar";
  }

  /**
   * En ausencia de fallas críticas, se permite optimizar.
   */
  return "optimizar";
}

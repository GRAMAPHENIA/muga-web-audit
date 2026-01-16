// packages/engine/audit/rule.engine.ts

import type { Finding } from "../../domain/audit/audit.types";

/**
 * Resultado de la ejecución de reglas.
 * Agrupa hallazgos por severidad.
 */
export type RuleExecutionResult = {
  p1: Finding[];
  p2: Finding[];
  p3: Finding[];
};

/**
 * Ejecuta un conjunto de reglas puras sobre una entrada ya interpretada.
 * Este motor no decide ni interpreta: solo agrega resultados.
 */
export function runRules(params: {
  p1: Array<() => Finding | null>;
  p2: Array<() => Finding | null>;
  p3: Array<() => Finding | null>;
}): RuleExecutionResult {
  return {
    p1: params.p1.map((rule) => rule()).filter(Boolean) as Finding[],
    p2: params.p2.map((rule) => rule()).filter(Boolean) as Finding[],
    p3: params.p3.map((rule) => rule()).filter(Boolean) as Finding[],
  };
}

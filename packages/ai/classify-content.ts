// packages/ai/classify-content.ts

import type { Contenido, Direccion } from "../domain/audit/audit.types";

/**
 * Resultado de clasificación semántica.
 * La IA solo puede devolver estos estados.
 */
export type ContentClassification = {
  contenido: Contenido;
  direccion: Direccion;
};

/**
 * Clasifica contenido textual en estados semánticos acotados.
 *
 * IMPORTANTE:
 * - Esta función NO decide resultados del sistema.
 * - Esta función NO ejecuta reglas.
 * - La implementación concreta puede variar (LLM, heurística, stub).
 */
export async function classifyContent(params: {
  text: string;
}): Promise<ContentClassification> {
  /**
   * Implementación temporal (stub determinista).
   * Permite avanzar el sistema sin acoplarse a IA real.
   */
  if (params.text.trim().length === 0) {
    return {
      contenido: "confuso",
      direccion: "inexistente",
    };
  }

  return {
    contenido: "confuso",
    direccion: "difusa",
  };
}

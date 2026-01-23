// packages/persistence/audit.repository.ts

import type { AuditSummary } from "../domain/audit/audit.contracts";

/**
 * Representa una auditoría persistida.
 * El repositorio no decide su contenido, solo lo almacena.
 */
export type PersistedAudit = {
  id: string;
  createdAt: Date;
  summary: AuditSummary;
};

/**
 * Contrato del repositorio de auditorías.
 * Define qué se puede guardar y recuperar.
 */
export interface AuditRepository {
  save(audit: PersistedAudit): Promise<void>;
  findById(id: string): Promise<PersistedAudit | null>;
}

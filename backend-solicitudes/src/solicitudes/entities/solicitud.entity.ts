import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('solicitudes')
export class Solicitud {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  titulo: string;

  @Column({ type: 'varchar', length: 100 })
  cliente: string;

  @Column({ type: 'varchar', length: 50 })
  categoria: string;

  @Column({ type: 'varchar', length: 50 })
  prioridad: string;

  @Column({ type: 'varchar', length: 50, default: 'Pendiente' })
  estado: string;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ type: 'date' })
  fechaSolicitud: string;
}

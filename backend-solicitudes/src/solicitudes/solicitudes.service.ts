import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class SolicitudesService {
  findAll() {
    throw new NotImplementedException('Se implementará en la Etapa 3 (CRUD y reglas de negocio).');
  }

  buscar(estado?: string, prioridad?: string, categoria?: string) {
    throw new NotImplementedException('Se implementará en la Etapa 3 (CRUD y reglas de negocio).');
  }

  findOne(id: number) {
    throw new NotImplementedException('Se implementará en la Etapa 3 (CRUD y reglas de negocio).');
  }

  create(dto: unknown) {
    throw new NotImplementedException('Se implementará en la Etapa 3 (CRUD y reglas de negocio).');
  }

  update(id: number, dto: unknown) {
    throw new NotImplementedException('Se implementará en la Etapa 3 (CRUD y reglas de negocio).');
  }

  remove(id: number) {
    throw new NotImplementedException('Se implementará en la Etapa 3 (CRUD y reglas de negocio).');
  }
}

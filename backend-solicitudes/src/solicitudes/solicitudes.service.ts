import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Solicitud } from './entities/solicitud.entity.js';
import { CreateSolicitudDto } from './dto/create-solicitud.dto.js';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto.js';

@Injectable()
export class SolicitudesService {
  constructor(
    @InjectRepository(Solicitud)
    private readonly solicitudRepository: Repository<Solicitud>,
  ) {}

  findAll() {
    throw new NotImplementedException('Se implementara en la Etapa 3');
  }

  buscar(estado?: string, prioridad?: string, categoria?: string) {
    throw new NotImplementedException('Se implementara en la Etapa 3');
  }

  findOne(id: number) {
    throw new NotImplementedException('Se implementara en la Etapa 3');
  }

  create(dto: CreateSolicitudDto) {
    throw new NotImplementedException('Se implementara en la Etapa 3');
  }

  update(id: number, dto: UpdateSolicitudDto) {
    throw new NotImplementedException('Se implementara en la Etapa 3');
  }

  remove(id: number) {
    throw new NotImplementedException('Se implementara en la Etapa 3');
  }
}

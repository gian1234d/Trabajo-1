import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
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
    return this.solicitudRepository.find();
  }

  buscar(estado?: string, prioridad?: string, categoria?: string) {
    const where: any = {};
    if (estado) where.estado = estado;
    if (prioridad) where.prioridad = prioridad;
    if (categoria) where.categoria = categoria;
    return this.solicitudRepository.find({ where });
  }

  async findOne(id: number) {
    const solicitud = await this.solicitudRepository.findOne({ where: { id } });
    if (!solicitud) {
      throw new NotFoundException(`Solicitud con id ${id} no encontrada`);
    }
    return solicitud;
  }

  create(dto: CreateSolicitudDto) {
    const nuevaSolicitud = this.solicitudRepository.create({
      ...dto,
      estado: 'Pendiente',
    });
    return this.solicitudRepository.save(nuevaSolicitud);
  }

  async update(id: number, dto: UpdateSolicitudDto) {
    const solicitud = await this.findOne(id);

    if (solicitud.estado === 'Finalizada' && dto.estado === 'Pendiente') {
      throw new BadRequestException('Una solicitud Finalizada no puede volver a Pendiente');
    }

    Object.assign(solicitud, dto);
    return this.solicitudRepository.save(solicitud);
  }

  async remove(id: number) {
    const solicitud = await this.findOne(id);

    if (solicitud.estado === 'En Proceso') {
      throw new BadRequestException('Una solicitud con estado En Proceso no puede ser eliminada');
    }

    if (solicitud.estado !== 'Finalizada') {
      throw new BadRequestException('Para eliminar una solicitud debe encontrarse en estado Finalizada');
    }

    await this.solicitudRepository.remove(solicitud);
    return { mensaje: `Solicitud con id ${id} eliminada` };
  }
}

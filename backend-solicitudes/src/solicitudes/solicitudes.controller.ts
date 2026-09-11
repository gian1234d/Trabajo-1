import { Controller, Get, Post, Put, Delete, Param, Query, Body, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { SolicitudesService } from './solicitudes.service.js';
import { CreateSolicitudDto } from './dto/create-solicitud.dto.js';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto.js';
import { BuscarSolicitudDto } from './dto/buscar-solicitud.dto.js';

@ApiTags('solicitudes')
@Controller('solicitudes')
export class SolicitudesController {
  constructor(private readonly solicitudesService: SolicitudesService) {}

  @Get('buscar')
  @ApiOperation({ summary: 'Buscar solicitudes por estado, prioridad o categoria' })
  @ApiResponse({ status: 200, description: 'Lista de solicitudes encontradas' })
  buscar(@Query() query: BuscarSolicitudDto) {
    return this.solicitudesService.buscar(query.estado, query.prioridad, query.categoria);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas las solicitudes' })
  @ApiResponse({ status: 200, description: 'Lista de todas las solicitudes' })
  findAll() {
    return this.solicitudesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Consultar una solicitud por su ID' })
  @ApiParam({ name: 'id', description: 'ID de la solicitud' })
  @ApiResponse({ status: 200, description: 'Solicitud encontrada' })
  @ApiResponse({ status: 404, description: 'Solicitud no encontrada' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.solicitudesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Registrar una nueva solicitud' })
  @ApiResponse({ status: 201, description: 'Solicitud creada con estado inicial Pendiente' })
  @ApiResponse({ status: 400, description: 'Datos invalidos segun reglas de negocio' })
  create(@Body() dto: CreateSolicitudDto) {
    return this.solicitudesService.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una solicitud existente' })
  @ApiParam({ name: 'id', description: 'ID de la solicitud' })
  @ApiResponse({ status: 200, description: 'Solicitud actualizada' })
  @ApiResponse({ status: 400, description: 'Datos invalidos o intento de pasar de Finalizada a Pendiente' })
  @ApiResponse({ status: 404, description: 'Solicitud no encontrada' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateSolicitudDto) {
    return this.solicitudesService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una solicitud (solo si esta Finalizada)' })
  @ApiParam({ name: 'id', description: 'ID de la solicitud' })
  @ApiResponse({ status: 200, description: 'Solicitud eliminada' })
  @ApiResponse({ status: 400, description: 'No se puede eliminar porque esta En Proceso o no esta Finalizada' })
  @ApiResponse({ status: 404, description: 'Solicitud no encontrada' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.solicitudesService.remove(id);
  }
}

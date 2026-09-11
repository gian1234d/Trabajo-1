import { Controller, Get, Post, Put, Delete, Param, Query, Body } from '@nestjs/common';
import { SolicitudesService } from './solicitudes.service.js';

@Controller('solicitudes')
export class SolicitudesController {
  constructor(private readonly solicitudesService: SolicitudesService) {}

  @Get('buscar')
  buscar(
    @Query('estado') estado?: string,
    @Query('prioridad') prioridad?: string,
    @Query('categoria') categoria?: string,
  ) {
    return this.solicitudesService.buscar(estado, prioridad, categoria);
  }

  @Get()
  findAll() {
    return this.solicitudesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitudesService.findOne(Number(id));
  }

  @Post()
  create(@Body() dto: unknown) {
    return this.solicitudesService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: unknown) {
    return this.solicitudesService.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitudesService.remove(Number(id));
  }
}

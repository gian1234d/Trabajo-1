import { IsOptional, IsString, MinLength, IsIn, IsNotEmpty } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotFutureDate } from '../validators/is-not-future-date.validator.js';

export class UpdateSolicitudDto {
  @ApiPropertyOptional({ example: 'Problema con conexion a internet solucionado' })
  @IsOptional()
  @IsString({ message: 'El titulo debe ser un texto' })
  @MinLength(5, { message: 'El titulo debe tener al menos 5 caracteres' })
  titulo?: string;

  @ApiPropertyOptional({ example: 'Empresa Demo SpA' })
  @IsOptional()
  @IsString({ message: 'El cliente debe ser un texto' })
  @IsNotEmpty({ message: 'El cliente no puede estar vacio' })
  cliente?: string;

  @ApiPropertyOptional({
    example: 'Redes',
    enum: ['Hardware', 'Software', 'Redes', 'Seguridad', 'Soporte Usuario'],
  })
  @IsOptional()
  @IsIn(['Hardware', 'Software', 'Redes', 'Seguridad', 'Soporte Usuario'], {
    message: 'La categoria debe ser Hardware, Software, Redes, Seguridad o Soporte Usuario',
  })
  categoria?: string;

  @ApiPropertyOptional({
    example: 'Media',
    enum: ['Baja', 'Media', 'Alta', 'Crítica', 'Critica'],
  })
  @IsOptional()
  @IsIn(['Baja', 'Media', 'Alta', 'Crítica', 'Critica'], {
    message: 'La prioridad debe ser Baja, Media, Alta o Critica',
  })
  prioridad?: string;

  @ApiPropertyOptional({
    example: 'En Proceso',
    enum: ['Pendiente', 'En Proceso', 'Finalizada'],
  })
  @IsOptional()
  @IsIn(['Pendiente', 'En Proceso', 'Finalizada'], {
    message: 'El estado debe ser Pendiente, En Proceso o Finalizada',
  })
  estado?: string;

  @ApiPropertyOptional({ example: 'Se configuro nuevamente el router y se restablecio la conexion' })
  @IsOptional()
  @IsString({ message: 'La descripcion debe ser un texto' })
  @MinLength(15, { message: 'La descripcion debe tener al menos 15 caracteres' })
  descripcion?: string;

  @ApiPropertyOptional({ example: '2026-09-11' })
  @IsOptional()
  @IsNotFutureDate({ message: 'La fecha de solicitud no puede ser posterior a la fecha actual' })
  fechaSolicitud?: string;
}

import { IsNotEmpty, IsString, MinLength, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotFutureDate } from '../validators/is-not-future-date.validator.js';

export class CreateSolicitudDto {
  @ApiProperty({ example: 'Problema con conexion a internet', description: 'Titulo de la solicitud' })
  @IsNotEmpty({ message: 'El titulo no puede estar vacio' })
  @IsString({ message: 'El titulo debe ser un texto' })
  @MinLength(5, { message: 'El titulo debe tener al menos 5 caracteres' })
  titulo: string;

  @ApiProperty({ example: 'Empresa Demo SpA', description: 'Nombre del cliente' })
  @IsNotEmpty({ message: 'El cliente no puede estar vacio' })
  @IsString({ message: 'El cliente debe ser un texto' })
  cliente: string;

  @ApiProperty({
    example: 'Redes',
    enum: ['Hardware', 'Software', 'Redes', 'Seguridad', 'Soporte Usuario'],
    description: 'Categoria de la solicitud',
  })
  @IsNotEmpty({ message: 'La categoria no puede estar vacia' })
  @IsIn(['Hardware', 'Software', 'Redes', 'Seguridad', 'Soporte Usuario'], {
    message: 'La categoria debe ser Hardware, Software, Redes, Seguridad o Soporte Usuario',
  })
  categoria: string;

  @ApiProperty({
    example: 'Alta',
    enum: ['Baja', 'Media', 'Alta', 'Crítica', 'Critica'],
    description: 'Prioridad de la solicitud',
  })
  @IsNotEmpty({ message: 'La prioridad no puede estar vacia' })
  @IsIn(['Baja', 'Media', 'Alta', 'Crítica', 'Critica'], {
    message: 'La prioridad debe ser Baja, Media, Alta o Critica',
  })
  prioridad: string;

  @ApiProperty({ example: 'No hay acceso a la red local desde los equipos de administracion', description: 'Descripcion del problema' })
  @IsNotEmpty({ message: 'La descripcion no puede estar vacia' })
  @IsString({ message: 'La descripcion debe ser un texto' })
  @MinLength(15, { message: 'La descripcion debe tener al menos 15 caracteres' })
  descripcion: string;

  @ApiProperty({ example: '2026-09-11', description: 'Fecha de la solicitud' })
  @IsNotEmpty({ message: 'La fecha de solicitud es obligatoria' })
  @IsNotFutureDate({ message: 'La fecha de solicitud no puede ser posterior a la fecha actual' })
  fechaSolicitud: string;
}

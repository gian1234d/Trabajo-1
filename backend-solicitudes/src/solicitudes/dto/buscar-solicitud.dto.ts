import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class BuscarSolicitudDto {
  @ApiPropertyOptional({ example: 'Pendiente', description: 'Filtrar por estado' })
  @IsOptional()
  @IsString()
  estado?: string;

  @ApiPropertyOptional({ example: 'Alta', description: 'Filtrar por prioridad' })
  @IsOptional()
  @IsString()
  prioridad?: string;

  @ApiPropertyOptional({ example: 'Redes', description: 'Filtrar por categoria' })
  @IsOptional()
  @IsString()
  categoria?: string;
}

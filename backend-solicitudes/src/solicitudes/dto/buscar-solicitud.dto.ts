import { IsOptional, IsString } from 'class-validator';

export class BuscarSolicitudDto {
  @IsOptional()
  @IsString()
  estado?: string;

  @IsOptional()
  @IsString()
  prioridad?: string;

  @IsOptional()
  @IsString()
  categoria?: string;
}

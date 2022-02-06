import { PartialType } from '@nestjs/swagger';
import { CreateValueDto } from './create-value.dto';

export class UpdateValueDto extends PartialType(CreateValueDto) {}

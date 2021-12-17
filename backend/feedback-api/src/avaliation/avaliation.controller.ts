import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AvaliationService } from './avaliation.service';
import { CreateAvaliationDto } from './dto/create-avaliation.dto';
import { UpdateAvaliationDto } from './dto/update-avaliation.dto';

@ApiTags('Avaliation')
@Controller('avaliation')
export class AvaliationController {
  constructor(private readonly avaliationService: AvaliationService) {}

  @Post()
  create(@Body() createAvaliationDto: CreateAvaliationDto) {
    return this.avaliationService.create(createAvaliationDto);
  }

  @Get()
  findAll() {
    return this.avaliationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avaliationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAvaliationDto: UpdateAvaliationDto,
  ) {
    return this.avaliationService.update(+id, updateAvaliationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avaliationService.remove(+id);
  }
}

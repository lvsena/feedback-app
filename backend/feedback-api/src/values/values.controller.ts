import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ValuesService } from './values.service';
import { CreateValueDto } from './dto/create-value.dto';
import { UpdateValueDto } from './dto/update-value.dto';

@Controller('values')
export class ValuesController {
  constructor(private readonly valuesService: ValuesService) {}

  @Post()
  create(@Body() createValueDto: CreateValueDto) {
    return this.valuesService.create(createValueDto);
  }

  @Get()
  findAll() {
    return this.valuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.valuesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateValueDto: UpdateValueDto) {
    return this.valuesService.update(+id, updateValueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.valuesService.remove(+id);
  }
}

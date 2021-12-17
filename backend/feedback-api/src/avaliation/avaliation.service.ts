import { Injectable } from '@nestjs/common';
import { CreateAvaliationDto } from './dto/create-avaliation.dto';
import { UpdateAvaliationDto } from './dto/update-avaliation.dto';

@Injectable()
export class AvaliationService {
  create(createAvaliationDto: CreateAvaliationDto) {
    return 'This action adds a new avaliation';
  }

  findAll() {
    return `This action returns all avaliation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} avaliation`;
  }

  update(id: number, updateAvaliationDto: UpdateAvaliationDto) {
    return `This action updates a #${id} avaliation`;
  }

  remove(id: number) {
    return `This action removes a #${id} avaliation`;
  }
}

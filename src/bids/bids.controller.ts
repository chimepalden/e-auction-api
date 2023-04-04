import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BidsService } from './bids.service';
import { CreateBidDto } from './dto/create-bid.dto';
import { UpdateBidDto } from './dto/update-bid.dto';

@Controller('bids')
export class BidsController {
  constructor(private readonly bidsService: BidsService) {}

  @Post()
  async create(@Body() createBidDto: CreateBidDto): Promise<CreateBidDto> {
    return this.bidsService.create(createBidDto);
  }

  @Get()
  async findAll(): Promise<CreateBidDto[]> {
    return this.bidsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CreateBidDto> {
    return this.bidsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBidDto: UpdateBidDto,
  ): Promise<CreateBidDto> {
    return this.bidsService.update(id, updateBidDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<CreateBidDto> {
    return this.bidsService.remove(id);
  }
}

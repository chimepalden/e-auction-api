import { Type } from 'class-transformer';
import { IsNotEmpty, IsNotEmptyObject, ValidateNested } from 'class-validator';
import { CreateUserDto } from '../../users/dto/create-user.dto';

export class CreateBidDto {
  bidId: string;

  @IsNotEmpty()
  bidAmount: number;

  @IsNotEmpty()
  productId: string;

  @ValidateNested()
  @Type(() => CreateUserDto)
  @IsNotEmptyObject()
  bidder: CreateUserDto;
}

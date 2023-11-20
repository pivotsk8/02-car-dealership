// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';
//Con el partial type se puede estender de otra calse y hace que todas sus propiedades sean opcionales
// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

import { IsString, MinLength } from "class-validator";

export class UpdateBrandDto {
    @IsString()
    @MinLength(3)
    name: string;
}

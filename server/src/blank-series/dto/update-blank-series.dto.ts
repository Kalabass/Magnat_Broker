import { PartialType } from '@nestjs/mapped-types';
import { CreateBlankSeriesDto } from './create-blank-series.dto';

export class UpdateBlankSeriesDto extends PartialType(CreateBlankSeriesDto) {}

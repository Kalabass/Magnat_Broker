import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from '@nestjs/common';
import { CreatePaymentTypeDto } from './dto/create-payment-type.dto';
import { UpdatePaymentTypeDto } from './dto/update-payment-type.dto';
import { PaymentTypesService } from './payment-types.service';

@Controller('paymentTypes')
export class PaymentTypesController {
	constructor(private readonly paymentTypesService: PaymentTypesService) {}

	@Post()
	create(@Body() createPaymentTypeDto: CreatePaymentTypeDto) {
		return this.paymentTypesService.create(createPaymentTypeDto);
	}

	@Get()
	findAll() {
		return this.paymentTypesService.findAll();
	}

	@Get('/seed')
	seed() {
		return this.paymentTypesService.seed();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.paymentTypesService.findOne(+id);
	}

	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updatePaymentTypeDto: UpdatePaymentTypeDto
	) {
		return this.paymentTypesService.update(+id, updatePaymentTypeDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.paymentTypesService.remove(+id);
	}
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaymentTypeDto } from './dto/create-payment-type.dto';
import { UpdatePaymentTypeDto } from './dto/update-payment-type.dto';
import { PaymentType } from './entities/payment-type.entity';

@Injectable()
export class PaymentTypesService {
	constructor(
		@InjectRepository(PaymentType)
		private readonly paymentTypeRepository: Repository<PaymentType>
	) {}
	create(createPaymentTypeDto: CreatePaymentTypeDto) {
		return 'This action adds a new paymentType';
	}

	async findAll() {
		return await this.paymentTypeRepository.find();
	}

	findOne(id: number) {
		return `This action returns a #${id} paymentType`;
	}

	update(id: number, updatePaymentTypeDto: UpdatePaymentTypeDto) {
		return `This action updates a #${id} paymentType`;
	}

	remove(id: number) {
		return `This action removes a #${id} paymentType`;
	}

	async seed() {
		const PAYMENT_TYPES_NAMES = ['ibox', 'Наличные', 'По ссылке'];
		try {
			const paymentTypes = await this.findAll();

			if (paymentTypes.length !== 0) return 'Table Already seeded';
			await PAYMENT_TYPES_NAMES.forEach((name) => {
				this.paymentTypeRepository.save({ name: name });
			});

			return 'PaymentType Table successfully seeded';
		} catch (error) {
			console.log(error);
		}
	}
}

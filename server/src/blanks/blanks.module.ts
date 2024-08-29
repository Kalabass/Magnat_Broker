import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BanksModule } from 'src/banks/banks.module';
import { BanksService } from 'src/banks/banks.service';
import { Bank } from 'src/banks/entities/bank.entity';
import { ClientsModule } from 'src/clients/clients.module';
import { ClientsService } from 'src/clients/clients.service';
import { Client } from 'src/clients/entities/client.entity';
import { EmployeesModule } from 'src/employees/employees.module';
import { EmployeesService } from 'src/employees/employees.service';
import { Employee } from 'src/employees/entities/employee.entity';
import { InsuranceCompany } from 'src/insurance-companies/entities/insurance-company.entity';
import { InsuranceCompaniesModule } from 'src/insurance-companies/insurance-companies.module';
import { InsuranceCompaniesService } from 'src/insurance-companies/insurance-companies.service';
import { InsuranceType } from 'src/insurance-types/entities/insurance-type.entity';
import { InsuranceTypesModule } from 'src/insurance-types/insurance-types.module';
import { InsuranceTypesService } from 'src/insurance-types/insurance-types.service';
import { SellingPoint } from 'src/selling-points/entities/selling-point.entity';
import { SellingPointsModule } from 'src/selling-points/selling-points.module';
import { SellingPointsService } from 'src/selling-points/selling-points.service';
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';
import { VehiclesModule } from 'src/vehicles/vehicles.module';
import { VehiclesService } from 'src/vehicles/vehicles.service';
import { BlanksController } from './blanks.controller';
import { BlanksService } from './blanks.service';
import { Blank } from './entities/blank.entity';

@Module({
  imports: [
    VehiclesModule,
    BanksModule,
    ClientsModule,
    EmployeesModule,
    InsuranceCompaniesModule,
    InsuranceTypesModule,
    SellingPointsModule,
    TypeOrmModule.forFeature([
      Blank,
      Bank,
      Client,
      Employee,
      InsuranceCompany,
      InsuranceType,
      SellingPoint,
      Vehicle,
    ]),
  ],
  controllers: [BlanksController],
  providers: [
    VehiclesService,
    BlanksService,
    BanksService,
    ClientsService,
    EmployeesService,
    InsuranceCompaniesService,
    InsuranceTypesService,
    SellingPointsService,
  ],
})
export class BlanksModule {}

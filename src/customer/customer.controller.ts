import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  HttpStatus,
  NotFoundException,
  Res,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDTO } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post()
  async addCustomer(@Res() res, @Body() createCustomerDTO: CreateCustomerDTO) {
    const customer = await this.customerService.addCustomer(createCustomerDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Customer has been created successfully',
      customer,
    });
  }

  @Get()
  async getAllCustomer(@Res() res) {
    const customer = await this.customerService.getAllCustomer();
    return res.status(HttpStatus.OK).json(customer);
  }

  @Get(':customerID')
  async getCustomer(@Res() res, @Param('customerID') customerID) {
    const customer = await this.customerService.getCustomer(customerID);
    if (!customer) throw new NotFoundException('Customer does not exist!');
    return res.status(HttpStatus.OK).json(customer);
  }

  @Put()
  async updateCustomer(
    @Res() res,
    @Query('customerID') customerID,
    @Body() createCustomerDTO: CreateCustomerDTO,
  ) {
    const customer = await this.customerService.updateCustomer(
      customerID,
      createCustomerDTO,
    );
    if (!customer) throw new NotFoundException('Customer does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Customer has been successfully updated',
      customer,
    });
  }

  @Delete()
  async deleteCustomer(@Res() res, @Query('customerID') customerID) {
    const customer = await this.customerService.deleteCustmer(customerID);
    if (!customer) throw new NotFoundException('Customer does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Customer has been deleted',
      customer,
    });
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { get } from 'http';
import { threadId } from 'worker_threads';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private empService: EmployeeService) {}

  @Get()
  getAllEmployee() {
    return this.empService.getAll();
  }
  @Post()
  createEmployee(@Body() data: any) {
    return this.empService.create(data);
  }
  @Get(':id')
  getEmpById(@Param('id') id: string) {
    return this.empService.findById(id);
  }
  @Delete(':id')
  deleteEmployee(@Param('id') id: string) {
    return this.empService.destroy(id);
  }
  @Put()
  updateEmployee(@Param('id') id: string, @Body() data) {
    return this.empService.update(id, data);
  }
}

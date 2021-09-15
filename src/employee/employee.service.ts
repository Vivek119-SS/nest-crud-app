import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private EmployeeRepositroy: Repository<Employee>,
  ) {}

  async getAll() {
    return await this.EmployeeRepositroy.find();
  }
  async create(employee) {
    const newEmp = await this.EmployeeRepositroy.create(employee);
    await this.EmployeeRepositroy.save(newEmp);
    return newEmp;
  }
  async findById(id: string) {
    return await this.EmployeeRepositroy.findOne({ where: { id } });
  }

  async update(id: string, data: any) {
    await this.EmployeeRepositroy.update({ id }, data);
    return await this.EmployeeRepositroy.findOne({ where: { id } });
  }

  async destroy(id: string) {
    return await this.EmployeeRepositroy.delete({ id });
  }
}

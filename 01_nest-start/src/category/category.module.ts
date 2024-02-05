import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import CategoriesController from './category.controller';
import Category from './entities/category.entity';
import CategoriesService from './category.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
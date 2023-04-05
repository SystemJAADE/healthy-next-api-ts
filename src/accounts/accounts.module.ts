import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { AccountsRepository } from './accounts.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AccountsService, AccountsRepository],
  exports: [AccountsService, AccountsRepository],
  controllers: [AccountsController],
})
export class AccountsModule {}
